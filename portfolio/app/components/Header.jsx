import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header id='header' className="w-full h-screen bg-white-100 flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Hello, I'm <span className="text-[#90d0ed]">Earl</span>.
            </h1>
            <h2 className="text-2xl md:text-3xl font-light font-Ovo">
                I'm a Software Developer
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
                <a 
                    href="#nav"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#90d0ed] text-white text-lg hover:bg-[#7fc2df] transition-all shadow-md"
                >
                    My Works 
                    <Image 
                    src={assets.arrow_right_icon} 
                    alt="arrow_right_icon" 
                    width={20} 
                    height={20} 
                    />  
                </a>

                <a 
                    href="/Earl-Ouano_CV_2025.pdf" 
                    download
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black text-lg border border-black hover:bg-gray-200 transition-all shadow-md"
                >
                    My Resume
                    <Image 
                    src={assets.download_icon} 
                    alt="download_icon" 
                    width={20} 
                    height={20} 
                    />
                </a>

                </div>

        </div>
    </header>
  )
}

export default Header