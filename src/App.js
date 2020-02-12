import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from './components/List/index'
import './App.css';

function App() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    (async () => {
      const emailFetch = await axios.get('/origens.json');
      const modifiedEmailList = emailFetch.data.map(email => addExtraProperties(email));
      setEmails(modifiedEmailList); 
    })()
  }, [])

  function addExtraProperties(email) {
    email['read'] = false;
    email['selected'] = false;
    email['showSelector'] = false;
    return email;
  }

  function deleteEmail(e,index) {
    e.stopPropagation();
    const emailList = [...emails];
    const filteredEmails = emailList.filter(email => email.id !== index);
    setEmails(filteredEmails);
  }

  function markAsRead(index) {
    const emailList = [...emails];
    emailList[index].read = true;
    setEmails(emailList);
  }

  function toggleRead(e, index) {
    e.stopPropagation();
    const emailList = [...emails];
    emailList[index].read = !(emailList[index].read);
    setEmails(emailList);
  }

  function toggleSelect(index) {
    const emailList = [...emails];
    emailList[index].selected = !(emailList[index].selected);

    const selectedEmails = emailList.filter(email => email.selected === true);

    if(selectedEmails.length === 1) {
      emailList.map(email => email.showSelector = true);
    } else if(selectedEmails.length === 0){
      emailList.map(email => email.showSelector = false);
    }

    setEmails(emailList);
  }

  return (
    <div className="App">
        <List 
          emails={emails} 
          deleteEmail={deleteEmail} 
          markAsRead={markAsRead} 
          toggleRead={toggleRead}
          toggleSelect={toggleSelect}
        />
    </div>
  );
}

export default App;
