import './TechSkillsComponent.css';
import { motion } from 'framer-motion';

const motionDivProps = {
  initial: { opacity: 0, y: 300 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { type: 'tween', duration: 1.0 },
  },
  whileHover: 'onscreen',
};

const motionIconPropsRow1 = {
  initial: { opacity: 0, x: -50 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { type: 'tween', duration: 1.5 },
  },
};

const motionIconPropsRow2 = {
  initial: { opacity: 0, x: -50 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { type: 'tween', duration: 2.5 },
  },
};

const motionIconPropsRow3 = {
  initial: { opacity: 0, x: -50 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { type: 'tween', duration: 3.5 },
  },
};

const TechSkillsComponent = () => {
  return (
    <div className='container-tech-skills' id='techSkills'>
      <motion.div {...motionDivProps}>
        <h2>
          <span className='highlight-text'>&lt;</span> tech skills{' '}
          <span className='highlight-text'>/&gt;</span>
        </h2>
      </motion.div>
      <motion.div {...motionDivProps} className='sub-container-tech-skills'>
        <div className='container-tech-skills-icons'>
          <div className='tech-icons-row' id='row1'>
            <motion.div {...motionIconPropsRow1} style={{ marginRight: 20 }}>
              <img
                src='angular.png'
                alt='Angular Icon'
                title='Angular'
                className='tech-icon'
              />
            </motion.div>
            <motion.div {...motionIconPropsRow1} style={{ marginRight: 20 }}>
              <img
                src='react.png'
                alt='React Icon'
                title='React'
                className='tech-icon'
              />
            </motion.div>
            <motion.div {...motionIconPropsRow1} style={{ marginRight: 20 }}>
              <img
                src='js.png'
                alt='Javascript Icon'
                title='Javascript'
                className='tech-icon'
              />
            </motion.div>
            <motion.div {...motionIconPropsRow1} style={{ marginRight: 20 }}>
              <img
                src='ts.png'
                alt='Typescript Icon'
                title='Typescript'
                className='tech-icon'
              />
            </motion.div>
            <motion.div {...motionIconPropsRow1}>
              <img
                src='swagger.png'
                alt='Swagger Icon'
                title='Swagger'
                className='tech-icon'
              />
            </motion.div>
          </div>
          <div className='tech-icons-row' id='row2'>
            <motion.div {...motionIconPropsRow2} style={{ marginRight: 20 }}>
              <img
                src='postger.png'
                alt='PostgreSQL Icon'
                title='PostgreSQL'
                className='tech-icon'
              />
            </motion.div>
            <motion.div {...motionIconPropsRow2} style={{ marginRight: 20 }}>
              <img
                src='mysql.png'
                alt='MySQL Icon'
                title='MySQL'
                className='tech-icon'
              />
            </motion.div>
            <motion.div {...motionIconPropsRow2} style={{ marginRight: 20 }}>
              <img
                src='node-js.png'
                alt='Node Icon'
                title='Node.js'
                className='tech-icon'
              />
            </motion.div>
            <motion.div {...motionIconPropsRow2} style={{ marginRight: 20 }}>
              <img
                src='express.png'
                alt='Express Icon'
                title='Express'
                className='tech-icon'
              />
            </motion.div>
            <motion.div {...motionIconPropsRow2}>
              <img
                src='mongodb.png'
                alt='MongoDB Icon'
                title='MongoDB'
                className='tech-icon'
                id='mongodb-icon'
              />
            </motion.div>
          </div>
          <div className='tech-icons-row' id='row3'>
            <motion.div {...motionIconPropsRow3} style={{ marginRight: 20 }}>
              <img
                src='sequelize.png'
                alt='Sequelize Icon'
                title='Sequelize'
                className='tech-icon'
              />
            </motion.div>
            <motion.div {...motionIconPropsRow3} style={{ marginRight: 20 }}>
              <img
                src='aws.png'
                alt='AWS Icon'
                title='AWS'
                className='tech-icon'
              />
            </motion.div>
            <motion.div {...motionIconPropsRow3} style={{ marginRight: 20 }}>
              <img
                src=' docker.png'
                alt='Docker Icon'
                title='Docker'
                className='tech-icon'
              />
            </motion.div>
            <motion.div {...motionIconPropsRow3}>
              <img
                src='gitwhite.png'
                alt='Git Icon'
                title='Git'
                className='tech-icon'
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TechSkillsComponent;
