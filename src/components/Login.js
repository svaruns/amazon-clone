import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to={"/"}>
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type={"email"}
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <h5>password</h5>
          <input
            type={"password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={login} className="login__signInButton" type="submit">
            Sign in{" "}
          </button>
        </form>

        <p>
          By signing-in you agree to Amazon's conditions of Use and Sale. Please
          see our Privacy Notice, our cookies Notice and our intrest based Ads
          Notice
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
