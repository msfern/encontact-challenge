import React from 'react';
import './style.css';

const Item = () => {
  return (
    <div className='item'>
      <div className='item-left'>
        <div className='item-left__circle'>
          <span className='initial'>R</span>
        </div>
      </div>
      <div className='item-body'>
        <div className='item-body__top'>
          <div className='sender'>Remetente</div>
          <div className='icons'>
            <span>
              <i className="far fa-trash-alt"></i>
            </span>
            <span>
              <i className="far fa-envelope"></i>
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
          <div className='title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quisquam assumenda dolor dolores nemo a consequatur ea blanditiis ut eaque reiciendis! Fugit debitis quaerat autem facilis veritatis numquam sed alias!</div>
          <div className='date'>Jun 5/4</div>
        </div>
        <div className='item-body__bottom'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quisquam assumenda dolor dolores nemo a consequatur ea blanditiis ut eaque reiciendis! Fugit debitis quaerat autem facilis veritatis numquam sed alias!
        </div>
      </div>
    </div>
  )
}

export default Item
