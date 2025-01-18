import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { GiSteeringWheel } from 'react-icons/gi'
import { RiMenuUnfoldFill } from 'react-icons/ri'

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };
    
  return (
     <header className=' fixed w-full z-10 bg-secondary text-white py-4'>
        <nav className=' container flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <GiSteeringWheel size={35} className='text-primary'/>
                <a href='/' className='font-bold text-2xl'>WheelsDeal</a>
            </div>
            <div className='hidden md:flex items-center gap-8 font-medium text-xl'>
                <a href='/' className='hover:text-primary transition duration-200 ease-linear'>Home</a>
                <a href='/about' className='hover:text-primary transition duration-200 ease-linear'>About Us</a>
                <a href='/cars' className='hover:text-primary transition duration-200 ease-linear'>Our Cars</a>
                <a href='/services' className='hover:text-primary transition duration-200 ease-linear'>Servicess</a>
                
                <button className='hidden lg:flex border-2 border-primary text-lg px-4 rounded-md hover:bg-primary transition duration-200 ease-linear'>Sign In</button>
            </div>
            <div className='md:hidden flex items-center'>
                {menu ? (
                    <AiOutlineClose size={25} onClick={handleChange} />
                ) : (
                    <RiMenuUnfoldFill size={25} onClick={handleChange} />
                )}
            </div>
        </nav>

        {/* responsive section */}

        <div className= {`${menu ? "translate-x-0" : "-translate-x-full"} md:hidden flex flex-col absolute bg-secondary text-white left-o top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300`}> 
                <a href='/' className='hover:text-primary transition duration-200 ease-linear'>Home</a>
                <a href='/' className='hover:text-primary transition duration-200 ease-linear'>About Us</a>
                <a href='/' className='hover:text-primary transition duration-200 ease-linear'>Our Cars</a>
                <a href='/' className='hover:text-primary transition duration-200 ease-linear'>Servicess</a>
        </div>
     </header>
  )
}

export default Navbar
