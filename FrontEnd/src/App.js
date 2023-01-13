import "./App.css";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
