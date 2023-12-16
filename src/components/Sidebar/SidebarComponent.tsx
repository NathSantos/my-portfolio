import { motion } from "framer-motion";
import "./SidebarComponent.css";

const motionDivProps = {
  initial: { opacity: 0, y: -60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.5 },
};

const SidebarComponent = () => {
  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openExternalLink = (url: any) => {
    window.open(url, "_blank");
  };

  return (
    <div className="container-sidebar">
      <motion.div {...motionDivProps}>
        <ul className="list-sidebar">
          <li>
            <button
              className="link-sidebar"
              onClick={() => scrollToSection("header")}
            >
              <span>&lt;</span> Header <span>/&gt;</span>
            </button>
          </li>
          <li>
            <button
              className="link-sidebar"
              onClick={() => scrollToSection("about")}
            >
              <span>&lt;</span> About <span>/&gt;</span>
            </button>
          </li>
          <li>
            <button
              className="link-sidebar"
              onClick={() => scrollToSection("experience")}
            >
              <span>&lt;</span> Experience <span>/&gt;</span>
            </button>
          </li>
          <li>
            <button
              className="link-sidebar"
              onClick={() => scrollToSection("techSkills")}
            >
              <span>&lt;</span> Tech Skills <span>/&gt;</span>
            </button>
          </li>
          <li>
            <button
              className="link-sidebar"
              onClick={() => scrollToSection("projects")}
            >
              <span>&lt;</span> Projects <span>/&gt;</span>
            </button>
          </li>
          <li>
            <button
              className="link-sidebar"
              onClick={() => openExternalLink("https://github.com/NathSantos")}
            >
              <i className="fa-brands fa-github icon-sidebar"></i>Github
            </button>
          </li>
          <li>
            <button
              className="link-sidebar"
              onClick={() =>
                openExternalLink(
                  "https://www.linkedin.com/in/nathalia-santos-ns27/"
                )
              }
            >
              <i className="fa-brands fa-linkedin icon-sidebar"></i>Linkedin
            </button>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default SidebarComponent;
