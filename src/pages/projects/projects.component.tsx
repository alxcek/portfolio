import React from "react";
import Gallery from "../../components/gallery-layout/gallery-layout.component";
import metropolitan from "../../assets/metropolitan.png";

import "./projects.styles.scss";


const Projects = () => {
    return (
        <section className="projects">
            <div className="projects__section">
                <div className="projects__section__header">
                    <h2>01 / Projects</h2>
                </div>
                <div className="projects__section__grid">
                    <Gallery number={"01"} name={"ISUM"}
                             description={"Innovative Software Technologies University Metropolitan"}
                             link={"isum.metropolitan.ac.rs"} imgPath={metropolitan}
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects;
