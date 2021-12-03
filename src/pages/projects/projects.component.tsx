import React from "react";
import Gallery from "../../components/gallery-layout/gallery-layout.component";

import "./projects.styles.scss";
import {works} from "../../data/works";


const Projects = () => {
    return (
        <section className="projects">
            <div className="projects__section">
                <div className="projects__section__header">
                    <h2>[PROJECTS]</h2>
                </div>
                {/*<div className="projects__section__underline"/>*/}
                <div className="projects__section__grid">
                    {
                        works.map(w => <Gallery key={w.id} {...w} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects;
