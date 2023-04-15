import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const menuItems = [
    {
      name: 'Domains',
      path: '/domains'
    },
    {
      name: 'Courses',
      path: '/courses'
    },
    {
      name: 'Internship',
      path: '/internship'
    },
    {
      name: 'Magazine',
      path: '/magazine'
    },
    {
      name: 'Campus',
      path: '/campus'
    },
    {
      name: 'Hiring',
      path: '/hiring'
    },
    {
      name: 'Industry',
      path: '/industry'
    },
    {
      name: 'Team',
      path: '/team'
    },
  ]

  const [mobNav, setMobNav] = useState(false)

  const handleToggle = () => {
    setMobNav(!mobNav)
  }
  return (
    <>
    <div className='bg-darkBlueShade w-[100%] text-white md:px-[150px] px-[20px] py-[20px] flex items-center justify-between'>
      <div>
        <img className='w-[100px]' src='https://www.engineerhub.in/static/media/logo1.358d88cfff15efcc3dde.png'/>
      </div>

      <div className='md:flex items-center hidden'>
        <div className='flex'>
          {menuItems.map((item) => (
            <Link>
              <p className='mr-4'>{item.name}</p>
            </Link>
          ))}
        </div>

        <div className='cursor-pointer'>
          <img className='w-10 rounded-full' src='https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg'/>
        </div>
      </div>

      <div onClick={handleToggle} className='md:hidden block cursor-pointer transition-all duration-100 ease-in-out delay-150'>
        <GiHamburgerMenu className='text-[32px]'/>
      </div>
    </div>
    {mobNav ? <div className='bg-darkBlueShade flex flex-col items-center text-white pb-6 transition-all duration-100 ease-in-out delay-150'>
        {menuItems.map((item) => (
          <p className='text-[18px] font-light py-2'>{item.name}</p>
        ))}

        <div className='cursor-pointer mt-3'>
          <img className='w-10 rounded-full' src='https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg'/>
        </div>
      </div> : null}
    </>
  )
}

export default Navbar