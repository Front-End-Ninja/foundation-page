import React, { useState } from "react";
import firebase from "../../firebase";
import "../../scss/login/login.scss";

import decoration from "../../assets/Decoration.svg";

import Navigation from "../Home/Navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.replace("/");
      })
      .catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode + " " + errorMessage);
      });
  };

  return (
    <>
      <Navigation />
      <main className="login">
        <h1 className="login__title">Zaloguj</h1>
        <img src={decoration} alt="decoration" className="login__decoration" />

        <form className="login__form" onSubmit={onSubmit}>
          <label htmlFor="email" className="login__form__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="login__form__input"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />

          <label htmlFor="password" className="login__form__label">
            Hasło
          </label>
          <input
            type="password"
            id="password"
            className="login__form__input"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />

          <button type="submit" className="login__form__button">
            Zaloguj
          </button>
        </form>
      </main>
    </>
  );
};

export default Login;
