import React, {useState} from "react";
import {Link} from "react-router-dom";

import "./header.styles.scss";
import Hamburger from "../hamburger-button/hamburger.component";
import Overlay from "../overlay/overlay.component";


const Header = () => {
    const [status, setStatus] = useState("close");

    return (
        <header>
            <div className="bar">
                <div className={`bar__overlay ${status}`}>
                    <Overlay>
                        <Link className="bar__overlay__list__option" to="/"
                              onClick={() => setStatus("close")}>HOME</Link>
                        <Link className="bar__overlay__list__option" to="/about"
                              onClick={() => setStatus("close")}>ABOUT</Link>
                        <Link className="bar__overlay__list__option" to="/"
                              onClick={() => setStatus("close")}>RESUME</Link>
                    </Overlay>
                </div>
                {/*<div className="bar__logo__container">*/}
                {/*    <Link className="bar__logo__container__logo" to="/">*/}
                {/*        <img src={logo} alt="logo" className="logo"/>*/}
                {/*    </Link>*/}
                {/*</div>*/}
                <div className={`bar__options`}>
                    <Link className="bar__options__option" to="/">Work</Link>
                    <Link className="bar__options__option" to="/about">About</Link>
                    <Link className="bar__options__option" to="/">Resume</Link>
                    <div className="bar__options__hamburger" role="button"
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
