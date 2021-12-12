import React from "react";
import AboutMe from "../../components/about-me/about-me.component";
import ImageContainer from "../../components/image-collection/image-collection.component";

import './about.styles.scss';


const AboutPage = () => {
    return (
        <div className="about">
            <div className="who-am-i">
                <h2>Who am I?</h2>
            </div>
            <div className="about__container">
                <ImageContainer/>
                <AboutMe/>
            </div>
            <div className="about__resume">
                <div className="horizontal__line"/>
                <div className="resume">
                    test
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
