import "./AboutMeComponent.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { Component } from "react";
import { Carousel } from "react-responsive-carousel";

const motionDivProps = {
  initial: { opacity: 0, y: 300 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 1.0 },
  },
  whileHover: "onscreen",
};

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel width={600} className="carrossel-imgs">
        <div className="about-me-img">
          <img src="./../profile.jpg" />
        </div>
        <div className="about-me-img">
          <img src="./../sbie.png" />
          <p className="legend">Me presenting my article at SBIE</p>
        </div>
      </Carousel>
    );
  }
}

const AboutMeComponent = () => {
  return (
    <>
      <div className="container-about-me" id="about">
        <motion.div {...motionDivProps}>
          <h2>
            <span className="highlight-text">&lt;</span> about me{" "}
            <span className="highlight-text">/&gt;</span>
          </h2>
        </motion.div>
        <motion.div {...motionDivProps} className="sub-container-about-me">
          <div className="container-about-me-text">
            <p id="about-me-text">
              I am currently a Full Stack Web Developer at the{" "}
              <span className="highlight-text">
                Eldorado Research Institute
              </span>
              , in Manaus. At the same time, I am in the last semester of the
              Computer Science course at the
              <span className="highlight-text">
                {" "}
                Federal University of Amazonas (UFAM)
              </span>
              .
              <br />
              <br />
              Throughout my degree, I had the chance to collaborate on several
              research projects, in which I was able to apply my academic
              knowledge in practice. One of the highlights was the opportunity
              to publish my article "Analysis of the level of student confusion
              based on the degree of difficulty of programming questions" at the{" "}
              <span className="highlight-text">
                Brazilian Symposium on Informatics in Education (SBIE)
              </span>
              , in the year 2022. This event represented no just recognition for
              my work, but also the chance to share learnings and contribute to
              the academic community.
              <br />
              <br />
              Aside from academic life and work, I really enjoy spending my free
              time reading books, watching anime and doing some coding. Oh, and
              of course, having a good cup of coffee.{" "}
              <i className="fa-solid fa-mug-hot" />
            </p>
          </div>
          <div className="container-about-me-carousel-img">
            <DemoCarousel />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutMeComponent;
