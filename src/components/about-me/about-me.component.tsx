import React from "react";

import "./about-me.styles.scss";
import Progress from "../progress-bar/progress-bar.component";

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
                <ul>
                    <li><Progress title={"Java"} value={70}/></li>
                    <li><Progress title={"Typescript"} value={65}/></li>
                    <li><Progress title={"Python"} value={20}/></li>
                    <li><Progress title={"Spring Boot"} value={30}/></li>
                    <li><Progress title={"React"} value={70}/></li>
                    <li><Progress title={"Angular"} value={80}/></li>
                    <li><Progress title={"Databases / SQL"} value={80}/></li>
                </ul>
                {/*<span>Java</span>*/}
                {/*<span>Typescript</span>*/}
                {/*<span>Javascript</span>*/}
                {/*<span>Python</span>*/}
                {/*<span>Spring Boot</span>*/}
                {/*<span>React</span>*/}
                {/*<span>Angular</span>*/}
            </div>
        </div>
    )
}

export default AboutMe;
