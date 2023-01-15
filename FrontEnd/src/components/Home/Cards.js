import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our stock prices</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              path='/services'
            />
            <CardItem
              src='https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              text='Travel through the Islands of Bali in a Private Cruise'
              path='/services'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;
