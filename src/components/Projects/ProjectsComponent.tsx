import "./ProjectsComponent.css";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const motionDivProps = {
  initial: { opacity: 0, y: 300 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 1.0 },
  },
  whileHover: "onscreen",
};

const ProjectsComponent = () => {
  return (
    <div className="container-projects" id="projects">
      <motion.div {...motionDivProps}>
        <h2>
          <span className="highlight-text">&lt;</span> projects{" "}
          <span className="highlight-text">/&gt;</span>
        </h2>
      </motion.div>
      <motion.div {...motionDivProps} className="sub-container-projects">
        <div className="project-row">
          <Card className="project-card">
            <CardMedia
              sx={{ height: 140 }}
              image="project-avocadoletter.png"
              title="Avocadoletter"
            />
            <CardContent>
              <Typography
                gutterBottom
                component="div"
                className="project-text project-title"
              >
                Avocadoletter
              </Typography>
              <Typography className="project-text project-description">
                Avocadoletter Signup Project is a website that represents a
                subscription to a newsletter to continue receiving emails from a
                specific company (The Avocado Company!).
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                className="project-text project-btn"
                href="https://github.com/NathSantos/Newsletter-Signup"
                target="_blank"
              >
                <i className="fa-brands fa-github icon-github"></i>VIEW SOURCE
              </Button>
            </CardActions>
          </Card>
          <Card className="project-card">
            <CardMedia
              sx={{ height: 140 }}
              image="project-todolist.png"
              title="TodoList"
            />
            <CardContent>
              <Typography
                gutterBottom
                component="div"
                className="project-text project-title"
              >
                TodoList
              </Typography>
              <Typography className="project-text project-description">
                This is a complete To-Do List project where you have your main
                "Today" list with the tasks of the day and you can also create
                multiple lists separately with different tasks.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                className="project-text project-btn"
                href="https://github.com/NathSantos/TodoList"
                target="_blank"
              >
                <i className="fa-brands fa-github icon-github"></i>VIEW SOURCE
              </Button>
            </CardActions>
          </Card>
          <Card className="project-card">
            <CardMedia
              sx={{ height: 140 }}
              image="project-simon-game.png"
              title="The Simon Game"
            />
            <CardContent>
              <Typography
                gutterBottom
                component="div"
                className="project-text project-title"
              >
                The Simon Game
              </Typography>
              <Typography className="project-text project-description">
                The Simon game is the exciting electronic game of lights and
                sounds in which players must repeat random sequences of lights
                by pressing the colored pads in the correct order.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                className="project-text project-btn"
                href="https://github.com/NathSantos/The-Simon-Game"
                target="_blank"
              >
                <i className="fa-brands fa-github icon-github"></i>VIEW SOURCE
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="project-row">
          <Card className="project-card">
            <CardMedia
              sx={{ height: 140 }}
              image="project-drum-kit.png"
              title="Drum Kit Sound"
            />
            <CardContent>
              <Typography
                gutterBottom
                component="div"
                className="project-text project-title"
              >
                Drum Kit Sound
              </Typography>
              <Typography className="project-text project-description">
                Here, users can unleash their inner percussionist by generating
                drum sounds simply by pressing buttons or keys corresponding to
                different drum elements. This website provides a dynamic array
                of sounds.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                className="project-text project-btn"
                href="https://github.com/NathSantos/Drum-Kit-Sound-Website"
                target="_blank"
              >
                <i className="fa-brands fa-github icon-github"></i>VIEW SOURCE
              </Button>
            </CardActions>
          </Card>
          <Card className="project-card">
            <CardMedia
              sx={{ height: 140 }}
              image="project-tindog.png"
              title="Tindog"
            />
            <CardContent>
              <Typography
                gutterBottom
                component="div"
                className="project-text project-title"
              >
                Tindog
              </Typography>
              <Typography className="project-text project-description">
                That's right, it's like Tinder, but for dogs. Tindog brings
                together the canine community, offering a tail-wagging
                experience where dogs can find their perfect playmates and
                companions.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                className="project-text project-btn"
                href="https://github.com/NathSantos/Tindog"
                target="_blank"
              >
                <i className="fa-brands fa-github icon-github"></i>VIEW SOURCE
              </Button>
            </CardActions>
          </Card>
          <Card className="project-card">
            <CardMedia
              sx={{ height: 140 }}
              image="project-rainbow.png"
              title="Rainbow Search Engine"
            />
            <CardContent>
              <Typography
                gutterBottom
                component="div"
                className="project-text project-title"
              >
                Rainbow Search Engine
              </Typography>
              <Typography className="project-text project-description">
                Rainbow search engine, where the user performs queries in the
                interface and, from there, a connection is made for the search
                to be carried out in Petrobras documents, which were indexed in
                ElasticSearch.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                className="project-text project-btn"
                href="https://github.com/NathSantos/Buscador-ElasticSearch-RI"
                target="_blank"
              >
                <i className="fa-brands fa-github icon-github"></i>VIEW SOURCE
              </Button>
            </CardActions>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsComponent;
