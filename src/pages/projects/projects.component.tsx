import React from "react";
import Gallery from "../../components/gallery-layout/gallery-layout.component";
import test from "../../assets/test2.png";
import metropolitan from "../../assets/uni.png";
import test2 from "../../assets/test3.png";

import "./projects.styles.scss";

const works = [
    {
        id: 1,
        number: "01",
        name: "Test",
        description: "Intern at Google, Test sample",
        link: "/isum",
        imgPath: test,
        color: "black",
    },
    {
        id: 2,
        number: "02",
        name: "Finance",
        description: "Innovative Software technologies University Metropolitan",
        link: "/isum",
        imgPath: metropolitan,
        color: "white"
    },
    {
        id: 3,
        number: "03",
        name: "Sample Text",
        description: "Innovative Software technologies University Metropolitan",
        link: "/netflix",
        imgPath: test2,
        color: "black"
    },
]

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
