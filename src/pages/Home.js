import Hero from '../assets/heroNew.png'
import { useTheme } from "../hooks/useTheme";
import { HiChevronDoubleDown } from 'react-icons/hi'
import { Link } from 'react-scroll';
import pdf from '../assets/resume.pdf'

export default function Home({ pageIsVisible }) {
    const { mode } = useTheme();
    

  return (
        <div id='home' className={`md:h-[100vh] pt-20 lg:pt-0 flex flex-col overflow-hidden ${mode}`}>
            <div className='mt-[1rem] md:mt-[8rem] flex flex-col lg:flex-row justify-evenly px-14 gap-3 md:gap-5 xl:gap-3 items-center'>
                <h2 className='text-center lg:text-start text-4xl font-body font-bold text-[#9a3a9a]'>I AM A <br /> WEB DEVELOPER</h2>
                <Link spy={true} smooth={true} offset={0} duration={500} to='work'>
                <button className='button'>
                    VIEW PORTFOLIO
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                </button>
                </Link>
                
                <a href={pdf} target="_blank" rel="noopener noreferrer" className='button'>
                    DOWNLOAD CV
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </a>
            </div>

            <div className='px-5 lg:px-0 lg:w-[80%] w-full top-20 lg:top-0 relative lg:mt-auto lg:left-20'>
                <img className='h-full w-full' src={Hero} alt="hero" />
            </div>

            <div className={pageIsVisible ? 'hidden' : 'hidden md:flex opacity-50 animate-bounce gap-2 items-center absolute bottom-6 right-4'}>
                <p className='text-xl'>scroll down</p>
             <HiChevronDoubleDown className='text-xl'/>
            </div>
        </div>
   
  )
}
