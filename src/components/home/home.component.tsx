import React from 'react';

import "./home.styles.scss";

const Home = () => {
    return (
        <React.Fragment>
            <div className="text">
                <h4>
                    Greetings, my name is
                </h4>
                <h2>Aleksa Cekić</h2>
                <h3>I'm a <span/></h3>
            </div>
            <div className="description">
                <div className="description__text">
                        <a href="mailto:aleksa.cekic8@gmail.com" target="_blank"
                           rel="noreferrer">
                            Email <span>↗</span>
                        </a>
                        <a href="https://github.com/yxngalex" rel="noreferrer" target="_blank">
                            GitHub <span>↗</span>
                        </a>
                        <a href="https://www.linkedin.com/in/aleksa-ceki%C4%87-347148224/" target="_blank"
                           rel="noreferrer">
                            Linkedin <span>↗</span>
                        </a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;
