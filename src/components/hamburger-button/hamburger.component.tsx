import React from "react";

import "./hamburger.styles.scss";

type hamburgerProp = {
    currentStatus: string;
}

const Hamburger = (status: hamburgerProp) => {
    return (
        <div className={`menu-btn ${status.currentStatus}`}
             role="button"
        >
            <div className="menu-btn__burger">
            </div>
        </div>
    )
}

export default Hamburger;
