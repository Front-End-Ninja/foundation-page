import React, { useState } from "react";
import "../../scss/register/register.scss";

import Navigation from "../Home/Navigation";
import decoration from "../../assets/Decoration.svg";
import { MIN_LENGTH } from "./Validation";

import firebase from "../../firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    if (email.length < MIN_LENGTH) {
      setErrorEmail(true);
    } else if (newPassword !== repeatPassword && newPassword <= MIN_LENGTH) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, newPassword)
        .catch(function (error) {
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
          console.log("zarejstrowano");
        })
        .then(() => {
          setEmail("");
          setNewPassword("");
          setRepeatPassword("");
        });
    }
  };

  return (
    <>
      <Navigation />
      <main className="register">
        <h1 className="register__title">Załóż kotno</h1>
        <img
          src={decoration}
          alt="decoration"
          className="register__decoration"
        />

        <form className="register__form" onSubmit={onSubmit}>
          <p
            className={
              errorEmail
                ? "register__form__validation-error"
                : "register__form__validation"
            }
          >
            Nie poprawny email
          </p>

          <label htmlFor="email" className="register__form__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="register__form__input"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />

          <p
            className={
              errorPassword
                ? "register__form__validation-error"
                : "register__form__validation"
            }
          >
            Nie poprawne hasło
          </p>

          <label htmlFor="password" className="register__form__label">
            Hasło
          </label>
          <input
            type="password"
            id="password"
            className="register__form__input"
            value={newPassword}
            onChange={(e) => setNewPassword(e.currentTarget.value)}
          />

          <label htmlFor="repeatPassword" className="register__form__label">
            Powtórz hasło
          </label>
          <input
            type="password"
            id="repeatPassword"
            className="register__form__input"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.currentTarget.value)}
          />

          <button type="submit" className="register__form__button">
            Załóż konto
          </button>
        </form>
      </main>
    </>
  );
};

export default Register;
