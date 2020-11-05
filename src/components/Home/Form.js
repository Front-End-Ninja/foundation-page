import React, { useState } from "react";
import "../../scss/home/form.scss";

import { api } from "./Api";

const Form = () => {
  const [send, setSend] = useState(false);
  const [msg, setMsg] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  const handleClick = () => {
    setSend(true);
    api(msg, name, email);
  };

  return (
    <form className="form">
      <div className="form__box">
        <div className="form__box__layout">
          <label htmlFor="name" className="form__box__layout__label">
            Wpisz swoję imię
          </label>
          <input
            type="text"
            id="name"
            placeholder="np. Łukasz"
            className="form__box__layout__input"
            onSubmit={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__box__layout">
          <label htmlFor="email" className="form__box__layout__label">
            Wpisz swój email
          </label>
          <input
            type="email"
            id="email"
            placeholder="np. Łukasz@example.com"
            className="form__box__layout__input"
            onSubmit={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="form__area">
        <label htmlFor="textArea" className="form__area__label">
          Wpisz swoją wiadomość{" "}
        </label>
        <textarea
          onSubmit={(e) => setMsg(e.target.value)}
          className="form__area__textarea"
          id="textArea"
          placeholder="Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat."
        />
      </div>
      <p className={send ? "form__send" : "form__send-hide"}>
        Wiadomość wysłana
      </p>
      <button type="submit" onClick={handleClick} className="form__submit">
        Wyślij
      </button>
    </form>
  );
};

export default Form;
