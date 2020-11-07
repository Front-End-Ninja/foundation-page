import React, { useState } from "react";
import "../../scss/register";
import Navigation from "../Home/Navigation";
import decoration from "../../assets/Decoration.svg";
import firebase from "../../firebase";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";


const Register = () => {
  const { register, handleSubmit, setError, errors, watch } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const history = useHistory();

  const onSubmit = () => {

      firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            history.push('/')
          })
          .then(() => {
            setEmail("");
            setPassword("");
            setRepeatPassword("");
          })
          .catch(function (err) {
            console.log(err);
            setError('email', {
              type: 'manual',
              message: err.message
            })
            setError('password', {
              type: 'manual',
              message: err.message
            })
            setError('repeatPassword', {
              type: 'manual',
              message: err.message
            })
          });
    };
  return (
      <>
        <Navigation />
        <main className="register">
          <h1 className="register__title">Załóż konto</h1>
          <img
              src={decoration}
              alt="decoration"
              className="register__decoration"
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="register__form">
              <label htmlFor="email" className="register__form__label">
                Email
              </label>
              {errors.email?.type === "required" && "email is required"}
              {errors.email?.type === "manual" && errors.email.message}
              <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="np. Łukasz@example.com"
                  ref={register({ required: true})}
                  className="register__form__input"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <label htmlFor="password" className="register__form__label">
                Hasło
              </label>
              {errors.password?.type === "required" && "password is required!" }
              {errors.password?.type === "minLength" && "minimum 6 letters" }
              <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password minimum 6 znaków"
                  ref={register({ required: true, minLength: 6})}
                  className="register__form__input"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <label htmlFor="repeatPassword" className="register__form__label">
                Powtórz hasło
              </label>
              {errors.repeatPassword?.type === "validate" && "incorrect password, password must be the same!"}
              {errors.repeatPassword?.type === "required" && "password is required!"}
              <input
                  type="password"
                  id="repeatPassword"
                  name="repeatPassword"
                  placeholder="confirm password"
                  ref={
                    register({
                      required: true, minLength: 6,
                    validate: (value) => value === watch('password')
                  })}
                  className="register__form__input"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.currentTarget.value)}
              />
            </div>
            <Link activeclass="active" className="register__form__login" to="/login">
              Zaloguj się
            </Link>
            <button type="submit" className="register__form__button">
              Załóż konto
            </button>
          </form>
        </main>
      </>
  );
};

export default Register;
