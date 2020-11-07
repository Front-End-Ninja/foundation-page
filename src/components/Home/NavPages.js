import React, { useState } from "react";
import "../../scss/navigation/navPages.scss";
import firebase from "../../firebase";
import { Link } from "react-router-dom";

const NavPages = () => {
  const [login, setLogin] = useState(false);

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      setLogin(user.email);
    } else {
      setLogin(false);
    }
  });

  if (login) {
    return (
      <>
        <p className="hello">Cześć {login}</p>
        <Link to="/logout" activeclass="active" className="navPages">
          Wyloguj
        </Link>
        <Link activeclass="active" className="navPages" to="/">
          Główna
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link activeclass="active" className="navPages" to="/">
          Główna
        </Link>
        <Link activeclass="active" className="navPages" to="/login">
          Zaloguj
        </Link>
        <Link activeclass="active" className="create" to="/register">
          Załóż konto
        </Link>
      </>
    );
  }
};

export default NavPages;
