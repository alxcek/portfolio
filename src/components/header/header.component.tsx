import React, {useState} from "react";
import {Link} from "react-router-dom";

import "./header.styles.scss";
import Hamburger from "../hamburger-button/hamburger.component";


const Header = () => {
    const [status, setStatus] = useState("close");

    return (
        <header>
            <div className="header">
                <div className="header__logo__container">
                    <Link className="header__logo__container__logo" to="/">WELCOME</Link>
                </div>
                <div className={`header__options`}>
                    <Link className="header__options__option" to="/about">ABOUT</Link>
                    <Link className="header__options__option" to="/projects">PROJECTS</Link>
                    <Link className="header__options__option" to="/contact">CONTACT</Link>
                    <div className="header__options__hamburger" role="button" onClick={() => setStatus( status === "open" ? "close" : "open")}>
                        <Hamburger/>
                    </div>
                    {/*<div className={`header__options__hamburger__list ${status}`}>*/}
                    {/*    <Link className="header__options__hamburger__list__item" to="/about">ABOUT</Link>*/}
                    {/*    <Link className="header__options__hamburger__list__item" to="/projects">PROJECTS</Link>*/}
                    {/*    <Link className="header__options__hamburger__list__item" to="/contact">CONTACT</Link>*/}
                    {/*</div>*/}
                </div>
            </div>
        </header>
    )
}

export default Header;
