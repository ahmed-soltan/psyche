import React from "react";
import aboutImage from '../assets/pexels-tima-miroshnichenko-5452291.jpg'
const About = () => {
  return (
    <div className="container my-5">
        <h1 className="text-center display-1">About us</h1>
      <div className="row my-5">
        <div className="col-lg-6 col-sm-12">
          <p className="fs-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            consectetur ullam consequatur est porro? Quaerat tempora nostrum
            molestias distinctio corporis ullam quod error maxime officia.
          </p>
          <br />
          <p className="fs-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            consectetur ullam consequatur est porro? Quaerat tempora nostrum
            molestias distinctio corporis ullam quod error maxime officia.
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
