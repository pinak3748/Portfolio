import React from 'react';
import { motion } from 'framer-motion';
import Typed from 'react-typed';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Pinak</h1>
          </div>
          {/* <div className="circle-cmp app__flex">
            <img src={images.git} alt="profile_bg" />
          </div> */}
        </div>

        <div className="tag-cmp app__flex">
          {/* <p className="p-text">Web Developer</p>
          <p className="p-text">Freelancer</p> */}
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      {/* <img src={images.profile} alt="profile_bg" /> */}
      <motion.div
        className="app__heading"
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
      >
        <h1 className="heading">
          {' '}
          I&apos;m passionate <br />
          <Typed
            strings={['Full-stack Developer', 'Software Developer']}
            typeSpeed={40}
            showCursor={false}
            backSpeed={80}
            backDelay={25}
            smartBackspace
          />
          <br />
          from India
        </h1>
        <p>
          &ldquo; A passionate Full Stack Software Developer who like to literate over and having an
          experience of writing clean, elegant and efficient code for building Web and Mobile application. &rdquo;
        </p>
      </motion.div>
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.mongodb, images.next, images.mu5].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
