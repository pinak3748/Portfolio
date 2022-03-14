import React, { useEffect, Suspense, lazy } from 'react';
import WebFont from 'webfontloader';
import { ErrorBoundary } from 'react-error-boundary';
import { Loading } from './components';
import { ErrorFallback } from './constants';
import './App.scss';

const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const About = lazy(() => import('./container/About/About'));
const Footer = lazy(() => import('./container/Footer/Footer'));
const Header = lazy(() => import('./container/Header/Header'));
const Skills = lazy(() => import('./container/Skills/Skills'));
const Works = lazy(() => import('./container/Work/Work'));

function App() {
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
  }, []);

  return (
    <div className="app">
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Suspense fallback={Loading}>
          <Navbar />
          <Header />
          <About />
          <Works />
          <Skills />
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
