import React from "react";

import "./gallery-layout.styles.scss";

type GalleryTypeProps = {
    number?: string;
    name?: string;
    description?: string;
    link?: string;
    imgPath?: string;
}

const Gallery = ({number, name, description, link, imgPath, }: GalleryTypeProps) => {

    return (
        <div className="gallery">
            <div className={`gallery__text-column`}>
                <div className="block">
                    <div className="number">{number}</div>
                    <div className="name">{name}</div>
                    <div className="desc">{description}</div>
                    <div className="link"><a href={link} target="_blank" rel="noreferrer">visit a website</a></div>
                </div>
            </div>
                <div className="gallery__image-column">
                    <img src={imgPath} alt={name}/>
                </div>
        </div>
    )
}

export default Gallery;
