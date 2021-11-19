import React from "react";

import "./home-page.styles.scss";


const HomePage = () => {
    return (
        <section className="home-page">
            <div className="home-page__text">
                <h2>
                    Aleksa Cekić
                </h2>
                <span/>
            </div>
            <div className="home-page__description">
                <p className="home-page__description__desc">
                    Student that loves to learn new stuff and explore new challenges. Very passionate about breaking down complex problems into simple solutions.
                </p>
                <br/>
                <p className="home-page__description__text">
                    Intern at ISUM @ Metropolitan University • Software Engineer
                </p>
            </div>
        </section>
    );
}

export default HomePage;
