import "./HeaderComponent.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useState } from "react";

const motionDivProps = {
  initial: { opacity: 0, y: -60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.5 },
};

const HeaderComponent = () => {
  const [textColor, setTextColor] = useState("#CCD6F6");

  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "cv.pdf";
    link.click();
  };

  return (
    <div className="container-header" id="header">
      <motion.div {...motionDivProps}>
        <div className="introduction-text">
          <h1 id="hi-text">hi, i'm</h1>
          <div style={{ color: textColor }}>
            <TypeAnimation
              sequence={[
                () => setTextColor("#64FFDA"),
                "nathalia.",
                2700,
                () => setTextColor("#64FFDA"),
                "a fullstack web developer.",
                2000,
              ]}
              wrapper="h1"
              speed={50}
              className="introduction-text-animation"
              repeat={Infinity}
            />
          </div>
        </div>
      </motion.div>
      <motion.div {...motionDivProps}>
        <h2 id="catchphrase">Just crafting code that brings ideas to life.</h2>
      </motion.div>
      <motion.div {...motionDivProps}>
        <div className="container-small-desciption">
          <p id="small-desciption">
            I'm a computer science student and web programmer based in Manaus,
            Brazil. I have a great interest in full-stack web development, cloud
            computing, artificial intelligence, devops, and everything in
            between.
          </p>
        </div>
        <div className="container-buttons">
          <a href="mailto:nathsantos2703@gmail.com">
            <button className="button" id="contact-btn">
              <i className="fa-solid fa-envelope icon" id="email-icon" />
              say hi!
            </button>
          </a>
          <button className="button" id="download-cv-btn" onClick={downloadCv}>
            <i
              className="fa-solid fa-file-arrow-down icon"
              id="download-icon"
            />
            download cv
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeaderComponent;
