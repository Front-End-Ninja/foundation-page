import React from "react";
import "../../scss/loggedIn/info.scss";

const Info = () => {
  return (
    <section className="info">
      <h1 className="info__title">Ważne!</h1>
      <p className="info__text">
        Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
        wiedzieć komu najlepiej je przekazać.
      </p>
    </section>
  );
};

export default Info;
