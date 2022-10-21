import React from 'react'
import { useTheme } from "../hooks/useTheme";
import emailsvg from '../assets/email.svg'
import githubsvg from '../assets/github-brands.svg'
import twittersvg from '../assets/twitter-brands.svg'
import linkedinsvg from '../assets/linkedin.svg'

const contactinfo = [
  {
    id: 1,
    text: 'adisaemmanuel@outlook.com',
    link: 'mailto:adisaemmanuel@outlook.com',
    img: './img/email.svg'
  },
  {
    id: 2,
    text: 'bohemiancode-x',
    link: 'https://github.com/bohemiancode-x',
    img: './img/github.svg'
  },
  {
    id: 3,
    text: 'Emmanuel Adisa',
    link: 'https://linkedin.com/in/emmanueladisa',
    img: './img/linkedin.svg'
  },
  {
    id: 4,
    text: 'emmie_porsche',
    link: 'https://twitter.com/emmie_porsche',
    img: './img/twitter.svg'
  }
]

export default function Contact() {
  const { mode } = useTheme();

  return (
    <div id='contact' className={` pt-5 lg:py-20 ${mode}`}>
      <div className=' px-5 lg:px-10'>
          <h3 className='text-sm font-body opacity-50 tracking-widest'>GET IN TOUCH</h3>
          <h2 className='mt-5 font-[serif] tracking-widest text-2xl font-bold'>CONTACT</h2>
        </div>

        <div className='lg:flex mt-20 gap-6'>
          <div className='flex flex-col gap-6 lg:w-[50%] px-5'>
            {
              contactinfo.map((item) => (
                <div key={item.id} className='flex gap-4 p-6 bg-grey dark:border-white dark:border-2 rounded'>
                  <img className='h-6 w-6' src={item.img} alt='' />
                <a className='hover:text-[#2c98f0] font-body dark:text-black' href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
              </div>
              ))
            }
          </div>

          <div className='lg:w-[50%] lg:py-0 lg:px-0 py-5 px-10'>
            <form className='flex flex-col px-5 gap-4'>
              <input className='formelement' type="text" placeholder='Name' required/>
              <input className='formelement' type="email" placeholder='Email' required/>
              <input className='formelement' type="text" placeholder='Subject' required/>
              <textarea className='formelement' name="Message" cols="20" rows="7" required></textarea>
              <input className='bg-[#2c98f0] text-white w-[50%] p-3 rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer text-lg font-bold' type="submit" placeholder='SEND MESSAGE' />
            </form>
          </div>
        </div>

    </div>
  )
}
