import React, {useEffect, useState} from "react";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import email from "../../assets/email.svg";

import "./home-page.styles.scss";
import ArrowDown from "../../components/arrow-down/arrow-down.component";
import Projects from "../../components/projects/projects.component";
import Footer from "../../components/footer/footer.component";

const HomePage = () => {
    const [opacity, setOpacity] = useState(1);

    const handleScroll = () => {
        const {scrollY, innerHeight} = window;
        if (scrollY * 2 < innerHeight) {
            setOpacity(1 - scrollY / innerHeight * 2);
        } else {
            setOpacity(0);
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll, false);
        }
    }, []);

    return (
        <div>
            <div className="home-page" style={{opacity}}>
                <div className="home-page__text">
                    <h4>
                        Greetings, my name is
                    </h4>
                    <h2>Aleksa Cekić</h2>
                    <h3>I'm a <span/></h3>
                </div>
                <div className="home-page__description">
                    <div className="home-page__description__text">
                        <div className="home-page__description__text__links">
                            <a href="mailto:aleksa.cekic8@gmail.com" target="_blank"
                               rel="noreferrer"> <img src={email} className="mail" alt="email"/> </a>
                            <a href="https://github.com/yxngalex" rel="noreferrer" target="_blank"> <img src={github}
                                                                                                         className="github"
                                                                                                         alt="github"/>
                            </a>
                            <a href="https://www.linkedin.com/in/aleksa-ceki%C4%87-347148224/" target="_blank"
                               rel="noreferrer"> <img src={linkedin} className="linkedin" alt="linkedin"/> </a>
                        </div>
                    </div>
                </div>
                <div className="home-page__arrow">
                    <ArrowDown/>
                </div>
            </div>
            <div className="projects-view">
                <Projects/>
            </div>
            <div className="foot">
                <Footer/>
            </div>
        </div>
    );
}

export default HomePage;
