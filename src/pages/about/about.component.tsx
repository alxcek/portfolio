import React from "react";
import AboutMe from "../../components/about-me/about-me.component";
import ImageCollection from "../../components/image-collection/image-collection.component";

import './about.styles.scss';


const AboutPage = () => {
    return (
        <div className="about">
            <div className="about__container">
                <h2>About me</h2>
                <AboutMe />
                <ImageCollection />
            </div>
        </div>
    )
}

export default AboutPage;
