import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/infoSection';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from '../components/infoSection/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Services from '../Services';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
