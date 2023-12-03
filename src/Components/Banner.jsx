import React from "react";
import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-12 content">
            <h1 className="text-white">
              AI-DOCTOR Welcome to PsycheBoost I will be your friend during the
              journey of strengthening your psychology until we begin the
              journey. Click on Go To Test, and after completing the test, click
              on See Your Result, and after clicking on it, choose
              your test result.
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
