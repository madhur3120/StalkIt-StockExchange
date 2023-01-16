import "./App.css";
import Login from "./components/Login/Login";
import { useCallback, useId, useState, useEffect } from "react";
import { AuthContext } from "./context/authcontext";
import SignUp from "./components/SignUp/SignUp";
import CompDropdown from "./components/dropdown/companies";
import MarketDropdown from "./components/dropdown/nsedropdown";
import Trans from "./components/transition/Trans";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Dropdown from "./components/dropdown/companies";
import LandingPage from "./components/Landing/LandingPage";
import NseDashboard from "./components/NseDashboard/NseDashboard";
import Test from "./components/Test/Test";
import BseDashboard from "./components/BseDashboard/BseDashboard";
import AboutUs from "./components/AboutUs/AboutUs";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [LoggedIn, setLoggedIn] = useState(false);
  const [userId, setuserId] = useState("");
  // const [userNumber, setuserNumber] = useState(0);

  const login = useCallback((uid) => {
    localStorage.setItem("userid", uid);
    setIsLoggedIn(true);
    setuserId(localStorage.getItem("userid"));
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setuserId(null);
  }, []);

  useEffect(() => {
    if (localStorage.hasOwnProperty("userid")) {
      setuserId(localStorage.getItem("userid"));
      setIsLoggedIn(true);
    }
  }, []);

  let routes;
  if (isLoggedIn) {
    routes = (
      <Router>
        <Routes>
          <Route path="/companies" element={<LandingPage />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<SignUp />} /> */}
          <Route path="/drop" element={<CompDropdown />} />
          <Route path="/market" element={<MarketDropdown />} />
          <Route path="/nsedashboard" element={<NseDashboard />} />
          <Route path="/bsedashboard" element={<BseDashboard />} />
          <Route path="/best-stocks" element={<Test />} />
          <Route path="/" element={<Trans />} />

        </Routes>
      </Router>
    );
  } else {
    routes = (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/drop" element={<CompDropdown />} /> */}
          {/* <Route path="/market" element={<MarketDropdown />} /> */}
        </Routes>
      </Router>
    );
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        <main>{routes}</main>
      </AuthContext.Provider>
    </>
  );
}

export default App;
