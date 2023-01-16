import React from 'react';
// import '../App.css';
import { useNavigate } from "react-router-dom";
import { Button } from './Button';
import './HeroSection.css';
import video from '../../assests/stockvideo.mp4'

function HeroSection() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/login");
  }
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>STALK IT</h1>
      <p>Stalk Your Stocks</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleClick}
        >
          GET STARTED
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
