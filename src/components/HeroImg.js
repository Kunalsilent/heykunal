 import "./HeroImgStyles.css";

 import React from 'react'
 import IntroImg from "../assets/intro-bg.jpg"
 import { Link } from "react-router-dom";
 
 const HeroImg = () => {
   return( <div className="hero">
   <div className="mask" >
   <img className="intro-img" src={IntroImg} alt="IntroImg"/>
   </div>
   <div className="content">
   <p>HI, I'M A STUDENT</p>
   <h1> React Developer.</h1>
   <div>
    <Link to="/project" 
    className=" a"> <span></span>
    <span></span>
    <span></span>
    <span></span> Projects  </Link>
    <Link to="/contact" 
    className=" a"> <span></span>
    <span></span>
    <span></span>
    <span></span> Contact  </Link>
    <Link onClick={() =>window.open('https://drive.google.com/file/d/1k74-u7QJghUDAgu7vSqdbuQmSzyn9drZ/view?usp=drivesdk' )}
    className=" a"> <span></span>
    <span></span>
    <span></span>
    <span></span> Resume  </Link>
   </div>
   </div>
   </div>
   );
 };
 
 export default HeroImg;