import React from "react";
import "../../scss/logout";
import firebase from "../../firebase";
import decoration from "../../assets/Decoration.svg";

import { Link } from "react-router-dom";

const Logout = () => {
  firebase
    .auth()
    .signOut()
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode + " " + errorMessage);
    });

  return (
    <main className="logout">
      <h1 className="logout__title">Wylogowanie nastąpiło pomyślnie!</h1>
      <img src={decoration} alt="decoration" className="logout__img" />
      <Link to="/" className="logout__link">
        Strona główna
      </Link>
    </main>
  );
};

export default Logout;
