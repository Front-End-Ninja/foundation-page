import React from "react";
import "./../../scss/home/homeHero.scss"
import decoration from "../../assets/Decoration.svg";
import Navigation from "./Navigation";


const Hero = () => {
    return (
        <main className="main" id="main">
            <header className="main__header">
                <Navigation/>
            </header>
            <div className="main__content">
                <h1 className="main__content__text">Zacznij pomagać</h1>
                <h1 className="main__content__text">Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={decoration} alt="decoration" className="main__content__img"/>
            </div>
        </main>
    )
}
export default Hero;