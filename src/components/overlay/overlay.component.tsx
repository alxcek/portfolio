import React from "react";
import {OverlayTypesProps} from "../../@types/Overlay";

import "./overlay.styles.scss";

const Overlay = (props: OverlayTypesProps) => {
    return (
        <div className="overlay">
            <nav className="nav">
                {
                    props.children
                }
            </nav>
        </div>
    );
}

export default Overlay;
