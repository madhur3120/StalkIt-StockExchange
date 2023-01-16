import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../context/authcontext";
import { useContext } from "react";

function Navbar() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  // const signinHandler = () => {
  //   setClick(false);
  //   navigate("/login");
  // };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const logoutHandler = () => {
    if (auth.isLoggedIn) {
      auth.logout();
      localStorage.removeItem("userid");
      navigate("/home");
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo webnamee"
            onClick={closeMobileMenu}
            style={{ textDecoration: "none" }}
          >
            STALK IT
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/nsedashboard"
                className="nav-links"
                onClick={closeMobileMenu}
                style={{ textDecoration: "none" }}
              >
                NSE/BSE
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#services"
                className="nav-links"
                style={{ textDecoration: "none" }}
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                style={{ textDecoration: "none" }}
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            {localStorage.hasOwnProperty("userid") ? (
              <li className="nav-items">
                <Link
                  to="/"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  style={{ textDecoration: "none" }}
                >
                  <button className="signinnnbuttt" onClick={logoutHandler}>
                    LOGOUT
                  </button>
                </Link>
              </li>
            ) : (
              <li className="nav-items">
                <Link
                  to="/login"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  style={{ textDecoration: "none" }}
                >
                  <button className="signinnnbuttt">SIGN UP</button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
