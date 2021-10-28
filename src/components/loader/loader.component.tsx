import React from "react";

import "./loader.styles.scss";

const Loader = () => {
    return (
        <div className="wrapper">
            <div className="content">
                <div className="content__container">
                    <p className="content__container__text">/ </p>
                    <ul className="content__container__list">
                        <li className="content__container__list__item">
                            LOADING
                        </li>
                        <li className="content__container__list__item">
                            WEBSITE
                        </li>
                        <li className="content__container__list__item">
                            WELCOME
                        </li>
                        <li className="content__container__list__item">
                            :)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Loader;
