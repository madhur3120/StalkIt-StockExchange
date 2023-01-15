import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useRequest } from "../../hooks/request-hook";
import { useContext } from "react";
import { AuthContext } from "../../context/authcontext";
import login from "../../Database/login";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const { sendRequest } = useRequest();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isError, setisError] = useState(false);
  const [error, setError] = useState("");
  const [age, setAge] = useState("");

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const validateAge = (age) => {
    const agechecker = /^[0-9]+$/;
    return agechecker.test(String(age));
  };
  const signupHandler = async (e) => {
    e.preventDefault();

    if (email && password && username && age) {
      if (validateEmail(email)) {
        if (validateAge(age)) {
          setError("");
          setisError(false);
          e.preventDefault();

          const response = await sendRequest(
            "http://localhost:5001/users/signup",
            "POST",
            JSON.stringify({
              name: username,
              age: age,
              email: email,
              password: password,
            }),
            { "Content-Type": "application/json" }
          );
          // auth.login(response.user.id)
          console.log(isError);
          console.log(response, "checking response at signup");
          navigate("/login");
          setUsername("");
          setEmail("");
          setPassword("");
          setAge("");
          // setConfirmPassword('')
        } else {
          setError("Invalid Age");
          setisError(true);
        }
      } else {
        setError("Invalid email");
        setisError(true);
      }
    } else if (
      email === "" ||
      password === "" ||
      username === "" ||
      age === ""
    ) {
      setError("Please fill in all fields");
      setisError(true);
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setisError(true);
    }
  };
  return (
    <MDBContainer fluid className="p-3 h-custom">
      <MDBRow className="imageeeee">
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </MDBCol>

        <MDBCol col="4" md="6" className="rightsideeee">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

            <button
              floating
              size="md"
              tag="a"
              className="me-2 btn btn-outline-info"
            >
              <MDBIcon fab icon="facebook-f" />
            </button>

            <button
              floating
              size="md"
              tag="a"
              className="me-2 btn btn-outline-info"
            >
              <MDBIcon fab icon="twitter" />
            </button>

            <button
              floating
              size="md"
              tag="a"
              className="me-2 btn btn-outline-info"
            >
              <MDBIcon fab icon="linkedin-in" />
            </button>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>
          <MDBInput
            wrapperClass="mb-4"
            // label="Last Name"
            placeholder="Enter Name"
            id="formControlLg"
            type="text"
            size="lg"
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
          />
          <MDBInput
            wrapperClass="mb-4"
            // label="Last Name"
            placeholder="Enter Age"
            id="formControlLg"
            type="text"
            size="lg"
            onChange={(e) => {
              setAge(e.target.value);
              setError("");
            }}
          />
          <MDBInput
            wrapperClass="mb-4"
            // label="Email address"
            placeholder="Email"
            id="formControlLg"
            type="email"
            size="lg"
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
          />
          <MDBInput
            wrapperClass="mb-4"
            // label="Password"
            placeholder="Password"
            id="formControlLg"
            type="password"
            size="lg"
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />
          <div className="contain mb-3">
            {isError && (
              <span className="signError" style={{ color: "red" }}>
                {error}
              </span>
            )}
          </div>
          {/* <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div> */}

          <div className="text-center text-md-start mt-4 pt-2 loginbuttt">
            <button
              className="mb-0 px-5 btn btn-outline-info"
              size="lg"
              onClick={signupHandler}
            >
              Register
            </button>
          </div>
        </MDBCol>
      </MDBRow>

      {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 bg-primary footer">
        <div className="text-white mt-2">
          Copyright © 2020. All rights reserved.
        </div>

        <div>
          <button
            tag="a"
            color="none"
            className="mx-3 btn btn-primary"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="facebook-f" size="md" />
          </button>

          <button
            tag="a"
            color="none"
            className="mx-3 btn btn-primary"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="twitter" size="md" />
          </button>

          <button
            tag="a"
            color="none"
            className="mx-3 btn btn-primary"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="google" size="md" />
          </button>

          <button
            tag="a"
            color="none"
            className="mx-3 btn btn-primary"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="linkedin-in" size="md" />
          </button>
        </div>
      </div> */}
    </MDBContainer>
  );
};

export default SignUp;
