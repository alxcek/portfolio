import React from "react";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

import "./home-page.styles.scss";


const HomePage = () => {
    return (
        <section className="home-page">
            <div className="home-page__text">
                {/*<h2>*/}
                {/*    ALEKSA CEKIĆ*/}
                {/*</h2>*/}
                <h2>Nice to see you!</h2>
                <h3>I'm a <span/></h3>
            </div>
            <div className="home-page__description">
                <p className="home-page__description__desc">
                    I'm a student that loves to learn new stuff and explore new challenges. I'm very passionate about breaking down complex problems into simple solutions.
                </p>
                <br/>
                <p className="home-page__description__text">
                    Intern at ISUM @ Metropolitan University • Software Engineer
                    <div className="home-page__description__text__links">
                        <a href="https://github.com/yxngalex" rel="noreferrer" target="_blank"> <img src={github} className="github" alt="github"/> </a>
                        <a href="https://www.linkedin.com/in/aleksa-ceki%C4%87-347148224/" target="_blank" rel="noreferrer"> <img src={linkedin} className="linkedin" alt="linkedin"/> </a>
                    </div>
                </p>
            </div>
        </section>
    );
}

export default HomePage;
