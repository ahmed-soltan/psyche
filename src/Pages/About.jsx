import React from "react";
import aboutImage from "../assets/pexels-tima-miroshnichenko-5452291.jpg";
const About = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center display-1">About us</h1>
      <div className="row my-5">
        <div className="col-lg-6 col-sm-12">
          <p className="fs-4">
            Our goal is to solve psychological problems that affect many people
            from different parts of the world. I serve everyone who is afraid to
            go to doctors’ clinics and provide them with a simple website that
            solves their psychological problems. Our future goal is to treat
            more and more specific types of psychological or mental problems.
          </p>
        </div>
        <div className="col-lg-6 col-sm-12">
          <img src={aboutImage} className="w-100" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
