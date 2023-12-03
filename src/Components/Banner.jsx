import React from "react";
import { NavLink } from "react-router-dom";
import banner from "../assets/banner.png";
const Banner = () => {
  return (
     <div className="banner">
         <div className="container">
      <div className="row">
        <div className="col-12" style={{marginTop:"200px"}}>
          <h1 className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quia
            earum, provident commodi hic molestiae iure dolores libero maxime!
            Magni.
          </h1>
          <div className="buttons d-flex mt-4">
            <NavLink to="https://www.moh.gov.sa/HealthAwareness/MedicalTools/Pages/depressiontest.aspx">
                <button className="btn btn-primary px-5 py-3 fs-4">
                     Go To Test
                </button>
            </NavLink>
            <NavLink to="/result">
                <button className="btn btn-secondary ms-2 px-5 py-3 fs-4">
                    See Your Result
                </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
     </div>
  );
};

export default Banner;
