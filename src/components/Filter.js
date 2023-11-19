import React from 'react'

const Filter = ({icon, title}) => {
  return (
    <div className=' flex items-center text-black bg-white hover:bg-black hover:text-[#ffffff] hover:font-bold gap-2 py-1 px-2 sm:px-4 rounded-full my-4 text-[15px] sm:text-[16px]'>
        {icon}
        {title}
    </div>
  )
}

export default Filter;