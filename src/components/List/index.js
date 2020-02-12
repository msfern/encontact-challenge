import React from 'react';
import Item from '../Item/index';
import './style.css';

const List = ({ emails, deleteEmail, markAsRead, toggleRead, toggleSelect }) => {
  return (
    <div className='list'>
      { Object.keys(emails).map(email => (
        <Item 
          key={emails[email].id} 
          index={email} 
          details={emails[email]} 
          deleteEmail={deleteEmail} 
          markAsRead={markAsRead} 
          toggleRead={toggleRead} 
          toggleSelect={toggleSelect}
        />
      ))}
    </div>
  )
}

export default List
