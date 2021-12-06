import React from "react";
import {Link} from "react-router-dom";

import "./footer.styles.scss";

import email from "../../assets/email.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import logo from "../../assets/logo.svg";
import arrow_up from "../../assets/arrow-up.png";

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__content__links">
                    <div className="links">
                        <Link to='/'>Projects</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/contact' className="contact">Contact</Link>
                    </div>
                    <div className="footer__content__image_holder">
                        <Link to="/">
                            <img src={logo} alt="logo" className="logo"/>
                        </Link>
                    </div>
                </div>
                <div className="year">
                    @Aleksa Cekić 2022
                </div>
                <div className="footer__content__info">
                    <div className="address">
                        Niš, Serbia
                    </div>
                    <div className="email">
                        aleksa.cekic8@gmail.com
                    </div>
                    <div className="images">
                        <a href="mailto:aleksa.cekic8@gmail.com" target="_blank" rel="noreferrer">
                            <img src={email} className="email" alt={email}/>
                        </a>
                        <a href="https://github.com/yxngalex" target="_blank" rel="noreferrer">
                            <img src={github} className="github" alt={github}/>
                        </a>
                        <a href="https://www.linkedin.com/in/aleksa-ceki%C4%87-347148224" target="_blank" rel="noreferrer">
                            <img src={linkedin} className="linkedin" alt={linkedin}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="horizontal-line"/>
                <div className="scroll-up" onClick={scrollToTop}>
                    <img src={arrow_up} alt="scroll_up" className="arrow"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
