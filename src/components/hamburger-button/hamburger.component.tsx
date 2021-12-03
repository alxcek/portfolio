import React from "react";
import {HamburgerProp} from "../../@types/Hamburger";

import "./hamburger.styles.scss";

const Hamburger = (status: HamburgerProp) => {
    return (
        <div className={`menu-btn ${status.currentStatus}`}
             role="button"
        >
            <div className="menu-btn__burger" />
        </div>
    )
}

export default Hamburger;
