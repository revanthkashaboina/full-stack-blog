import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
        {/* LOGO */}
        <div className='flex items-center gap-4 text-2xl font-bold'>
            <img src='/logo.png' className='w-8 h-8' alt="logo-image" />
            <span>Blogapp</span>
        </div>
        {/* MOBILE MENU */}
        <div className='md:hidden'>M</div>
        {/* DESKTOP MENU */}
        <div className='hidden md:flex'>D</div> 
    </div>
  )
}

export default Navbar