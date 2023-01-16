import React from 'react';
import "./Trans.css";
import comp from "../../assests/companies.jpg";
const Trans=()=>{
    return (
      <div className="toppppppp">
        <div className="lefttsidee">
            <h1>NSE/BSE</h1>
        </div>
        <div className="rigttsidee">
            <img src={comp}></img>
            <h1>Companies</h1>
        </div>
      </div>
    );
}
export default Trans;