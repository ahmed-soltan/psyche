import React from 'react'
import Med from '../assets/hard.mp4'
import {NavLink} from 'react-router-dom'

const Medium = () => {
  return (
    <div className='container my-5 w-100 d-flex align-items-center justify-content-center flex-column'>
        <video src={Med} controls width="100%"></video>
        <NavLink to="/final">
          <button className='btn btn-primary  px-4 fs-3 my-5'>Login to the psychiatrist with ai</button>
        </NavLink>
    </div>
  )
}

export default Medium