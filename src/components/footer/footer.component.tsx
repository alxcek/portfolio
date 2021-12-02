import React from "react";
import {Link} from "react-router-dom";

import "./footer.styles.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__container__block">
                    Aleksa Cekić
                    <div className="footer__container__block_list">
                        <Link to="/about">ABOUT</Link>
                        <Link to="/projects">PROJECTS</Link>
                        <Link to="/contact">CONTACT</Link>
                    </div>
                </div>
                <div className="footer__container__block2">
                    <div>
                        Niš, Serbia
                        aleksa.cekic8@gmail.com
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="footer__block">*/}
            {/*    <div className="footer__block_horizontal_line"/>*/}
            {/*    <div>@Aleksa Cekić 2022</div>*/}
            {/*</div>*/}
        </div>
    )
}

export default Footer;
