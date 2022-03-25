import React from "react";
import {Link} from "react-router-dom";

import "./grid.styles.scss";

const Grid = () => {
    return (
        <div className="grid-container">
            <div className="grid-block-1">
                <div className="grid-block-2">
                    <div className="grid-block-3">
                        <div className="grid-block-3-content">
                            <div className="grid-block-3-content-header header">Hello, I'm Aleksa</div>
                            <div className="grid-block-3-content-description description">
                                I study Software Engineering at the Metropolitan University.
                                <br />
                                I envision Software Engineering as a way to utilize various methods into one big project.
                                <br />
                                I hope to spend my career solving complex challenges.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-block-4">
                    <div className="grid-block-5">
                        <div className="grid-block-5-content">
                            <div className="grid-block-5-content-title header">Education</div>
                            <div className="grid-block-5-content-education education">University Metropolitan Niš</div>
                            <div className="grid-block-5-content-description description">Bachelor of Software
                                Engineering, Faculty of Information Technology
                            </div>
                            <div className="grid-block-5-content-education education">EHS Nikola Tesla</div>
                            <div className="grid-block-5-content-description description">Computer Electrotechnician
                                2018
                            </div>
                        </div>
                    </div>
                    <div className="grid-block-6">
                        <div className="grid-block-6-content">
                            <div className="grid-block-6-content-title header">
                                Experience
                            </div>
                            <div className="grid-block-6-content-experience education">IST</div>
                            <div className="grid-block-6-content-description description">
                                Software Engineer
                                <br/>
                                August 2020 - Present
                            </div>
                            <div className="grid-block-6-content-experience education">Upwork</div>
                            <div className="grid-block-6-content-description description">
                                Various Freelance Projects
                                <br/>
                                September 2019 - August 2020
                            </div>
                            <div className="grid-block-6-content-linkedin education">
                                <a href="#">More on LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-block-7">
                    <div className="grid-block-8">
                        <div className="grid-block-8-content">
                            <div className="grid-block-8-content-title header">Skillset</div>
                            <div className="grid-block-8-content-description">
                                <ul>
                                    <li>Java</li>
                                    <li>Angular</li>
                                    <li>React</li>
                                    <li>UML</li>
                                    <li>Git</li>
                                    <li>SQL/MySQL</li>
                                    <li>Linux OS</li>
                                    <li>Javascript/Typescript</li>
                                    <li>Spring Boot</li>
                                    <li>Successful in independent work and teamwork equally</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-block-9">
                    <div className="grid-block-10">
                        <div className="grid-block-10-content">
                            <div className="grid-block-10-content-title header">Stay in touch?</div>
                            <div className="grid-block-10-content-description description">
                                <a href="mailto:aleksa.cekic8@gmail.com">
                                    Email / aleksa.cekic8@gmail.com
                                </a>
                                <br/>
                                <Link to="">
                                    Linkedin / Aleksa Cekic
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grid;
