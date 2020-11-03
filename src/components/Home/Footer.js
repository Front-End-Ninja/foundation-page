import React from "react";
import "../../scss/home/footer.scss";

import decoration from "../../assets/Decoration.svg";
import Form from "./Form";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__content">
        <h1 className="footer__content__title">Skontaktuj się z nami</h1>
        <img
          src={decoration}
          alt="decoration"
          className="footer__content__decoration"
        />
        <Form />
      </div>
    </footer>
  );
};

export default Footer;
