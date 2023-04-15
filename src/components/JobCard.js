import React from 'react'

const JobCard = ({job}) => {
  return (
    <div className='flex flex-col border-[1px] border-black rounded-lg p-4 bg-white'>
      <div>
        <img src='https://www.engineerhub.in/static/media/ehub.99144aebaead2e0600fcb59d8331eda3.svg'/>
        <p className='mt-2 text-slate-600'>@engineerHUB</p>
        <p className='mt-4 text-[24px] font-medium'>Hiring for Backend Developer</p>
        <div className='ml-10 mt-3'>
          <p>Tech Stack: Node.js </p>
          <p className='mt-2'>Experience: 0-2 years</p>
          <p className='mt-2'>Eligibility: Min 60% in 10th and 12th class </p>
        </div>

        <p className='mt-3 font-bold'>Location: Ghaziabad</p>
        <p className='mt-3 font-bold'>Last Date: 25-02-2023</p>

        <button onClick={() => alert('The backend is yet to be integrated! Stay Tuned!')} className='bg-black text-white px-4 py-1 mt-6 mb-4 rounded-md'>Apply</button>
      </div>
    </div>
  )
}

export default JobCard