import React from 'react'

const Services = () => {
  return (
    <div className='m-5 '>
        <h1 className='text-center my-5'>Our Services</h1>
        <div className='row mt-5'>
            <div className="col-lg-3 col-md-6 col-sm-12 text-center service">
                 <h2><i class="fa-solid fa-truck-medical text-primary fs-1"></i></h2>
                 <h3 className='my-4'>Ambulatory</h3>
                 <p className='fs-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo eligendi architecto harum beatae veniam sed.</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-center service">
                 <h2><i class="fa-solid fa-syringe text-primary fs-1"></i></h2>
                 <h3 className='my-4'>Vaccination</h3>
                 <p className='fs-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo eligendi architecto harum beatae veniam sed.</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-center service">
                 <h2><i class="fa-solid fa-capsules text-primary fs-1"></i></h2>
                 <h3 className='my-4'>General Surgery</h3>
                 <p className='fs-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo eligendi architecto harum beatae veniam sed.</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-center service">
                 <h2><i class="fa-solid fa-stethoscope text-primary fs-1"></i></h2>
                 <h3 className='my-4'>Physician</h3>
                 <p className='fs-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo eligendi architecto harum beatae veniam sed.</p>
            </div>


        </div>
    </div>
  )
}

export default Services