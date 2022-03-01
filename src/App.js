import React, { useState, useEffect } from 'react';

import WebFont from 'webfontloader';
import Lottie from 'react-lottie';
import { About, Footer, Header, Work, Skills } from './container';
import { Navbar } from './components';
import images from './constants/images';
import './App.scss';

function App() {
  const [completed, setcompleted] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: images.loader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          'Droid Sans',
          'Chilanka',
          'Montserrat:400,500,600,700,800,900',
          'Satisfy:400',
          'Courgette:400',
          'Bree Serif:400',
          'Raleway Dots:400, 500, 600',
        ],
      },
    });

    setTimeout(() => {
      setcompleted(true);
    }, 2500);
  }, []);

  return (
    !completed ? (
      <div className="loading">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    ) : (
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Footer />
      </div>
    )
  );
}

export default App;
