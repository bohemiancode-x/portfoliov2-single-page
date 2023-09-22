import Emmanuel from '../assets/emmanuel.jpg'
import { navitems } from '../data/navItems'
import { Link } from 'react-scroll'

export default function Mobilenav({ nav, toggleNav}) {
  return (
    <div className={nav ? 'mobilenav translate-x-[0rem] ease-out transition opacity-100 duration-[600ms]' : 'mobilenav translate-x-[-120rem] transition ease-in duration-500'}>
            <div className='py-8 mx-6 backdrop-blur-2xl bg-body border-[1px] border-[#777]'>
                <div className='flex justify-center items-center gap-2'>
                    <div className=''>
                        <img className='rounded-full h-12' src={Emmanuel} alt="img" />
                    </div>
                    <h2 className='text-center text-[#7d7979] font-body font-semibold text-md'>Emmanuel Adisa</h2>  
                </div>
                    
                    <div className='flex flex-col gap-4 text-sm dark:text-[#7d7979] text-[black] mt-8 items-center'>
                        {navitems.map((nav) => (
                                <Link onClick={(e) => toggleNav(e)} key={nav.number} className='font-body cursor-pointer hover:opacity-50' activeClass='active' spy={true} smooth={true} offset={0} duration={500} to={nav.path}>
                                    {nav.text}
                                </Link>
                            ))}
                     </div>

            </div>
                     <div className='mt-[60%] flex flex-col items-center w-full opacity-50'>
                        <p className='font-body text-[10px]'>&#169; Copyright 2023.</p>
                        <p className='font-body text-[10px]'>All rights reserved.<br /> BohemianCode-x.</p>
                    </div>
        </div>
  )
}
