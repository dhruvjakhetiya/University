import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"

import React from "react";

const About = ({setPlayState}) => {
  return( 
  <div className="about">
    <div className="about-left">
        <img src={about_img} className="about-img" alt="" />
        <img src={play_icon} className="play-icon" onClick={()=>{
          setPlayState(true)
        }} alt="" />
    </div>
    <div className="about-right">
       <h3>ABOUT UNIVERSITY</h3>
       <h2>Nurturing Tomorrow's Leader's Today</h2>
       <p>Embarks on a transformative educational journey with our
        university's comprehensive education programs.Our cutting-edge
        curriculum is designed to empower students with the knowledge,
        skills, and experiences needed to excel in the dynamic field of
        education.</p>
        <p>
            With the focus on innovation, hands-on learning and personalized mentorship
            , our programs prepare aspiring educators to make a meaningful impact in classrooms,
            schools and communities.
        </p>
        <p>
            Whether you aspire to become a teacher, administrator, counselor, or educational leader,
            our diverse range of programs offers the perfect pathway to achieve our goals and unlock your
            full potential in shaping the future of education.
        </p>
    </div>
  </div>
  );
};

export default About;
