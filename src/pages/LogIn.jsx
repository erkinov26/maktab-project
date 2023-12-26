/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import bgLogInImage from "../assets/images/logInImage.png";
import { authAction } from "../store/Login";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const LogIn = () => {
  const dispatch = useDispatch();
  const loginRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [validation, setValidation] = useState(false);
  const LOGIN_ACCESS = useSelector(
    (state) => state.auth.access.isAuthenticated
  );
  const LOGIN_USERS = useSelector((state) => state.auth.users);
  console.log("LOGIN_USERS:", LOGIN_USERS);
  const submitLogin = (e) => {
    e.preventDefault();
    {
      LOGIN_USERS.map((user) => {
        if (
          user.login === loginRef.current.value &&
          user.password === passwordRef.current.value
        ) {
          dispatch(authAction.login());
          navigate("/main");
        } else {
          setValidation(true);
        }
      });
    }
  };
  return (
    <div className="logInSection">
      <div className="logInLeft">
        <img className="logInImage" src={bgLogInImage} alt="som" />
      </div>
      <div className="logInRight">
        <h1 style={{ textAlign: "center" }}>Kirish</h1>
        <form onSubmit={submitLogin} className="form">
          <div className="inputbox">
            <i className="bx bx-user"></i>
            <input
              ref={loginRef}
              type="text"
              placeholder="Login"
              className="inputLogIn"
            />
            <br />
          </div>
          <div className="inputbox">
            <i className="bx bx-lock-alt"></i>
            <input
              ref={passwordRef}
              type="text"
              placeholder="Parol"
              className="inputLogIn"
            />{" "}
            <br />
          </div>
          {validation ? (
            <p style={{ marginTop: "25px", color: "red" }}>
              Login yoki parol xato kiritilgan. Iltimos! qaytadan urinib
              ko`ring.
            </p>
          ) : null}
          <button>Kirish</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
