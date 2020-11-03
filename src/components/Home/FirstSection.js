import React from 'react';
import '../../scss/home/firstSection.scss';

const FirstSection = () =>{
    return(
        <section className="firstSection" id="firstSection">
            <div className="firstSection__box">
                <h1 className="firstSection__box__counter">10</h1>
                <h2 className="firstSection__box__title">Oddanych worków</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                    elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="firstSection__box">
                <h1 className="firstSection__box__counter">5</h1>
                <h2 className="firstSection__box__title">Wspartych organizacji</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                    elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="firstSection__box">
                <h1 className="firstSection__box__counter">7</h1>
                <h2 className="firstSection__box__title">Zorganizowanych zbiórek</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                    elementuma. Aliquam erat volutpat.</p>
            </div>
        </section>
    );
}

export default FirstSection;