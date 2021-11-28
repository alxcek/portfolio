import React from "react";

import "./overlay.styles.scss";

type OverlayTypesProps = {
    children?: React.ReactNode
}

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
