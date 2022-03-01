import React from 'react';
import { ImLinkedin2 } from 'react-icons/im';
import { FiGithub } from 'react-icons/fi';
import { BiLink } from 'react-icons/bi';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.linkedin.com/in/pinakfaldu/" target="_blank" rel="noreferrer">
      <ImLinkedin2 />
    </a>
    <a href="https://github.com/pinak3748" target="_blank" rel="noreferrer">
      <FiGithub />
    </a>
    <a href="https://drive.google.com/file/d/1rShapqqt2bklsHxO42EyXhu7-b1XcVwl/view?usp=sharing" target="_blank" rel="noreferrer">
      <BiLink />
    </a>
  </div>
);

export default SocialMedia;
