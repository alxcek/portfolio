import React from "react";
import {Link} from "react-router-dom";

import "./footer.styles.scss";
import email from "../../assets/email-dark.svg";
import github from "../../assets/github-dark.svg";
import linkedin from "../../assets/linkedin-dark.svg";
// import arrow_up from "../../assets/arrow_up.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__container__block">
                    <h1>
                        Aleksa Cekić
                    </h1>
                    <div className="footer__container__block__list">
                        <Link to="/">Projects</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
                <div className="footer__container__block2">
                    <div className="footer__container__block2__info">
                        <h1 className="address">Niš, Serbia</h1>
                        <span className="email">aleksa.cekic8@gmail.com</span>
                        <div className="footer__container__block2__icons">
                            <a href="mailto:aleksa.cekic8@gmail.com" target="_blank"
                               rel="noreferrer">
                                <img src={email} className="mail" alt="email"/>
                            </a>
                            <a href="https://github.com/yxngalex" rel="noreferrer" target="_blank">
                                <img src={github}
                                     className="github"
                                     alt="github"/>
                            </a>
                            <a href="https://www.linkedin.com/in/aleksa-ceki%C4%87-347148224/" target="_blank"
                               rel="noreferrer">
                                <img src={linkedin} className="linkedin" alt="linkedin"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__underline">
                <div className="footer__underline__horizontal_line"/>
                <div className="footer__underline__content">
                    {/*<div className="name">@Aleksa Cekić 2022</div>*/}
                    {/*<div className="arrow_up"><img src={arrow_up} alt="arrow_up" /></div>*/}
                </div>
            </div>
        </div>
    )
}

export default Footer;
