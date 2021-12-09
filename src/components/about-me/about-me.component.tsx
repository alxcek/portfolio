import React from "react";
import {Link} from "react-router-dom";

import "./about-me.styles.scss";

const AboutMe = () => {
    return (
        <div className="about__container__info">
            <h3>
                Hi, my name is Aleksa Cekić - a Software Engineering student living in Niš, Serbia.
                I'm currently working as a Full-stack software developer on service-oriented systems.
                My interests are Artificial Intelligence, Machine Learning and Web Design. <br/>
                Have a good day!
            </h3>
            <div className="horizontal__line"/>
            <div className="resume">
                <Link to="/">resume</Link> - <Link to="mailto:aleksa.cekic8@gmail.com">mail</Link>
            </div>
        </div>
    )
}

export default AboutMe;
