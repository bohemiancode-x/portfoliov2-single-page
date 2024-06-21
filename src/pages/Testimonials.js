import React from 'react'
import { useTheme } from '../hooks/useTheme';
import TestimonialCard from '../components/cards/TestimonialCard';

const Testimonials = () => {
    const { mode } = useTheme();

  return (
    <div id='testimonials' className={`min-h-full pt-5 lg:py-10 ${mode}`}>
        <div className='px-5 lg:px-10'>
          <h3 className='text-sm font-body opacity-50 tracking-widest'>TESTIMONIALS</h3>
          <h2 className='mt-5 font-body tracking-widest text-2xl font-bold'>What clients are saying</h2>
        </div>
        <div className='px-5 lg:px-10 mt-10 flex flex-col md:flex-row gap-5 md:items-start'>
            <TestimonialCard
                name='Leye A.'
                coy='CEO, CTA Fintech Solutions'
                review='I hired Emmanuel to help design, develop and build our company website. I found Emmanuel very professional and diligent in all his tasks and activities. Emmanuel was reliable, flexible and highly responsive. Highly recommend!'
            />
            <TestimonialCard
                name='Gabi O.'
                //coy='CEO, CTA Fintech Solutions'
                review='It was absolutely amazing working with Emmanuel.'
            />
        </div>
    </div>
  )
}

export default Testimonials