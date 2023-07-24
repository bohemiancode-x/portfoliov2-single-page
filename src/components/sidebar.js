import { useTheme } from '../hooks/useTheme' 
import Emmanuel from '../assets/emmanuel.jpg'
import dayjs from 'dayjs'
import { Link } from 'react-scroll'
import { AiFillGithub } from 'react-icons/ai'
import Mobilenav from './mobilenav'
import { navitems } from '../data/navItems'
import { useEffect, useState } from 'react'


export default function Sidebar({ toggleNav, nav }) {
    const { changeMode, mode } = useTheme()
    const [date, setDate] = useState('');

    const getDate = () => {
        let newDate = new Date();
        setDate(dayjs(newDate).format('MMM D, h:mm A'))
    }

    useEffect(() => {
        getDate();
        let timeInterval = setInterval(() => {
            getDate();
        }, 60 * 1000);
        return () => clearInterval(timeInterval);
    },[date]);
  

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark');
        //localStorage.setItem("mode", mode)
    }

  return (
    <div className={`fixed z-20 overflow-y-hidden lg:w-1/4 lg:fixed lg:h-[100vh] lg:z-20 ${mode}`}>
        <div className='lg:hidden py-3 fixed w-full z-10 bg-white dark:bg-[#202124] flex items-center justify-between px-5'>
            <svg onClick={(e) => toggleNav(e)} className='block h-6 w-6 ml-5 cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <div className='flex items-center gap-5'>
                <a href='https://github.com/bohemiancode-x' target="_blank" rel="noopener noreferrer">
                    <AiFillGithub className="h-6 w-6 text-[#777] hover:text-[#fff]" />                
                </a>
                <div>
                    <p className='text-center font-body text-[#777] text-base'>Lagos, NG.</p>
                    <p className='text-center text-[#fff]/70 font-body text-sm'>{date}</p> 
                </div>
            </div>

        </div>
    <div className='dark:bg-[#202124] dark:border-r-2 dark:border-[#7d7979] hidden lg:flex bg-grey h-[100%] flex-col items-center'>

        <div className='flex flex-col items-center gap-1'>
            <div>
                <img className='rounded-full h-28 mt-20' src={Emmanuel} alt="img" />
            </div>
            <h2 className='text-center font-body font-bold text-2xl mt-3 opacity-80'>Emmanuel Adisa</h2>
            
            <p className='text-center font-body text-[#777] text-base'>FOLIO</p>
            <p className='text-center text-[#777] font-body text-sm'>2021 - 2023.</p> 
        </div>

        <div>
            <ul className='flex flex-col w-[10em] text-[#7d7979] text-center mt-10 gap-5'>
                {navitems.map((nav) => (
                    <Link className='font-body tracking-wider cursor-pointer hover:text-black dark:hover:text-[white]' spy={true} smooth={true} activeClass="active" offset={0} duration={500} key={nav.number} to={nav.path}>
                        {nav.text}
                    </Link>
                ))}
            </ul>
        </div>

        {/* <button onClick={toggleMode} className='mode'>
            <img src={ mode === 'dark' ? "./img/light_mode_white.svg" : "./img/darkmode.svg" } alt="mode" className='h-5' />
            <span className='font-body'>{ mode === 'dark' ? 'Light Mode' : 'Dark mode' }</span>
        </button> */} 

        <div className='mt-[50%] opacity-50'>
            <p className='font-body text-sm'>&#169; Copyright 2023.</p>
            <p className='font-body text-sm'>All rights reserved.<br /> BohemianCode-x.</p>
        </div>

    </div>

    <Mobilenav nav={nav} toggleNav={toggleNav} />
    </div>
  )
}
