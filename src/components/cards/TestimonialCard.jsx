import React from 'react'

const TestimonialCard = ({ name, coy, review }) => {
  return (
    <div className='card flex flex-col gap-4 w-[100%] sm:w-[75%] md:w-[50%] lg:w-[45%] p-5 rounded-xl border-2 border-[#777]/50'>
        <div className='flex gap-1'>
            <img className='w-4 h-4' src="/img/star.svg" alt="star" />
            <img className='w-4 h-4' src="/img/star.svg" alt="star" />
            <img className='w-4 h-4' src="/img/star.svg" alt="star" />
            <img className='w-4 h-4' src="/img/star.svg" alt="star" />
            <img className='w-4 h-4' src="/img/star.svg" alt="star" />
        </div>
        <p className='font-body text-start'>"{review}"</p>
        <div className='flex mt-auto items-center gap-3'>
            <img className='h-10 w-10' src="/img/user-avatar.svg" alt="avatar" />
            <div>
                <h3 className='font-body font-semibold'>{name}</h3>
                {coy && (<p className='font-body text-sm opacity-70'>{coy}</p>)}
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard