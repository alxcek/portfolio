import React from "react";

import "./gallery-layout.styles.scss";

type GalleryTypeProps = {
    number?: string;
    name?: string;
    description?: string;
    link?: string;
    imgPath?: string;
}

const Gallery = ({number, name, description, link, imgPath}: GalleryTypeProps) => {

    const style =  {
        backgroundImage: `url(${imgPath})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: '100% 100%'
    }

    return (
        <div className="gallery">
            <div className='gallery__text-column'>
                <div className="block">
                    <div className="number">{number}</div>
                    <div className="name">{name}</div>
                    <div className="desc">{description}</div>
                    <div className="link"><a href={link} target="_blank" rel="noreferrer">visit the website</a></div>
                </div>
            </div>
                <div className="gallery__image-column" style={style}>
                </div>
        </div>
    )
}

export default Gallery;
