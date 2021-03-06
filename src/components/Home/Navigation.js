import React from "react";
import { Link } from "react-scroll";
import "../../scss/navigation/navigation.scss";
import NavPages from "./NavPages";

const Navigation = () => {
  return (
    <nav className="nav">
      <div>
        <NavPages />
      </div>
      <ul className="nav__list">
        <Link
          className="nav__list__start"
          activeclass="active"
          to="firstSection"
          smooth={true}
          offset={0}
          duration={500}
        >
          Start
        </Link>
        <Link
          className="nav__list__item"
          activeclass="active"
          to="secondSection"
          smooth={true}
          offset={0}
          duration={500}
        >
          O co chodzi?
        </Link>
        <Link
          className="nav__list__item"
          activeclass="active"
          to="about"
          smooth={true}
          offset={0}
          duration={500}
        >
          O nas
        </Link>
        <Link
          className="nav__list__item"
          activeclass="active"
          to="whoHelp"
          smooth={true}
          offset={20}
          duration={500}
        >
          Fundacja i organizacje
        </Link>
        <Link
          className="nav__list__item"
          activeclass="active"
          to="footer"
          smooth={true}
          offset={0}
          duration={500}
        >
          Kontakt
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
