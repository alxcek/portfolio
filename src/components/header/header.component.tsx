import React from "react";
import {Link} from "react-router-dom";

import "./header.styles.scss";


const Header = () => (
    <header>
        <div className="header">
            <Link className="logo-container" to="/">Aleksa Cekić</Link>
            <div className="options">
                <Link className="option" to="/about">ABOUT</Link>
                <Link className="option" to="/projects">PROJECTS</Link>
                <Link className="option" to="/contact">CONTACT</Link>
            </div>
            <div className="hamburger">

            </div>
        </div>
    </header>
)

export default Header;
