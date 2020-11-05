import React, { useState } from "react";
import "../../scss/loggedIn/links.scss";
import { Link } from "react-router-dom";
import firebase from "../../firebase";

const GiveClothesLink = () => {
  const [login, setLogin] = useState(null);

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  });

  if (login) {
    return (
      <Link to="/give-clothes" className="giveClothesLink">
        Oddaj rzeczy
      </Link>
    );
  } else {
    return (
      <Link to="/login" className="giveClothesLink">
        Oddaj rzeczy
      </Link>
    );
  }
};

export default GiveClothesLink;
