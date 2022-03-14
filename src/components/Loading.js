import React from 'react';
import Lottie from 'react-lottie';
import images from '../constants/images';

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: images.loader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="loading">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}
