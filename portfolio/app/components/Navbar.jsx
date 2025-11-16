import { assets } from '@/assets/assets'
import React, { useRef } from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <>
            <nav id='nav' className="sticky top-0 w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
                <a href="#top">
                    {/* <Image className="w-28 cursor-pointer mr-14" alt=""/> */}
                </a>

                <ul className="flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm bg-opacity-50 backdrop-blur-[2px]">
                    <li><a href='#head'>Home</a></li>
                    <li><a className='font-Ovo' href='#about'>About</a></li>
                    <li><a className='font-Ovo' href='#work'>Work</a></li>
                    <li><a className='font-Ovo' href='#contact'>Contact</a></li>
                </ul>

                <div className='flex item-center gap-4'>
                    <button>
                        <Image className='w-6' src={assets.moon_icon} alt='moon_icon' height={24} width={24}/>
                    </button>
                    {/* <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contact</a> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar
