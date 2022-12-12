import "./FooterStyles.css"

import React from 'react'

import {FaHome, FaPhone,FaMailBulk, FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">
    <div className="left">
    <div className="loaction">
      <FaHome  size={20} style={{color:
        "#fff", marginRight: "2rem"}}/>
        <div>
        <p> Nagina, Bijnor</p>
        <p>India</p>
        </div>
    </div>
    <div className="phone">
    <h4><FaPhone size={20} style={{color:
        "#fff", marginRight: "2rem"}}/>
    +91-6398683067</h4>
    </div>
    <div className="email">
    <h4><FaMailBulk size={20} style={{color:
        "#fff", marginRight: "2rem"}}/>
    kunal2020cs063@abesit.edu.in</h4>
    
    </div>
    </div>
    <div className="right">
    <h4>About me</h4>
    <p>This is me kunal chauhan.
    Student of ABES Institute of Technology, Ghaziabad. 
    I m a Web Developer.
    </p>
    <div className="social">
    
    <FaFacebook  onClick={() =>window.open('https://www.facebook.com/profile.php?id=100024390726445&mibextid=ZbWKwL')}
    size={30} 
    style={{color: "#fff", marginRight: 
    "1rem"}}
     />
     <FaInstagram  onClick={() =>window.open('https://www.instagram.com/silentstorm____')}
    size={30} 
    style={{color: "#fff", marginRight: 
    "1rem"}}
     />
     <FaLinkedin onClick={() =>window.open('https://www.linkedin.com/in/kunal-chauhan-717934222/')}
    size={30} 
    style={{color: "#fff", marginRight: 
    "1rem"}}
     />
     </div>
    </div>
    </div>
    </div>
  )
}

export default Footer