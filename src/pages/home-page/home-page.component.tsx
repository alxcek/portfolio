import React, {useEffect, useState} from "react";

import "./home-page.styles.scss";
import ArrowDown from "../../components/arrow-down/arrow-down.component";
import Projects from "../../components/projects/projects.component";
import Footer from "../../components/footer/footer.component";
import Home from "../../components/home/home.component";
import AboutPage from "../../components/about/about.component";
import Header2 from "../../components/header2.0/header2.component";

const HomePage = () => {
    const [opacity, setOpacity] = useState(1);
    const [clicked, setClicked] = useState("home");

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

    const handleClick = () => {
        setClicked(clicked === "home" ? "about" : "home");
    }

    // Change so that home page changes with the about, and add a menu
    return (
        <React.Fragment>
            <div className="home-page" style={{opacity}}>
                {/*<button className="testing" onClick={handleClick}>About</button>*/}
                <Header2 onClick={handleClick} label={clicked}/>
                <div className="home-page__home-info">
                    {
                        clicked === "home" ? (
                                <Home/>
                            )
                            :
                            (
                                <AboutPage/>
                            )
                    }
                </div>
                <div className="home-page__arrow">
                    <ArrowDown/>
                </div>
            </div>
            <React.Fragment>
                <Projects/>
            </React.Fragment>
            <div className="foot">
                <Footer/>
            </div>
        </React.Fragment>
    );
}

export default HomePage;
