import './ExperienceComponent.css';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react';

const motionDivProps = {
  initial: { opacity: 0, y: 300 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { type: 'tween', duration: 1.0 },
  },
  whileHover: 'onscreen',
};

const motionDivPropsTopics = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.0 },
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className='tabPanel-box'>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const ExperienceComponent = () => {
  const [value, setValue] = React.useState(0);
  const isMobile = useMediaQuery('(max-width:1080px)');

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event);
  };

  const customTabStyle = {
    color: '#8892b0',
  };

  const activeTabStyle = {
    color: '#64ffda',
  };

  return (
    <div className='container-experience' id='experience'>
      <motion.div {...motionDivProps}>
        <h2>
          <span className='highlight-text'>&lt;</span> experience{' '}
          <span className='highlight-text'>/&gt;</span>
        </h2>
      </motion.div>
      <motion.div {...motionDivProps} className='sub-container-experience'>
        <Tabs
          orientation={isMobile ? 'horizontal' : 'vertical'}
          variant='scrollable'
          value={value}
          onChange={handleChange}
          aria-label='Vertical tabs example'
          scrollButtons={false}
          sx={{
            borderRight: 1,
            borderColor: 'divider',
            '& .MuiTabs-indicator': {
              backgroundColor: '#64ffda',
            },
          }}
        >
          <Tab
            label='Eldorado Research Institute'
            className='customTabText'
            style={value === 0 ? activeTabStyle : customTabStyle}
            {...a11yProps(0)}
          />
          <Tab
            label='Web Academy Monitor'
            className='customTabText'
            style={value === 1 ? activeTabStyle : customTabStyle}
            {...a11yProps(1)}
          />
          <Tab
            label='Web Academy Student'
            className='customTabText'
            style={value === 2 ? activeTabStyle : customTabStyle}
            {...a11yProps(2)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className='tabContainer'>
            <h3 className='tabTitle'>
              Full Stack Web Developer @{' '}
              <span className='highlight-text'>Eldorado</span>
            </h3>
            <p className='tabTime'>JUL 2023 - PRESENT</p>
            <motion.div {...motionDivPropsTopics}>
              <ul className='tabTopics'>
                <li>
                  Collaborated with a diverse cross-functional team to design
                  and improve an innovative, critical product for multiple
                  customers, improving user experience and system efficiency.
                </li>
                <li>
                  Executed comprehensive frontend solutions utilizing Angular,
                  harnessing its robust framework to craft dynamic and
                  responsive user interfaces. Implemented modular components,
                  data binding, and reactive programming paradigms to enhance
                  user interaction and experience.
                </li>
                <li>
                  Backend architecture leveraging Node.js, capitalizing on its
                  asynchronous nature and event-driven architecture to construct
                  scalable and performant server-side applications. Integrated
                  with databases and external services, employing efficient API
                  design and database management with a focus on security and
                  efficiency.
                </li>
                <li>
                  Explored foundational AWS functionalities, engaging in basic
                  setups and configurations, grasping fundamental aspects of
                  managing AWS services for future scalability.
                </li>
              </ul>
            </motion.div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className='tabContainer'>
            <h3 className='tabTitle'>
              Web Development Monitor @{' '}
              <span className='highlight-text'>Web Academy Project</span>
            </h3>
            <p className='tabTime'>DEC 2023 - PRESENT</p>
            <motion.div {...motionDivPropsTopics}>
              <ul className='tabTopics'>
                <li>
                  Assist students in resolving technical issues related to web
                  development projects, including debugging code and solving
                  complex programming problems.
                </li>
                <li>
                  Provide support in the use of development tools and
                  environments, ensuring students can effectively utilize
                  technologies like React, Node.js, and Docker.
                </li>
                <li>
                  Provide one-on-one and group mentoring sessions to students,
                  offering insights and guidance on web development concepts and
                  best practices.
                </li>
                <li>
                  Design and implement new learning materials, exercises, and
                  projects to enhance the educational experience for students.
                </li>
                <li>
                  Oversee student projects from inception to completion,
                  ensuring timely progress and adherence to project
                  requirements.
                </li>
                <li>
                  Organize and lead workshops and seminars on advanced web
                  development topics, tools, and frameworks to deepen students'
                  knowledge and skills.
                </li>
              </ul>
            </motion.div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className='tabContainer'>
            <h3 className='tabTitle'>
              Full Stack Web Development Student @{' '}
              <span className='highlight-text'>Web Academy Project</span>
            </h3>
            <p className='tabTime'>APR 2023 - OCT 2023</p>
            <motion.div {...motionDivPropsTopics}>
              <ul className='tabTopics'>
                <li>
                  Engaged in a comprehensive full-stack web development
                  experience, combining theoretical learning from classes with a
                  hands-on period, culminating in the creation of a high-value
                  deliverable for a client.
                </li>
                <li>
                  Acquired proficiency in frontend technologies, specializing in
                  React to develop intuitive and dynamic user interfaces.
                </li>
                <li>
                  Implemented robust backend solutions using Node.js, Express,
                  and Sequelize, ensuring seamless data management and system
                  functionality.
                </li>
                <li>
                  Gained hands-on experience in integration and deployment
                  processes, leveraging tools like Docker to streamline
                  development workflows and ensure efficient deployment
                  strategies.
                </li>
                <li>
                  Embraced agile development methodologies, applying iterative
                  approaches to project management for enhanced flexibility and
                  responsiveness to client needs.
                </li>
              </ul>
            </motion.div>
          </div>
        </TabPanel>
      </motion.div>
    </div>
  );
};

export default ExperienceComponent;
