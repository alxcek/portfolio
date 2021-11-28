import React from "react";

import "./hamburger.styles.scss";

type HamburgerProp = {
    currentStatus: string;
}

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
