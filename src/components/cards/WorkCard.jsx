import React from 'react'

const WorkCard = ({coy, job, time, location, desc}) => {
  return (
        <div className='font-body text-[#777]'>
            <h2 className='font-body text-white/90 font-medium text-lg md:text-xl lg:text-2xl'> - {coy}<span className='text-sm md:text-base font-body opacity-60'> | {job}</span></h2>
            <span className='font-body text-sm md:text-base lg:text-lg'>({time} | <span className='italic text-xs md:text-sm lg:text-base'>{location}</span>) </span>
            <p className='text-sm ml-10 mt-2 text-white/60 font-body w-[75%] md:w-[50%]'>
               {desc}
            </p>
        </div>
  )
}

export default WorkCard