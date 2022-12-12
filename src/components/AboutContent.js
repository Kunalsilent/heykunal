import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
// import React1 from "../assets/react1.jpg";
// import React2 from "../assets/react2.jpg";

const AboutContent = () => {
  return (<div className="about">
    <div className="left">
      <h1>About - </h1>
    
      <h2>Hi I m Kunal chauhan</h2>
      <p> I'm currently pursuing Btech in computer science and Engineering from ABES Institute of Technology, Ghaziabad, India which is affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU) and my portfolio is a representation of all that
      I've learned and accomplished as a engineering student.</p>
      <Link to="/contact">
        <button className="btn2"> contact</button>
      </Link>
    </div>
    <div className="right">
      <div className="img-container">
        <div className="img-stack top">
          <img src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="img" alt="true" />
        </div>
        <div className="img-stack bottom">
          <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="img" alt="true" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default AboutContent;
