import React from "react";

import "./header2.styles.scss";

export type HeaderOptions = {
    label?: string
    onClick?: () => void
}

const Header2 = ({label, onClick}: HeaderOptions) => {

    return (
        <header>
            <div className="bar">
                <div className={`bar__options`}>
                    <button className="bar__options__option" onClick={onClick}>{
                        label === "home" ? (
                            "About"
                        ) : (
                            "Home"
                        )
                    }
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header2;
