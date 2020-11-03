import React, { useState } from "react";
import "../../scss/home/whoWeHelp.scss";
import decoration from "../../assets/Decoration.svg";

const WhoWeHelp = () => {
  const [slider, setSlider] = useState(1);

  const handleFirst = () => {
    setSlider(1);
  };
  const handleSecond = () => {
    setSlider(2);
  };
  const handleThird = () => {
    setSlider(3);
  };

  return (
    <section className="whoHelp" id="whoHelp">
      <h1 className="whoHelp__title">Komu pomagamy?</h1>
      <img src={decoration} alt="decoration" className="whoHelp__img" />
      <div className="whoHelp__box">
        <h2
          onClick={handleFirst}
          className={
            slider === 1
              ? "whoHelp__box__organization whoHelp__box__organization__active"
              : "whoHelp__box__organization"
          }
        >
          Fundacjom
        </h2>
        <h2
          onClick={handleSecond}
          className={
            slider === 2
              ? "whoHelp__box__organization whoHelp__box__organization__active"
              : "whoHelp__box__organization"
          }
        >
          Organizacją pozarządowym
        </h2>
        <h2
          onClick={handleThird}
          className={
            slider === 3
              ? "whoHelp__box__organization whoHelp__box__organization__active"
              : "whoHelp__box__organization"
          }
        >
          Lokalnym zbiórkom
        </h2>
      </div>
      <div
        className={slider === 1 ? "whoHelp__content" : "whoHelp__content__hide"}
      >
        <p className="whoHelp__content__text">
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
          czego potrzebują.
        </p>
        <div className="whoHelp__content__section">
          <div>
            <h2 className="whoHelp__content__section__title">
              Fundacja "Dbam o zdrowie"
            </h2>
            <p>
              Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
              życiowej.
            </p>
          </div>
          <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
        </div>
        <div className="whoHelp__content__section">
          <div>
            <h2 className="whoHelp__content__section__title">
              Fundacja "Dla dzieci"
            </h2>
            <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
          </div>
          <p>ubrania, meble, zabawki</p>
        </div>
        <div className="whoHelp__content__section">
          <div>
            <h2 className="whoHelp__content__section__title">
              Fundacja "Bez domu"
            </h2>
            <p>
              Cel i misja: Pomoc dla osób nie posiadających miejsca
              zamieszkania.
            </p>
          </div>
          <p>ubrania, jedzenie, ciepłe koce</p>
        </div>
      </div>
      <div
        className={slider === 2 ? "whoHelp__content" : "whoHelp__content__hide"}
      >
        <p className="whoHelp__content__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <div className="whoHelp__content__section">
          <div>
            <h2 className="whoHelp__content__section__title">
              Organizacja "Lorem Ipsum 1"
            </h2>
            <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
          </div>
          <p>Egestas, sed, tempus</p>
        </div>
        <div className="whoHelp__content__section">
          <div>
            <h2 className="whoHelp__content__section__title">
              Organizacja "Lorem Ipsum 2"
            </h2>
            <p>
              Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.
            </p>
          </div>
          <p>Ut, aliquam, purus, sit, amet</p>
        </div>
        <div className="whoHelp__content__section">
          <div>
            <h2 className="whoHelp__content__section__title">
              Organizacja "Lorem Ipsum 3"
            </h2>
            <p>Scelerisque in dictum non consectetur a erat nam.</p>
          </div>
          <p>Mi, quis, hendrerit, dolor</p>
        </div>
      </div>
      <div
        className={slider === 3 ? "whoHelp__content" : "whoHelp__content__hide"}
      >
        <p className="whoHelp__content__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <div className="whoHelp__content__section">
          <div>
            <h2 className="whoHelp__content__section__title">
              Zbiórka "Lorem Ipsum 1"
            </h2>
            <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
          </div>
          <p>Egestas, sed, tempus</p>
        </div>
        <div className="whoHelp__content__section">
          <div>
            <h2 className="whoHelp__content__section__title">
              Zbiórka "Lorem Ipsum 2"
            </h2>
            <p>
              Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.
            </p>
          </div>
          <p>Ut, aliquam, purus, sit, amet</p>
        </div>
        <div className="whoHelp__content__section">
          <div>
            <h2 className="whoHelp__content__section__title">
              Zbiórka "Lorem Ipsum 3"
            </h2>
            <p>Scelerisque in dictum non consectetur a erat nam.</p>
          </div>
          <p>Mi, quis, hendrerit, dolor</p>
        </div>
      </div>
      <div className="whoHelp__page">
        <p
          onClick={handleFirst}
          className={
            slider === 1
              ? "whoHelp__page__site whoHelp__page__site__active"
              : "whoHelp__page__site"
          }
        >
          1
        </p>
        <p
          onClick={handleSecond}
          className={
            slider === 2
              ? "whoHelp__page__site whoHelp__page__site__active"
              : "whoHelp__page__site"
          }
        >
          2
        </p>
        <p
          onClick={handleThird}
          className={
            slider === 3
              ? "whoHelp__page__site whoHelp__page__site__active"
              : "whoHelp__page__site"
          }
        >
          3
        </p>
      </div>
    </section>
  );
};

export default WhoWeHelp;
