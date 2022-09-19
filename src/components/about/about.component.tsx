import React, {useEffect} from "react";

import './about.styles.scss';


const AboutPage = () => {

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

    return (
        <React.Fragment>
            <div className="about_me">
                <p>
                    <span>Born in 1999</span>
                    <span>In Nis, Serbia.</span>
                    <span>Aleksa is a software engineer</span>
                    <span>student who believes</span>
                    <span>that software engineering</span>
                    <span>is a path</span>
                    <span>of the future.</span>
                    <span>He's a fourth year</span>
                    <span>student at University Metropolitan</span>
                    <span>with a mission</span>
                    <span>to learn and adapt</span>
                    <span>intuitive problem-solving skills</span>
                    <span>into real-world applications.</span>
                </p>
            </div>
            <div className="description">
                <div className="description__text">
                    <a href="mailto:aleksa.cekic8@gmail.com" target="_blank"
                       rel="noreferrer">
                        Email <span>↗</span>
                    </a>
                    <a href="https://github.com/yxngalex" rel="noreferrer" target="_blank">
                        GitHub <span>↗</span>
                    </a>
                    <a href="https://www.linkedin.com/in/aleksa-ceki%C4%87-347148224/" target="_blank"
                       rel="noreferrer">
                        Linkedin <span>↗</span>
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AboutPage;
