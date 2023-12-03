import React from 'react'
import { NavLink } from 'react-router-dom'
const Signup = () => {
  return (
    <div className="container my-5">
      <form action="/">
        <div class="mb-3">
          <label  className="form-label fs-5">
            username
          </label>
          <input
            type="text"
            className="form-control py-2"
            required
            autoComplete="off"
            />
        </div>
        <div class="mb-3">
          <label  className="form-label fs-5">
            Email address
          </label>
          <input
            type="email"
            className="form-control py-2"
            required
            autoComplete="off"
            />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label  className="form-label fs-5">
            Password
          </label>
          <input
            type="password"
            className="form-control py-2"
            required
            autoComplete="off"
            
          />
        </div>
        <div class="mb-3">
          <label  className="form-label fs-5">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control py-2"
            required
            autoComplete="off"
            
          />
        </div>

        <div>
           <h5 className="my-4"> Already Have an Account ?  <NavLink to="/signup">Sign in to your Account </NavLink></h5>
        </div>

       <button type="submit" class="btn btn-primary px-4 fs-4">
          Sign up
        </button>
      </form>
    </div>
  )
}

export default Signup