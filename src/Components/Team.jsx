import React from 'react'
import member1 from '../assets/user-1.png'
import user2 from '../assets/user2.jpg'
import member2 from '../assets/user-2.png'
import member3 from '../assets/user-3.png'
const Team = () => {
  return (
    <div className='m-5 teams'>
    <h1 className='text-center my-5'>Our Team</h1>
    <div className='row mt-5'>
        <div className="col-lg-3 col-md-6 col-sm-12 text-center team">
             <img src={member1} width="200px" height="200px" style={{borderRadius:"50%"}} alt="" />
             <p className='fs-4 mt-2'>Doctor</p>
             <h1 className='text-black'>Mary Hell</h1>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 text-center team">
             <img src={user2} width="200px" height="200px" style={{borderRadius:"50%"}} alt="" />
             <p className='fs-4 mt-2'>Doctor</p>
             <h1 className='text-black'>Tom Hardy</h1>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 text-center team">
             <img src={member2} width="200px" height="200px" style={{borderRadius:"50%"}} alt="" />
             <p className='fs-4 mt-2'>Assistant</p>
             <h1 className='text-black'>John Smilga</h1>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 text-center team">
             <img src={member3} width="200px" height="200px" style={{borderRadius:"50%"}} alt="" />
             <p className='fs-4 mt-2'>Assistant</p>
             <h1 className='text-black'>Megan Fox</h1>
        </div>

      

    </div>
</div>
  )
}

export default Team