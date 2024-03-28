import React from 'react'
import { useTheme } from "../hooks/useTheme";
import { Link } from 'react-scroll';

export default function About({ myRef }) {
    const { mode } = useTheme();

  return (
    <section className={`${mode}`}>
        <div id='about' className={`py-14 font-body md:py-20`}>
            <div ref={myRef} className='pt-5 px-10'>
                <h3 className='text-sm font-body opacity-50 tracking-widest'>ABOUT ME</h3>
            </div>

            <div className='mt-10'>
                <p className='tracking-wider font-body text-xs lg:text-sm px-10'>
                    <span className='font-bold font-body text-lg '>Hello! I'm Emmanuel.</span> I’m a front-end focused software engineer versatile with ReactJS, NextJS, TypeScript and similar frameworks.

                    I’ve always had a flair for numbers which encouraged me to study accounting in the university from 2016 to 2020. I picked up tutoring/ teaching after that. I taught related subjects like commerce, economics and accounting for a year before enrolling for the National youths service corps programme in Nigeria. The programme is a mandatory service to the government for fresh university graduates. 
                </p>
                <p className='mt-5 tracking-wider font-body text-xs lg:text-sm px-10'>
                During this programme, I rediscovered my love for problem-solving in programming and decided to delve into that. I enrolled in coding bootcamps and internships and took a couple of virtual courses aimed at developing frontend skills. This lasted for about a year after which I was able to take on contract jobs, freelance opportunities and also hackathons.
                <br/>
                I’m currently a front-end engineer at J3C. With experiences in contract work, hackathons and freelance jobs, I tackle my roles with utmost competence.
                <Link className='cursor-pointer mx-2 font-body italics hover:text-[teal]' spy={true} smooth={true} offset={0} duration={500} to='contact'>You can reach me through my social media profiles attached.</Link>
                </p>
            </div>

            <div className='mt-10 px-10'>
                <h3 className='mt-5 font-body tracking-widest text-2xl font-bold'>My skill set</h3>
                <div className='mt-3'>
                    <p className='font-body tracking-widest'>FRONTEND</p>
                    <ul className='flex flex-wrap items-center gap-8 mt-3'>  
                    <a href="https://reactjs.org/" rel="noreferrer" target="_blank"><img className='h-12 sm:h-16 lg:h-20' src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="50" /></a>  
                    <a href="https://getbootstrap.com/docs/3.4/javascript/" rel="noreferrer" target="_blank"><img className='h-12 sm:h-16 lg:h-20' src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" alt="Bootstrap" height="50" /></a>  
                    <a href="https://www.w3schools.com/css/" rel="noreferrer" target="_blank"><img className='h-12 sm:h-16 lg:h-20' src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a>  
                    <a href="https://en.wikipedia.org/wiki/HTML5" rel="noreferrer" target="_blank"><img className='h-12 sm:h-16 lg:h-20' src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a>    
                    <a href="https://www.javascript.com/" rel="noreferrer" target="_blank"><img className='h-12 sm:h-16 lg:h-20' src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a>  
                    <a href="https://www.typescriptlang.org/" rel="noreferrer" target="_blank"><img className='h-12 sm:h-16 lg:h-20' src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" height="50" /></a>   
                    <a href="https://www.tailwindcss.com/" rel="noreferrer" target="_blank"><img className='h-12 sm:h-16 lg:h-20' src="https://profilinator.rishav.dev/skills-assets/tailwindcss.svg" alt="Tailwind CSS" height="50" /></a> 
                    <a href="https://www.astro.build/" rel="noreferrer" target="_blank"><img className='h-12 sm:h-16 lg:h-20' src="https://profilinator.rishav.dev/skills-assets/astro.svg" alt="Astro" height="50" /></a>  
                    <a href="https://nextjs.org/" rel="noreferrer" target="_blank"><img className='h-12 sm:h-16 lg:h-20' src="https://profilinator.rishav.dev/skills-assets/nextjs.png" alt="NextJS" height="50" /></a>  
                    <a href="https://about.gitlab.com/" rel="noreferrer" target="_blank"><img className='h-12 sm:h-16 lg:h-20' src="https://profilinator.rishav.dev/skills-assets/gitlab.svg" alt="GitLab" height="50" /></a>  
                    <a href="https://www.figma.com/" rel="noreferrer" target="_blank"><img className='h-12 sm:h-16 lg:h-20' src="https://profilinator.rishav.dev/skills-assets/figma-icon.svg" alt="Figma" height="50" /></a>
                    <a href="https://styled-components.com/" rel="noreferrer" target="_blank"><img className='h-12 sm:h-16 lg:h-20' src="https://profilinator.rishav.dev/skills-assets/styled-components.png" alt="Styled Components"  /></a> 
                    <a href="https://mui.com/" rel="noreferrer" target="_blank"><img className='h-12 sm:h-16 lg:h-20' src="https://profilinator.rishav.dev/skills-assets/mui.png" alt="Material UI" height="50" /></a> 
                    <a href="https://www.docker.com/" rel="noreferrer" target="_blank"><img className='h-12 sm:h-16 lg:h-20' src="https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg" alt="Docker" height="50" /></a>
                    <a href="https://firebase.google.com/" rel="noreferrer" target="_blank"><img className='h-12 sm:h-16 lg:h-20' src="https://profilinator.rishav.dev/skills-assets/firebase.png" alt="Firebase" height="50" /></a>
                    <a href="https://www.mongodb.com/" rel="noreferrer" target="_blank"><img className='h-12 sm:h-16 lg:h-20' src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="50" /></a>  
                    <a href="https://go.dev/" rel="noreferrer" target="_blank"><img className='h-12 sm:h-16 lg:h-20' src="https://profilinator.rishav.dev/skills-assets/go-original.svg" alt="Go" height="50" /></a>
                </ul>

                </div>

                <div className='mt-5'>
                <p className='font-body tracking-widest'>VERSION CONTROL AND OTHERS</p>
                <ul className='flex flex-wrap gap-8 mt-3 items-center'>
                    <a href="https://github.com/" rel="noreferrer" target="_blank"><img className='h-12 sm:h-16 lg:h-20' src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="50" /></a>
                    <a href='https://vercel.com' rel="noreferrer" target="_blank"><img className='h-12 sm:h-16 lg:h-20' alt="Vercel" src="/img/vercel-w.svg" /></a>
                    <a href="https://code.visualstudio.com/" rel="noreferrer" target="_blank"><img className='h-12 sm:h-16 lg:h-20' alt="VSCode" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" /></a>
                    <a href='https://npmjs.com' rel="noreferrer" target="_blank"><img className='h-12 sm:h-16 lg:h-20' alt="Npm" src="/img/npm.svg" /></a>
                    <a href='https://prettier.io' rel="noreferrer" target="_blank" ><img className='h-12 sm:h-16 lg:h-20' alt="Prettier" src="/img/prettier.svg" /></a>
                </ul>
                </div>

                

            </div>
        </div>

    </section>
  )
}
