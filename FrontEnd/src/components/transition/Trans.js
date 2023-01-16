import React from 'react';
import "./Trans.css";
import comp from "../../assests/companies.jpg";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/authcontext";
// import { useContext } from "react";
const Trans=()=>{
  const navigate = useNavigate();
  
  const nseNavigate = () => {
    navigate("/nsedashboard");
  }
  const compNavigate = () => {
    navigate("/companies");
  }
    return (
      <div className="toppppppp">
        <div className="lefttsidee" onClick={nseNavigate}>
          <h1>NSE/BSE</h1>
        </div>
        <div className="rigttsidee" onClick={compNavigate}>
          {/* <img src={comp}></img> */}
          <h1>Companies</h1>
        </div>
      </div>
    );
}
export default Trans;