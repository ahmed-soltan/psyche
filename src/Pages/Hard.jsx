import React from 'react'
import hard from '../assets/med.mp4'
const Hard = () => {
  return (
    <div className='container my-5'>
        <video src={hard} controls width="100%"></video>
    </div>
  )
}

export default Hard