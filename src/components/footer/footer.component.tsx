import React from "react";

import "./footer.styles.scss";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="name" onClick={scrollToTop}>
          Aleksa Cekić @ 2022
        </div>
        <div className="footer__content__info">
          <div className="link">
            <a
              href="https://github.com/yxngalex"
              rel="noreferrer"
              target="_blank"
            >
              Resume
            </a>
          </div>
          <div className="link">
            <a
              href="mailto:aleksa.cekic8@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </div>
          <div className="link">
            <a
              href="https://www.linkedin.com/in/aleksa-ceki%C4%87-347148224/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
      {/* <div className="footer__bottom">
                <div className="horizontal-line"/>
                <div className="scroll-up" onClick={scrollToTop}>
                    <div className="scroll-up-animation">
                        <img src={arrow_up} alt="scroll_up" className="arrow"/>
                    </div>
                </div>
            </div> */}
    </footer>
  );
};

export default Footer;
