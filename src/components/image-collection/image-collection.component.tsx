import React from "react";
import img from "../../assets/metropolitan.png";

import "./image-collection.styles.scss";


const ImageContainer = () => (
    <div className="image-container">
        <img src={img} alt="me" />
    </div>
)

export default ImageContainer;
