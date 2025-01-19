import React from 'react'
import img from "../../assets/img/approch.jpg"

const Approch = () => {
  return (
    <div className='flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-16'>
      <div className='w-full md:w-2/4 space-y-4'>
            <h1 className='text-4xl font-bold'>Our Approch</h1>
            <h2 className='font-semibold text-lg lg:text-2xl'>
                Empower individuals to achieve sustainable mobility solutions and 
                inspire a positive impact on the environment
            </h2>
            <p className='text-sm lg:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, magnam?</p>

            <p className='text-sm lg:text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                esse consequuntur veritatis quos? Tenetur quae esse quia commodi,
                reprehenderit aut eius enim adipisci dicta quos recusandae illo facere ea 
                necessitatibus.
            </p>
        </div>

        <div className='w-full md:w-2/5'>
            <img src={img} alt='img' className='rounded-lg'/>
        </div>
    </div>
  )
}

export default Approch