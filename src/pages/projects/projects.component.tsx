import React from "react";
import Gallery from "../../components/gallery-layout/gallery-layout.component";
import metropolitan from "../../assets/metropolitan.png";

import "./projects.styles.scss";

const works = [
    {
        number: "01",
        name: "ISUM",
        description: "Innovative Software technologies University Metropolitan",
        link: "https://isum.metropolitan.ac.rs",
        imgPath: metropolitan
    },
    {
        number: "02",
        name: "FINANCE",
        description: "Finance app for University Metropolitan",
        link: "https://isum.metropolitan.ac.rs",
        imgPath: metropolitan
    },
    {
        number: "03",
        name: "FINANCE",
        description: "Finance app for University Metropolitan",
        link: "https://isum.metropolitan.ac.rs",
        imgPath: metropolitan
    },
]

const Projects = () => {
    return (
        <section className="projects">
            <div className="projects__section">
                <div className="projects__section__header">
                    <h2>01 / Projects</h2>
                </div>
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
