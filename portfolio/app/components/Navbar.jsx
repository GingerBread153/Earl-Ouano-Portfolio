import { assets } from '@/assets/assets'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const Navbar = () => {

    const [isScrollPastHeader, setIsScrollPastHeader] = useState(false)

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        
        const handleScroll = () => {
            const threshold = window.innerHeight
        
            if (window.scrollY > threshold - 1) {
                setIsScrollPastHeader(true)
            } else {
                setIsScrollPastHeader(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    },[isMenuOpen])
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenuAndScroll = (event, targetId) => {
        event.preventDefault()
        setIsMenuOpen(false)
        setTimeout(() => {
            document.getElementById(targetId)?.scrollIntoView({behavior: 'smooth'})
        }, 300)
    }

    return (
        <>
            <nav id='nav' className={`sticky top-0 w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ease-in-out ${isScrollPastHeader ? "bg-white/90 backdrop-blur-md shadow-md" : ""}`}>
                <a href="#head">
                    {/* <Image className="w-28 cursor-pointer mr-14" alt=""/> */}
                    Logo Name
                </a>

                <button onClick={toggleMenu}
                    className='text-2xl md:hidden z-60'
                    aria-expanded={isMenuOpen}
                    aria-controls='mobile-menu'>
                        {isMenuOpen ? '✕' : '☰'}
                </button>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-10 py-2 ${isScrollPastHeader ? "" : "bg-opacity-50 backdrop-blur-lg shadow-md"}`}>
                    <li><a href='#header'>Home</a></li>
                    <li><a className='font-Ovo' href='#about'>About</a></li>
                    <li><a className='font-Ovo' href='#work'>Work</a></li>
                    <li><a className='font-Ovo' href='#contact'>Contact</a></li>
                </ul>

                <div className='hidden md:flex item-center gap-4'>
                    <button>
                        <Image className='w-6' src={assets.moon_icon} alt='moon_icon' height={24} width={24}/>
                    </button>
                    {/* <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contact</a> */}
                </div>
            </nav>

            <div
                id="mobile-menu"
                className={`
                    md:hidden fixed inset-0 bg-white/70 backdrop-blur-lg z-40
                    flex flex-col items-center justify-center
                    transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
                `}
            >
                <ul className="flex flex-col space-y-8 text-center">
                    <li>
                        <a 
                            href='#header' 
                            onClick={(e) => closeMenuAndScroll(e, 'header')} 
                            className="block text-4xl font-bold text-gray-800 hover:text-[#90d0ed] transition-colors"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a 
                            href='#about' 
                            onClick={(e) => closeMenuAndScroll(e, 'about')} 
                            className="block text-4xl font-bold text-gray-800 hover:text-[#90d0ed] transition-colors"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a 
                            href='#work' 
                            onClick={(e) => closeMenuAndScroll(e, 'work')} 
                            className="block text-4xl font-bold text-gray-800 hover:text-[#90d0ed] transition-colors"
                        >
                            Work
                        </a>
                    </li>
                    <li>
                        <a 
                            href='#contact' 
                            onClick={(e) => closeMenuAndScroll(e, 'contact')} 
                            className="block text-4xl font-bold text-gray-800 hover:text-[#90d0ed] transition-colors"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                <div className="mt-12 flex items-center gap-6">
                    <button className='p-3 rounded-full hover:bg-gray-100 transition-colors'>
                        <Image className='w-8' src={assets.moon_icon} alt='moon_icon' height={32} width={32}/>
                    </button>
                </div>
            </div>
        </>

    )
}

export default Navbar
