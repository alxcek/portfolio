import React from "react";
import Gallery from "../../components/gallery-layout/gallery-layout.component";
import test from "../../assets/test.png";
import metropolitan from "../../assets/metropolitan.png";

import "./projects.styles.scss";

const works = [
    {
        number: "01",
        name: "ISUM",
        description: "Innovative Software technologies University Metropolitan",
        link: "/isum",
        imgPath: test,
        color: "black"
    },
    {
        number: "02",
        name: "Finance",
        description: "Innovative Software technologies University Metropolitan",
        link: "/isum",
        imgPath: metropolitan,
        color: "white"
    },
]

const Projects = () => {
    return (
        <section className="projects">
            <div className="projects__section">
                <div className="projects__section__header">
                    {/*<h2>[PROJECTS]</h2>*/}
                </div>
                {/*<div className="projects__section__underline"/>*/}
                <div className="projects__section__grid">
                    {
                        works.map(w => <Gallery {...w} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects;
