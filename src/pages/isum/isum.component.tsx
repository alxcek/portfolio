import React, { useEffect } from "react";

import "./isum.styles.scss";

import Details from "../../components/details/details.component";
import img from "../../assets/props/uni.png";

const Isum = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <React.Fragment>
      <Details
        name="ISUM"
        description="
                Worked as an Intern at Metropolitan University - Faculty of
                Information technologies. Involved in development of
                service-oriented modular systems. I developed full functional
                Financial system for university and was working on an online
                university portal. During my internship I was working with other
                engineers where I learned about web development, integration and
                implementation.
      "
        role="Software Engineer"
        duration="Sept. 2020 - Sept. 2022"
        technologies="Java, Angular, MySQL"
        imgPath={`${img}`}
      />
    </React.Fragment>
  );
};

export default Isum;
