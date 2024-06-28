import React, { useState } from 'react'
import { useTheme } from "../hooks/useTheme";


const education = [
  {
    id: 1,
    header: 'BACHELORS DEGREE IN ACCOUNTING',
    info: 'Bagged a bachelors degree in Accounting from the Federal University of Agriculture, Abeokuta, Nigeria. (2016 - 2020)'
  },
  {
    id: 2,
    header: 'FRONTEND WEB DEVELOPMENT COURSE',
    info: 'Participated in a four-month programme in Frontend web development learning at UnivelCity, Yaba, Lagos. (Nov 2021 - Feb 2022)'
  },
  {
    id: 3,
    header: 'FULL COURSE ON JAVASCRIPT WITH THE NETNINJA',
    info: 'Participated in an in-depth online learning with The Netninja UK tutored by Shaun J. Pelling. (April 2022 - May 2022)'
  },
  {
    id: 4,
    header: 'FULL COURSE ON REACT & FIREBASE WITH THE NETNINJA',
    info: 'Participated in an in-depth online learning with The Netninja UK tutored by Shaun J. Pelling. (May 2022 - July 2022)'
  }
]

export default function Education() {
  const { mode } = useTheme();
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    if (index !== openAccordion) {
        setOpenAccordion(index);
     } else {
       setOpenAccordion(null);
    }
  };

  return (
    <div id='education' className={`py-20 px-2 lg:px-0 ${mode}`}>
        <div className='px-5 lg:px-10'>
          <h3 className='text-sm font-body opacity-50 tracking-widest'>EDUCATION</h3>
          <h2 className='mt-5 font-[serif] tracking-widest text-2xl font-bold'>EDUCATION</h2>
        </div>

        <div className='mt-20 w-full px-3 lg:px-10'>
          <div className='accordion-container font-body mt-4 overflow-hidden'>
              <ul className='flex flex-col gap-2'>
              {education && education.map((item) => (
                  <div key={item.id} className={`relative py-2 border-b border-[#979393] overflow-hidden group ${ openAccordion === item.id ? 'is-active' : ''}`}>
                    <div 
                        className={`text-light-green duration-300 cursor-pointer flex gap-2 lg:gap-5 items-center rounded py-2 lg:py-4`}
                        onClick={() => handleAccordionClick(item.id)}
                    >
                        <p className='text-sm sm:text-base font-body lg:text-[20px]'>{item.header}</p>
                        <span className={` ml-auto transition-all duration-300`}>
                            <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                              <rect y="7" width="16" height="2" rx="1" className={ `${openAccordion === item.id ? 'rotate-180' : 'false'} transform origin-center transition duration-300 ease-out`}></rect>
                              <rect y="7" width="16" height="2" rx="1" className={ `${openAccordion === item.id ? 'rotate-180' : 'false rotate-90'} transform origin-center transition duration-300 ease-out`}></rect>
                            </svg>
                        </span>
                    </div>
                    <div className={'-z-10 group-[.is-active]:z-[1] text-white relative -top-[12rem] overflow-hidden mt-0 text-sm sm:text-base rounded p-0 transition-all duration-300 group-[.is-active]:p-2 group-[.is-active]:mt-2 max-h-0 group-[.is-active]:max-h-[200px] group-[.is-active]:top-0'}>
                      <p className='font-body'>
                        {item.info}
                      </p>
                    </div>
                </div>
              ))}
              </ul>
          </div>

        </div>
    </div>
  )
}
