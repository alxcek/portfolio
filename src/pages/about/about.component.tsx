import React, {useEffect} from "react";
import AboutMe from "../../components/about-me/about-me.component";
import ImageContainer from "../../components/image-collection/image-collection.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import resume from "../../assets/props/resume.png";

import './about.styles.scss';


const AboutPage = () => {

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

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
                    <h2>Resume</h2>
                    <img src={resume} alt={resume} className="resume-image"/>
                    <div className="btn">
                        <a href="https://7aske.com" target="_blank" rel="noreferrer"><CustomButton inverted>Download</CustomButton></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
