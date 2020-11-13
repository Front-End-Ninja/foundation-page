import React, { useState } from "react";
import firebase from "../../firebase";
import "../../scss/login/";
import decoration from "../../assets/Decoration.svg";
import Navigation from "../Home/Navigation";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, setError, errors } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onSubmit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch(function (err) {
        console.log(err);
        setError("email", {
          type: "manual",
          message: err.message,
        });
        setError("password", {
          type: "manual",
          message: err.message,
        });
      });
  };
  return (
    <>
      <Navigation />
      <main className="login">
        <h1 className="login__title">Zaloguj</h1>
        <img src={decoration} alt="decoration" className="login__decoration" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login__form">
            <label htmlFor="email" className="login__form__label">
              Email
            </label>
            {errors.email?.type === "required" && "Email jest wymagany"}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="np. Łukasz@example.com"
              ref={register({ required: true })}
              className="login__form__input"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <label htmlFor="password" className="login__form__label">
              Hasło
            </label>
            {errors.password?.type === "required" && "Hasło jest wymagane"}
            {errors.password?.type === "manual" && errors.password.message}
            {errors.password?.type === "minLength" && "minimum 6 znaków"}
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password min. 6 znaków"
              ref={register({ required: true, minLength: 6 })}
              className="login__form__input"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </div>
          <Link
            activeclass="active"
            className="login__form__reg"
            to="/register"
          >
            Załóż konto
          </Link>
          <button type="submit" className="login__form__btn">
            Zaloguj
          </button>
        </form>
      </main>
    </>
  );
};

export default Login;
