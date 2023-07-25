import { useTheme } from "../hooks/useTheme";
import { HiChevronDoubleDown } from 'react-icons/hi'
import { AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-scroll';
import pdf from '../assets/resume.pdf'
import { useEffect, useState } from 'react';
import Marquee from "../components/Marquee";
import dayjs from "dayjs";

export default function Home({ pageIsVisible }) {
    const { mode } = useTheme();
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
    

  return (
        <div id='home' className={`min-h-screen md:h-[100vh] pt-20 lg:pt-0 flex flex-col justify-center overflow-hidden ${mode}`}>
            <div className="absolute flex items-center gap-5 top-3 right-3">
                <a href='https://github.com/bohemiancode-x' target="_blank" rel="noopener noreferrer">
                    <AiFillGithub className="h-8 w-8 text-[#777] hover:text-[#fff]" />                
                </a>
                <div>
                    <p className='text-center font-body text-[#777] text-base'>Lagos, NG.</p>
                    <p className='text-center text-[#fff]/70 font-body text-sm'>{date}</p> 
                </div>
            </div>
            <div className='font-body mt-[1rem] md:mt-[8rem] flex flex-col lg:flex-col gap-3 md:gap-10 items-center'>
                <div className='parent px-3 md:px-5 w-full flex flex-col gap-14 sm:gap-10 md:gap-8 font-body text-[7.5rem] sm:text-[9rem] lg:text-[9rem] xl:text-[11rem] font-bold text-[#777] break-all'>
                    <h2 className='w-full font-body tracking-[-7px] sm:tracking-[-10px] md:tracking-[-20px] hover:text-[#fff] hover:sm:tracking-[-10px] ease-in duration-500 leading-[0.8] break-words'>FRONTEND</h2>
                    <span className='child relative transition-all ease-in-out duration-500 font-body w-[25%] h-[10px] bg-[#777]'></span>
                    <h2 className='w-full hover:text-[#fff] font-body leading-[0.8] tracking-[-7px] sm:tracking-[-10px] md:tracking-[-20px] hover:sm:tracking-[-10px] ease-in duration-500 sm:ml-auto break-words overflow-[wrap]'>DEVELOPER</h2>
                </div>
                <Marquee />
                <div className='flex flex-col px-3 md:px-5 sm:flex-row my-5 font-body gap-3'>
                    <Link spy={true} smooth={true} offset={0} duration={500} to='work'>
                    <button className='button font-body opacity-50'>
                        VIEW PORTFOLIO
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 md:w-6 md:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                        </svg>
                    </button>
                    </Link>
                    
                    <a href={pdf} target="_blank" rel="noopener noreferrer" className='button font-body'>
                        DOWNLOAD CV
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 md:w-6 md:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </a>
                </div>
            </div>
{/* 
            <div className='px-5 lg:px-0 lg:w-[80%] w-full top-20 lg:top-0 relative lg:mt-auto lg:left-20'>
                <img className='h-full w-full' src={Hero} alt="hero" />
            </div> */}

            <div className={pageIsVisible ? 'hidden' : 'flex opacity-50 animate-bounce gap-2 items-center absolute bottom-2 right-4'}>
                <p className='text-base font-body lg:text-xl'>scroll down</p>
             <HiChevronDoubleDown className='text-base lg:text-xl'/>
            </div>
        </div>
   
  )
}
