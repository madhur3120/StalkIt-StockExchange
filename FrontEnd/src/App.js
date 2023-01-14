import "./App.css";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import CompDropdown from "./components/dropdown/companies";
import MarketDropdown from "./components/dropdown/nsedropdown";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Dropdown from "./components/dropdown/companies";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/drop" element={<CompDropdown />} />
        <Route path="/market" element={<MarketDropdown />} />
      </Routes>
    </Router>
  );
}

export default App;
