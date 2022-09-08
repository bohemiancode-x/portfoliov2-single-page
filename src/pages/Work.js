import React from 'react'
import { useTheme } from "../hooks/useTheme";

const projects = [
  {
    id: 1,
    title:'Space Tourism multi-page website',
    info: 'Built a responsive multi-page website with React and TailwindCSS. Data is injected dynamically from a local JSON file.',
    link: 'https://space-tourism-web-delta.vercel.app/'
  },
  {
    id: 2,
    title: 'Countries List App with Rest API',
    info: 'A responsive react project styled with tailwindcss that dynamically injects information about countries of the world from Rest API with the use of react tools.',
    link: 'http://countries-list-app-with-rest-api.vercel.app/'
  },
  {
    id: 3,
    title: 'Recorder-App (Capstone project)',
    info: 'Built a screen recorder web app using React tools and deployed via Vercel.',
    link: 'https://capstone-project-recorder-app-bohemiancodex.vercel.app/'
  },
  {
    id: 4,
    title: 'MyNaira App with react',
    info: 'A CRUD react project infused with Firestore authentication and database functions to show real time data (transaction tracking) by various authenticated users. Project was supervised by Shaun J. Pelling (NetNinja UK).',
    link: 'https://project-my-naira-react-app.vercel.app/'
  },
  {
    id: 5,
    title: 'Coinblock landing page',
    info: 'A simple react project designed to illustrate the use of fetch API functions and injecting API data into the DOM. Data is retrieved from coingecko API.',
    link: 'https://project-coinblock-landing-page.vercel.app/'
  },
  {
    id: 6,
    title: 'Static Joblisting page with filter function',
    info: 'A single static webpage made with ReactJS framework and designed with TailwindCSS while using a local JSON file to dynamically inject data into the page with the Fetch function.',
    link: 'https://static-job-lisiting-page.vercel.app/'
  },
  {
    id: 7,
    title: 'Memory game app: Magic Match',
    info: 'A simple memory game project designed with React to illustrate the use of react useState and useEffect hooks.',
    link: 'https://memory-game-project-mauve.vercel.app/'
  },
  {
    id: 8,
    title: 'Advice generator page',
    info: 'A simple app that shows the use of fetch API method in javascript and how to access data fetched from the API in the DOM.',
    link: 'https://project-advice-generator-app.vercel.app/'
  }
]

export default function Work() {
  const { mode } = useTheme();

  return (
    <div id='work' className={` lg:h-[125vh] xl:h-[100vh] pt-5 lg:py-10 ${mode}`}>
      <div className='px-5 lg:px-10'>
          <h3 className='text-sm font-body opacity-50 tracking-widest'>WORK</h3>
          <h2 className='mt-5 font-[serif] tracking-widest text-2xl font-bold'>PORTFOLIO</h2>
        </div>

        <div className='mt-10 lg:px-10'>
          <ul className='grid px-5 pb-5 lg:px-0 lg:grid-cols-3 gap-4'>
            {projects.map((project) => (
              <li className='flex flex-col rounded bg-grey border-2 p-3 border-grey shadow-lg dark:bg-black' key={project.id}>
                  <h3 className='font-body font-bold text-xl'>{project.title}</h3>
                  <p className='my-3 text-sm font-body opacity-70'>{project.info}</p>
                  <a className='mt-auto' href={project.link}>
                    <button className='w-2/4 font-body flex items-center justify-center gap-2 rounded border-2 border-white p-2 hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white'>
                      visit site
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </button>
                  </a>
                 
              </li>
            ))}
          </ul>
        </div>

    </div>
  )
}
