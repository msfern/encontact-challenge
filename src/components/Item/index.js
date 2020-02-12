import React from 'react';
import './style.css';

const Item = ({ details, index, deleteEmail, markAsRead, toggleRead, toggleSelect }) => {
  return (
    <div className={`item${details.read ? ' is-read' : ''}${details.selected ? ' selected' : ''}`} onClick={() => markAsRead(index)}>
      <div className='item-left'>
        <div className={`item-left__container${details.showSelector ? ' selector-visible' : ''}`}>
          <span className='initial'>{details.initials}</span>
          <input className='checkbox' type="checkbox"
            checked={details.selected}
            onClick={(e) => e.stopPropagation()}
            onChange={() => toggleSelect(index)}
        />
        </div>
      </div>
      <div className='item-body'>
        <div className='item-body__top'>
          <div className='sender'>Remetente</div>
          <div className='icons'>
            <span onClick={(e) => deleteEmail(e, details.id)}>
              <i className="far fa-trash-alt"></i>
            </span>
            <span onClick={(e) => toggleRead(e, index)}>
              <i className={details.read ? 'far fa-envelope' : 'far fa-envelope-open'}></i>
            </span>
            <span>
              <i className="far fa-flag"></i>
            </span>
            <span>
              <i className="fas fa-thumbtack"></i>
            </span>
          </div>
        </div>
        <div className='item-body__middle'>
          <div className='title'>{details.Title}</div>
          <div className='date'>Jun 5/4</div>
        </div>
        <div className='item-body__bottom'>{details.description}</div>
      </div>
    </div>
  )
}

export default Item
