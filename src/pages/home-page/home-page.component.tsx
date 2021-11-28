import React from "react";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import email from "../../assets/email.svg";

import "./home-page.styles.scss";
import ArrowDown from "../../components/arrow-down/arrow-down.component";
import Projects from "../projects/projects.component";


const HomePage = () => {
    return (
        <section>
            <div className="home-page">

                <div className="home-page__text">
                    {/*<h2>*/}
                    {/*    ALEKSA CEKIĆ*/}
                    {/*</h2>*/}
                    <h2>Nice to see you!</h2>
                    <h3>I'm a <span/></h3>
                </div>
                <div className="home-page__description">
                    <p className="home-page__description__desc">
                        I'm a student that loves to learn new stuff and explore new challenges. I'm very passionate
                        about
                        breaking down complex problems into simple solutions.
                    </p>
                    <br/>
                    <p className="home-page__description__text">
                        Intern at ISUM @ Metropolitan University • Software Engineer
                        <div className="home-page__description__text__links">
                            <a href="mailto:aleksa.cekic8@gmail.com" target="_blank"
                               rel="noreferrer"> <img src={email} className="mail" alt="email"/> </a>
                            <a href="https://github.com/yxngalex" rel="noreferrer" target="_blank"> <img src={github}
                                                                                                         className="github"
                                                                                                         alt="github"/>
                            </a>
                            <a href="https://www.linkedin.com/in/aleksa-ceki%C4%87-347148224/" target="_blank"
                               rel="noreferrer"> <img src={linkedin} className="linkedin" alt="linkedin"/> </a>
                        </div>
                    </p>
                </div>
                <div className="home-page__arrow">
                    <ArrowDown/>
                </div>
            </div>
            <Projects />
        </section>
    );
}

export default HomePage;
