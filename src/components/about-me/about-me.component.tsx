import React from "react";

import "./about-me.styles.scss";

const AboutMe = () => {
    return (
        <div className="about__container__info">
            <h3>
                Hey, I'm Aleksa!
            </h3>
            <h4>
                An Software Engineering student living in Niš, Serbia.
            </h4>
            <h5>
                I'm a student of 3rd year at University Metropolitan of Niš, Serbia.
                Passionately studying Software Engineering and looking forward to expanding my present
                knowledge and expertise. Willing to join a highly professional team, to contribute and learn
                from more experienced colleagues.
            </h5>
            <h6>
                Have a good day!
            </h6>

            <div className="skills">
                <h3>Skills:</h3>
                <span>Java</span>
                <span>Typescript</span>
                <span>Javascript</span>
                <span>Python</span>
                <span>Spring Boot</span>
                <span>React</span>
                <span>Angular</span>
            </div>
        </div>
    )
}

export default AboutMe;
