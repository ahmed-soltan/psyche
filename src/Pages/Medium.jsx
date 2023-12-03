import React from 'react'
import Med from '../assets/hard.mp4'

const Medium = () => {
  return (
    <div className='container my-5'>
        <video src={Med} controls width="100%"></video>
    </div>
  )
}

export default Medium