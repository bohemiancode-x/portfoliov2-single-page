import React from 'react'
import { useTheme } from "../hooks/useTheme";
import { projectsData } from '../data/projectsData';


export default function Work() {
  const { mode } = useTheme();

  return (
    <div id='work' className={`min-h-full pt-5 lg:py-10 ${mode}`}>
      <div className='px-5 lg:px-10'>
          <h3 className='text-sm font-body opacity-50 tracking-widest'>WORK</h3>
          <h2 className='mt-5 font-body tracking-widest text-2xl font-bold'>PORTFOLIO</h2>
        </div>
        <div className='flex flex-col gap-5 px-5 py-5 lg:px-10'>
        <div className='font-body text-[#777]'>
            <h2 className='font-body text-lg md:text-xl lg:text-2xl'> - CTA FINTECH SOLUTIONS <span className='font-body'>(March 2023 - July, 2023)</span></h2>
            <p className='text-sm ml-10 mt-2 font-body w-[50%]'>Developed and maintained web project for a startup fintech solutions company based in South Africa and U.K.</p>
            
            <a className='flex italic text-[#fff]/90 hover:text-[#f7f7] gap-1 items-center font-body' href='https://ctafintechsolutions.com' target="_blank" rel="noopener noreferrer">
            go to project 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
          <div className='font-body text-[#777]'>
            <h2 className='font-body text-lg md:text-xl lg:text-2xl'> - HNG i9 <span className='font-body'>(Nov 2022 - Jan, 2023)</span></h2>
            <p className='text-sm ml-10 mt-2 font-body w-[50%]'>Worked with a team of front-end developers to build an AI- powered webapp - SpeakBetter (twitter @speakBetterAI). SpeakBetter takes in audio and textual data and points out errors while also returning the correct form</p>
            
            <a className='flex italic text-[#fff]/90 hover:text-[#f7f7] gap-1 items-center font-body' href='https://speakbetter.fun' target="_blank" rel="noopener noreferrer">
            go to project 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
          <div className='font-body text-[#777]'>
            <h2 className='font-body text-lg md:text-xl lg:text-2xl'> - FREELANCE PROJECTS <span className='font-body'>(2021 - Present.)</span></h2>
            <p className='text-sm ml-10 mt-2 font-body w-[50%]'>Developing front-end features using HTML5, CSS3, JavaScript, React and other tools and frameworks.
            </p>
          </div>
          
        </div>

        <div className='mt-10 lg:px-10'>
          <h2 className='text-[#777] px-5 pb-5 lg:px-0  text-xl py-3'>PROJECTS</h2>
          <ul className='grid px-5 pb-5 lg:px-0 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {projectsData.map((project) => (
              <li className='flex flex-col rounded bg-grey border-2 p-3 border-grey/30 shadow-lg dark:bg-[#202124]' key={project.id}>
                  <h3 className='font-body text-[#fff]/80 font-bold text-xl'>{project.title}</h3>
                  <p className='my-3 text-sm font-body opacity-70'>{project.info}</p>
                  <div className='flex mt-auto gap-2'>
                    <a className='' href={project.link} target="_blank" rel="noopener noreferrer">
                      <button className=' font-body flex items-center justify-center gap-2 rounded border-2 border-[#777] p-2 hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white'>
                        demo
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </button>
                    </a>
                    <a className='' href={project.git} target="_blank" rel="noopener noreferrer">
                      <button className='font-body flex items-center justify-center gap-2 rounded border-2 border-[#777] p-2 hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white'>
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
