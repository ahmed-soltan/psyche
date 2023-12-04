import React from 'react'
import hard from '../assets/med.mp4'
import {NavLink} from 'react-router-dom'
const Hard = () => {
  return (
    <div className='container my-5 w-100 d-flex align-items-center justify-content-center flex-column'>
        <video src={hard} controls width="100%"></video>
        <NavLink to="/final">
          <button className='btn btn-primary px-4 fs-3 my-5 '>Login to the psychiatrist with ai</button>
        </NavLink>
    </div>
  )
}

export default Hard