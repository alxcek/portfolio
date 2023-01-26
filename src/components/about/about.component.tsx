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
                    <span>Aleksa is an experienced full-stack web developer with an emphasis</span>
                    <span>on back-end Spring Boot applications. Born in 1999 Niš, Serbia,</span>
                    <span>Aleksa is a senior year Software Engineering student with an interest</span>
                    <span>for Artificial Intelligence, Machine Learning and generally future of Technology.</span>
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
