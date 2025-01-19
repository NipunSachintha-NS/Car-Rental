import React from 'react'
import { FaShippingFast } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa6'
import { SiWebmoney } from 'react-icons/si'
import WhyUsCard from './WhyUsCard';

const WhyUs = () => {
    const icon1 = <SiWebmoney className='text-green-500 mx-auto' size={48}/>;
    const icon2 = <FaUsers className='text-green-500 mx-auto' size={48}/>;
    const icon3 = <FaShippingFast className='text-green-500 mx-auto' size={48}/>;

  return (
    <div className='flex flex-col justify-center container md:mt-16 py-10'>
      <h1 className='font-bold text-4xl text-center'>Why choose <span>WheelsDeal </span>?</h1>

      <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, aperiam?</p>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5'>
        <WhyUsCard icon={icon1} title="Financing Option"/>
        <WhyUsCard icon={icon2} title="Satisfied Customer"/>
        <WhyUsCard icon={icon3} title="Fast & Easy Booking"/>
      </div>
    </div>
  )
}

export default WhyUs
