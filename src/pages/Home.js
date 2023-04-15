import React from 'react'
import Container from '../components/Container'
import JobCard from '../components/JobCard'

const Home = () => {
  return (
    <Container>
      <div className='pt-[50px] pb-[50px]'>
        <h1 className='text-[58px] font-medium'>We are Hiring!</h1>
        <p className='text-[20px] font-light mt-1'>engineerhub is hiring students to encourage their efforts & help them excel in the following domains.</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-10 md:mx-10 mx-1'>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </Container>
  )
}

export default Home