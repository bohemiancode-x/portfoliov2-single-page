import React from 'react'
import { useTheme } from "../hooks/useTheme";
import { projectsData } from '../data/projectsData';


export default function Work() {
  const { mode } = useTheme();

  return (
    <div id='work' className={` lg:h-[125vh] xl:h-[100vh] pt-5 lg:py-10 ${mode}`}>
      <div className='px-5 lg:px-10'>
          <h3 className='text-sm font-body opacity-50 tracking-widest'>WORK</h3>
          <h2 className='mt-5 font-[serif] tracking-widest text-2xl font-bold'>PORTFOLIO</h2>
        </div>

        <div className='mt-10 lg:px-10'>
          <ul className='grid px-5 pb-5 lg:px-0 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {projectsData.map((project) => (
              <li className='flex flex-col rounded bg-grey border-2 p-3 border-grey shadow-lg dark:bg-[#202124]' key={project.id}>
                  <h3 className='font-body font-bold text-xl'>{project.title}</h3>
                  <p className='my-3 text-sm font-body opacity-70'>{project.info}</p>
                  <div className='flex mt-auto gap-2'>
                    <a className='' href={project.link} target="_blank" rel="noopener noreferrer">
                      <button className=' font-body flex items-center justify-center gap-2 rounded border-2 border-white p-2 hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white'>
                        demo
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </button>
                    </a>
                    <a className='' href={project.git} target="_blank" rel="noopener noreferrer">
                      <button className='font-body flex items-center justify-center gap-2 rounded border-2 border-white p-2 hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white'>
                        source code
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </button>
                    </a>
                  </div>
                 
              </li>
            ))}
          </ul>
        </div>

    </div>
  )
}
