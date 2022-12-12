import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';


export const About = () => {
  return  <div>
  <Navbar/>
  <HeroImg2 heading="Who I m ?" text="I m Frontend-react developer."/>
  <AboutContent/> 
 
  <Footer/>
  </div>
  
};

export default About;
