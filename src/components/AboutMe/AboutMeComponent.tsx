import './AboutMeComponent.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';
import { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

const motionDivProps = {
  initial: { opacity: 0, y: 300 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { type: 'tween', duration: 1.0 },
  },
  whileHover: 'onscreen',
};

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel width={600} className='carrossel-imgs'>
        <div className='about-me-img'>
          <img src='profile.jpg' />
        </div>
        <div className='about-me-img'>
          <img src='sbie.png' />
          <p className='legend'>Me presenting my article at SBIE</p>
        </div>
      </Carousel>
    );
  }
}

const AboutMeComponent = () => {
  return (
    <>
      <div className='container-about-me' id='about'>
        <motion.div {...motionDivProps}>
          <h2>
            <span className='highlight-text'>&lt;</span> about me{' '}
            <span className='highlight-text'>/&gt;</span>
          </h2>
        </motion.div>
        <motion.div {...motionDivProps} className='sub-container-about-me'>
          <div className='container-about-me-text'>
            <p id='about-me-text'>
              I am currently a Full Stack Web Developer at the{' '}
              <span className='highlight-text'>
                Eldorado Research Institute
              </span>
              , in Manaus. At the same time, I monitor the{' '}
              <span className='highlight-text'>Web Academy Project</span>, a
              training project that trains professionals in the area of ​​web
              development and which takes place at the
              <span className='highlight-text'>
                {' '}
                Federal University of Amazonas (UFAM)
              </span>
              . Additionally, I have a
              <span className='highlight-text'>
                {' '}
                bachelor's degree in computer science.{' '}
              </span>
              <i className='fa-solid fa-heart' />
              <br />
              <br />I have gained significant technical expertise in programming
              through hands-on experience with real-world projects in the
              industry. This has provided me with the opportunity to{' '}
              <span className='highlight-text'>
                develop and maintain complex web applications
              </span>{' '}
              using a variety of technologies. I have also become proficient in
              working with databases and have utilized cloud platforms such as
              AWS to deploy scalable solutions. These projects have not only
              honed my coding skills but have also deepened my understanding of{' '}
              <span className='highlight-text'>software architecture</span>,{' '}
              <span className='highlight-text'>agile methodologies</span>, and{' '}
              <span className='highlight-text'>
                best practices in software development
              </span>
              .
              <br />
              <br />
              Throughout my degree, I had the chance to collaborate on several
              research projects, in which I was able to apply my academic
              knowledge in practice. One of the highlights was the opportunity
              to publish my article "Analysis of the level of student confusion
              based on the degree of difficulty of programming questions" at the{' '}
              <span className='highlight-text'>
                Brazilian Symposium on Informatics in Education (SBIE)
              </span>
              , in the year 2022. This event represented no just recognition for
              my work, but also the chance to share learnings and contribute to
              the academic community.
              <br />
              <br />
              In my free time, I really like reading books, watching series and
              anime and playing video games. Oh, and of course, programming with
              a good cup of coffee is always a good choice.{' '}
              <i className='fa-solid fa-mug-hot' />
            </p>
          </div>
          <div className='container-about-me-carousel-img'>
            <DemoCarousel />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutMeComponent;
