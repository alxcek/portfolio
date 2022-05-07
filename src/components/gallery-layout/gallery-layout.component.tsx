import React from "react";
import {GalleryTypeProps} from "../../@types/Gallery";
import {Link} from "react-router-dom";

import "./gallery-layout.styles.scss";


const Gallery = ({number, name, description, link, imgPath, color}: GalleryTypeProps) => {

    const style = {
        backgroundImage: `url(${imgPath})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: '20% 100%'
    }

    return (
        <div className="gallery">
            <div className="gallery__image-column" style={style}/>
            <div className={`gallery__text-column ${color} ? "white" : ""`}>
                <div className="block">
                    <div className="number">{number}</div>
                    <div className="name">{name}</div>
                    <div className="desc">{description}</div>
                    <div className="link">
                        <Link to={link!}>Read more</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;
