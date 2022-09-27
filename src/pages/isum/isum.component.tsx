import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./isum.styles.scss";
import Footer from "../../components/footer/footer.component";

const Isum = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <React.Fragment>
      <section className="isum">
        <div className="back-btn">
          <Link to="/">
            <button className="cbt">Go Back</button>
          </Link>
        </div>
        <div className="image__container" />
        <div className="info__container">
          <div className="boxes">
            <div className="overview">
              <div className="overview__label">Overview</div>
            </div>
            <div className="project__description">
              <div className="project__description__label">
                <div className="small-txt">name</div>
                ISUM
              </div>
              <div className="project__description__desc">
                <div className="small-txt">description</div>
                Worked as an Intern at Metropolitan University - Faculty of
                Information technologies. Involved in development of
                service-oriented modular systems. I developed full functional
                Financial system for university and was working on an online
                university portal. During my internship I was working with other
                engineers where I learned about web development, integration and
                implementation.
              </div>
              <div className="project__description__desc__cols">
                <div className="col">
                  <div className="small-txt">role</div>
                  Software Engineer
                </div>
                <div className="col">
                  <div className="small-txt">duration</div>
                  Sept. 2020 - Sept. 2022
                </div>
                <div className="col">
                  <div className="small-txt">technologies</div>
                  Java, Angular, MySQL
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Isum;
