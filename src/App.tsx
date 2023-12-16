import "./App.css";
import AboutMeComponent from "./components/AboutMe/AboutMeComponent";
import ExperienceComponent from "./components/Experience/ExperienceComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import HeaderComponent from "./components/Header/HeaderComponent";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import ProjectsComponent from "./components/Projects/ProjectsComponent";
import SidebarComponent from "./components/Sidebar/SidebarComponent";
import TechSkillsComponent from "./components/TechSkills/TechSkillsComponent";

function App() {
  return (
    <>
      <div className="container-main">
        <SidebarComponent />
        <HeaderComponent />
        <AboutMeComponent />
        <ExperienceComponent />
        <TechSkillsComponent />
        <ProjectsComponent />
        <FooterComponent />
      </div>
      <ParticlesBackground />
    </>
  );
}

export default App;
