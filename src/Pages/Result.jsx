import React from "react";
import About from "./About";
import { NavLink } from "react-router-dom";
const Result = () => {
  return (
    <div className="container my-5">
      <h1 className="display-3 fw-bold">Choose Your Test Result :</h1>
      <div className="buttons">
        <NavLink to='/hard'>
          <button className="btn btn-danger px-5 py-3 fs-3 text-white m-3">Hard</button>
        </NavLink>
        <NavLink to='/medium'>
          <button className="btn btn-warning px-5 py-3 fs-3 text-white m-3">Medium</button>
        </NavLink>
        {/* <NavLink>
          <button className="btn btn-success px-5 py-3 fs-3 text-white m-3">Easy</button>
        </NavLink> */}
      </div>
      <hr className="w-100" />
      <About />
    </div>
  );
};

export default Result;
