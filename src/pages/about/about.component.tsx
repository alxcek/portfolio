import React, {useEffect} from "react";

import './about.styles.scss';


const AboutPage = () => {

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

    return (
        <div className="about">
            {/*<div className="who-am-i">*/}
            {/*    <h2>Who am I?</h2>*/}
            {/*</div>*/}
            {/*<div className="about__container">*/}
            {/*    <ImageContainer/>*/}
            {/*    <AboutMe/>*/}
            {/*</div>*/}
            {/*<div className="about__resume">*/}
            {/*    <div className="horizontal__line"/>*/}
            {/*    <div className="resume">*/}
            {/*        <h2>Resume</h2>*/}
            {/*        <img src={resume} alt={resume} className="resume-image"/>*/}
            {/*        <div className="btn">*/}
            {/*            <CustomButton inverted onClick={() => {window.open("https://www.7aske.com")}}>Download</CustomButton>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default AboutPage;
