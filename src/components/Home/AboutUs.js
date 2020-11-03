import React from "react";
import "./../../scss/home/aboutUs.scss";
import photo from "../../assets/People.jpg";
import decoration from "../../assets/Decoration.svg";
import signature from "../../assets/Signature.svg";

const AboutUs = () => {
  return (
    <section className="about" id="about">
      <div className="about__content">
        <h1 className="about__content__title">O nas</h1>
        <img src={decoration} alt="decoration" />
        <p className="about__content__text">
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <img src={signature} alt="signature" className="signature" />
      </div>
      <img src={photo} alt="people" className="about__img" />
    </section>
  );
};

export default AboutUs;
