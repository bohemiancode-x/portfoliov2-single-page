import React from 'react'
import { useTheme } from "../hooks/useTheme";

export default function About() {
    const { mode } = useTheme();

  return (
    <div id='about' className={`py-10 md:py-20 ${mode}`}>
        <div className='pt-5 px-10'>
            <h3 className='text-sm font-body opacity-50 tracking-widest'>ABOUT ME</h3>
            <h2 className='mt-5 font-[serif] tracking-widest text-2xl font-bold'>WHO AM I? </h2>
        </div>

        <div className='mt-10'>
            <p className='tracking-wider font-body text-xs lg:text-sm px-10'>
                <span className='font-bold text-lg '>Hi! I'm Emmanuel Adisa.</span> I'm a budding, goal-driven, young developer passionate about bringing web designs to life. I'm trained in the development of scalable and responsive websites and I have executed several personal projects to perfection.
            </p>
            <p className='mt-5 tracking-wider font-body text-xs lg:text-sm px-10'>
             I'm currently working on various frontend projects to advance and improve my skills. Most of my designs are sourced from frontendmentor.io .. I particularly love to work with APIs and databases like firebase.  I'm currently learning Advanced React and other frameworks like Next.js and Nuxt.js.You can reach me through my social media profiles attached.
            </p>
        </div>

        <div className='mt-10 px-10'>
            <h3 className='mt-5 font-[serif] tracking-widest text-2xl font-bold'>My skill set</h3>
            <div className='mt-3'>
                <p className='font-body tracking-widest'>FRONTEND</p>
                <ul className='grid grid-cols-5 items-center gap-3 mt-3'>  
                <img className='h-20' src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" />
                <img className='h-20' src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" />  
                <img alt="TailwindCSS" src="https://img.shields.io/badge/-Tailwind%20CSS-0AB6D3?style=flat-square&logo=tailwind-css&logoColor=white" />
                <img className='h-20' src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" alt="Bootstrap" />
                <img className='h-20' src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" />  
                <img className='h-20' src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" />
                <img alt="Styled Components" src="https://img.shields.io/badge/-Styled_Components-db7092?style=flat-square&logo=styled-components&logoColor=white" />  
                <img alt="Material Ui" src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" />  
                <img alt="React Router" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
                <img className='h-20' src="https://profilinator.rishav.dev/skills-assets/firebase.png" alt="Firebase" />
            </ul>

            </div>

            <div className='mt-5'>
             <p className='font-body tracking-widest'>VERSION CONTROL AND OTHERS</p>
             <ul className='grid gap-3 grid-cols-5 mt-3 items-center'>
                <img className='h-20' src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" />
                <img alt="Netlify" src="https://img.shields.io/badge/-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white" />
                <img alt="VSCode" src="https://img.shields.io/badge/-Visual_Studio_Code-0078D4?style=flat-square&logo=visual%20studio%20code&logoColor=white" />
                <img alt="Npm" src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" />
                <img alt="Prettier" src="https://img.shields.io/badge/-Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white" />
             </ul>
            </div>

            

        </div>
    </div>
  )
}
