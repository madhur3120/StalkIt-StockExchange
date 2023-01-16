import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' id="services">
      <h1>Check out our stock prices</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              text='All the tools you need to make wise investment decisions.'
              path='/about'
            />
            <CardItem
              src='https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              text='Gain insights into the company shareholding structure along with historical trends'
              path='/login'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;
