import React, {useEffect} from "react";
import Details from "../../components/details/details.component";
import img from "../../assets/props/esl_1.png";

const Esl = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <React.Fragment>
            <Details
                name="Engineering Software Lab"
                description="
                Worked as an Intern at Metropolitan University - Faculty of
                Information technologies. Involved in development of
                service-oriented modular systems. I developed full functional
                Financial system for university and was working on an online
                university portal. During my internship I was working with other
                engineers where I learned about web development, integration and
                implementation.
      "
                role="Back-end Software Developer"
                duration="Sept. 2022 - Present"
                technologies="Spring Boot, Oracle, Liquibase"
                imgPath={`${img}`}
            />
        </React.Fragment>
    );
};
export default Esl;
