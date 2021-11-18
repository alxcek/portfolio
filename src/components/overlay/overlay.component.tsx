import React from "react";

import "./overlay.styles.scss";

type overlayTypesProps = {
    children?: React.ReactNode
}

const Overlay = (props: overlayTypesProps) => {
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
