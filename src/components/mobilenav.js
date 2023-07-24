import Emmanuel from '../assets/emmanuel.jpg'
import { navitems } from '../data/navItems'
import { Link } from 'react-scroll'

export default function Mobilenav({ nav, toggleNav}) {
  return (
    <div className={nav ? 'mobilenav z-[101] translate-x-[0rem] ease-out transition opacity-100 duration-[600ms]' : 'mobilenav translate-x-[-120rem] z-[101] transition ease-in duration-500'}>
                <div className='flex flex-col items-center gap-2'>
                    <div>
                        <img className='rounded-full h-28 mt-20' src={Emmanuel} alt="img" />
                    </div>
                    <h2 className='text-center font-body font-bold text-2xl mt-3'>Emmanuel Adisa</h2>
                     
                </div>
                    <svg onClick={(e) => toggleNav(e)} className='absolute cursor-pointer top-8 right-8 h-10 w-10' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div className='flex flex-col gap-5 text-[#7d7979] dark:text-[black] mt-20 px-10 items-center'>
                        {navitems.map((nav) => (
                                <Link onClick={(e) => toggleNav(e)} key={nav.number} className='font-body cursor-pointer hover:opacity-50' activeClass='active' spy={true} smooth={true} offset={0} duration={500} to={nav.path}>
                                    {nav.text}
                                </Link>
                            ))}
                     </div>
                     <div className='mt-[30%] flex flex-col items-center w-full opacity-50'>
                        <p className='font-body text-sm'>&#169; Copyright 2023.</p>
                        <p className='font-body text-sm'>All rights reserved.<br /> BohemianCode-x.</p>
                    </div>
        </div>
  )
}
