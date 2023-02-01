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
    <h1> </h1>
   <h1> </h1>
   <h2> </h2>
   <h3> </h3>
   <h4> </h4>
   <h3> </h3>
   <h1> </h1>
   <p>HI, I'M  KUNAL</p>
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
    <Link onClick={() =>window.open('https://drive.google.com/file/d/1_haQHnD7iO9TXi7BO4h1NL9HMywWhL-N/view?usp=drivesdk' )}
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