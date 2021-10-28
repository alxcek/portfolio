import React, {useState} from "react";

import "./hamburger.styles.scss";

const Hamburger = () => {
    const [status, setStatus] = useState("close");
    return (
        <div className={`menu-btn ${status}`}
             role="button"
             onClick={() => setStatus(status === "open" ? "close" : "open")}
        >
            <div className="menu-btn__burger">
            </div>
        </div>
    )
}

export default Hamburger;
