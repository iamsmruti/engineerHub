import React from 'react'

const CustomButton = ({title}) => {
  return (
    <button className='bg-blue-500 px-5 py-1 rounded-md'>
        {title}
    </button>
  )
}

export default CustomButton