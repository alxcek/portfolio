import React, {useState} from "react";
import {Link} from "react-router-dom";

import "./header.styles.scss";
import Hamburger from "../hamburger-button/hamburger.component";
import Overlay from "../overlay/overlay.component";

import logo from "../../assets/logo.svg";


const Header = () => {
    const [status, setStatus] = useState("close");

    return (
        <header>
            <div className="header">
                <div className={`header__overlay ${status}`}>
                    <Overlay>
                        <Link className="header__overlay__list__option" to="/"
                              onClick={() => setStatus("close")}>HOME</Link>
                        <Link className="header__overlay__list__option" to="/about"
                              onClick={() => setStatus("close")}>ABOUT</Link>
                        <Link className="header__overlay__list__option" to="/projects"
                              onClick={() => setStatus("close")}>PROJECTS</Link>
                        <Link className="header__overlay__list__option" to="/contact"
                              onClick={() => setStatus("close")}>CONTACT</Link>
                    </Overlay>
                </div>
                <div className="header__logo__container">
                    <Link className="header__logo__container__logo" to="/">
                        <img src={logo} alt="logo" className="logo"/>
                        {/*Aleksa Cekić*/}
                    </Link>
                </div>
                <div className={`header__options`}>
                    <Link className="header__options__option" to="/">[ projects ]</Link>
                    <Link className="header__options__option" to="/about">[ about ]</Link>
                    <Link className="header__options__option" to="/contact">[ contact ]</Link>
                    <div className="header__options__hamburger" role="button"
                         onClick={() =>
                             setStatus(status === "open" ? "close" : "open")
                         }>
                        <Hamburger currentStatus={status}/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
