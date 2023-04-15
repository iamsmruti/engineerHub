import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsTwitter, BsDiscord } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import CustomButton from './CustomButton'

const Footer = () => {
  return (
    <>
    <div className='bg-darkBlueShade text-white grid md:grid-cols-3 grid-cols-1 gap-10 py-5 pb-10 text-center md:text-left'>
      <div className='border-r-[0.5px] border-solid border-slate-500 px-10'>
        <Heading title={"About Us"}/>
        <p className='mt-3 text-[14px] text-slate-400'>engineerHUB is INDIA's largest community of engineers where students(alumni) from IITs, NITs, IIITs and state colleges join together to develop and nurture students skills coming from all over India.</p>
      </div>
      <div className='border-r-[0.5px] border-solid border-slate-500 text-center'>
        <Heading title={"Links"}/>
        <div className='flex flex-col mt-2'>
          {['Magazines', 'Course', 'Events' ].map((item) => (
            <Link>
              <p className='text-[14px] mb-2'>{item}</p>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Heading title={"Contact Us"}/>
        <p className='mt-3 text-[14px] text-slate-400'>info@engineerhub.in</p>
        <div className='flex mt-10 w-[100%] justify-center md:justify-start'>
            <a href='https://www.instagram.com/engineerhub.in/'>
              <img className='w-5 mr-6' src='https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png'/>
            </a>

            <a href='https://www.instagram.com/engineerhub.in/'>
              <BsLinkedin className='text-[21px] mr-8'/>
            </a>

            <a href='https://www.instagram.com/engineerhub.in/'>
              <BsTwitter className='text-[21px] mr-8'/>
            </a>

            <a href='https://www.instagram.com/engineerhub.in/'>
              <BsDiscord className='text-[21px] mr-8'/>
            </a>

            <a href='https://www.instagram.com/engineerhub.in/'>
              <FaTelegramPlane className='text-[21px]'/>
            </a>
        </div>
        <div className='flex justify-between md:max-w-[250px] w-[100%] mt-5 md:px-0 px-[100px]'>
          <CustomButton title={"Login"} />
          <CustomButton title={"Register"} />
        </div>
      </div>
    </div>
    <div className='bg-darkBlueShade py-2 border-t-[0.5px] border-slate-500 text-white text-center'>
       <p className='text-[12px] font-light'>Powered By</p>
       <p className='text-[16px]'>engineerHUB</p>
    </div>
    </>
  )
}

export default Footer

const Heading = ({title}) => {
  return (
    <h1 className='text-[32px]'>{title}</h1>
  )
}