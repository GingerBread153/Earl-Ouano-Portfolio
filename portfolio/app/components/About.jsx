import { assets, languagesData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section id='about' className="w-full h-screen px-[12%] py-15 scroll-mt-10">
        <h2 className='text-center items-center justify-center text-4xl font-bold mb-12 font-Ovo'>About Me</h2>
        <div className='flex flex-col md:flex-row items-center md:items-start justify-center gap-60 max-w-6xl mx-auto'>
            <div className='flex flex-col items-center md:items-start text-center md:text-left max-w-lg'>
                <Image src={assets.default_image} alt='default_image' height={350} width={350} />
                <div>
                    Results-driven Software Engineer with over 2 years of experience in full-stack
                    development using C#, ASP.NET, JavaScript, Blazor, and Telerik. Skilled in designing and
                    maintaining scalable web systems, improving application performance, and implementing
                    automated testing. Certified Entry-Level JavaScript Programmer (JSE-40-01) with strong
                    analytical, communication, and problem-solving skills.
                </div>
            </div>
              
            {/* RIGHT SIDE — TECH ICONS IN CIRCLE */}
            <div className="relative w-72 h-72 md:w-80 md:h-80">

            {/* CIRCLE BORDER (optional, for design) */}
            <div className="absolute "></div>
            {languagesData.map((icon, index) => (
                <div
                key={index}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                    transform: `rotate(${index * (360 / 8)}deg) translate(9rem) rotate(-${index * (360 / 8)}deg)`
                }}
                >
                <Image src={icon} alt="tech_icon" width={60} height={60} />
                </div>
            ))}

            </div>
        </div>
    </section>
  )
}

export default About