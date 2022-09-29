import React from "react";
import { Link } from "react-router-dom";
import { DetailsProps } from "../../@types/Details";
import Footer from "../footer/footer.component";

import "./details.styles.scss";

const Details = ({
  name,
  description,
  role,
  duration,
  technologies,
  imgPath,
}: DetailsProps) => {
  const style = {
    background: `url(${imgPath}) no-repeat center`,
    backgroundSize: "cover",
  };

  return (
    <React.Fragment>
      <section className="project__details">
        <div className="back-btn">
          <Link to="/">
            <button className="cbt">Go Back</button>
          </Link>
        </div>
        <div className="image__container" style={style} />
        <div className="info__container">
          <div className="boxes">
            <div className="overview">
              <div className="overview__label">Overview</div>
            </div>
            <div className="project__description">
              <div className="project__description__label">
                <div className="small-txt">name</div>
                {name}
              </div>
              <div className="project__description__desc">
                <div className="small-txt">description</div>
                {description}
              </div>
              <div className="project__description__desc__cols">
                <div className="col">
                  <div className="small-txt">role</div>
                  {role}
                </div>
                <div className="col">
                  <div className="small-txt">duration</div>
                  {duration}
                </div>
                <div className="col">
                  <div className="small-txt">technologies</div>
                  {technologies}
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

export default Details;
