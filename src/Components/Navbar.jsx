import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary"
      style={{ borderBottom: "1px solid #999" }}
    >
      <div class="container">
        <NavLink to="/" class="text-black"  style={{textDecoration:"none"}}>
          <h1>
            <span className="text-primary">
              <i class="fa-solid fa-heart-pulse text-danger me-1"></i>Psyche
            </span>
            <h1 className="text-black d-inline">
            Boost
            </h1>
          </h1>
        </NavLink>
        <div
          class="ms-auto d-flex align-items-center gap-4 flex-wrap"
          id="navbarSupportedContent"
        >
          <div className="d-flex align-items-center justify-content-center flex-wrap">
            <i class="fa-solid fa-phone fs-3 me-3 text-primary"></i>
            <div>
              <h5 className="m-0 p-0">Call Today :</h5>
              <span>+995 123 456 789</span>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <i class="fa-regular fa-clock fs-3 me-3 text-primary"></i>
            <div>
              <h5 className="m-0 p-0">Opening Hours :</h5>
              <span>mon-fri 9am-6pm , sun 10am-1pm</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
