import React from 'react';
import Hero from '../components/Home/Hero';
import Count from '../components/Home/Count';
import Expertise from '../components/Home/Expertise';
import ContractersBanner from '../components/Home/Contracters';

const HomePage = () => {
  return (
    <div className='gap-10 flex flex-col items-center justify-center'>
      <Hero />
      <Count />
      <Expertise/>
      <ContractersBanner/>
    </div>
  );
};

export default HomePage;