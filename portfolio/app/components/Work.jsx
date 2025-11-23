import { workExperience } from '@/assets/assets'
import React, { useEffect, useRef, useState } from 'react'
import ExperienceCard from './Card/ExperienceCard'

const INITIAL_DISPLAY_COUNT = 1;
const ITEM_TO_LOAD = 1;

const Work = () => {

    const [visibleCount, setVisibleCount] = useState(INITIAL_DISPLAY_COUNT)
    const loadMoreRef = useRef(null)
    const sortedExperience = [...workExperience].reverse();
    const hasMoreToLoad = visibleCount < sortedExperience.length

    useEffect(() => {
        if (!hasMoreToLoad || !loadMoreRef.current) return
        
        const handleObserver = (entries) => {
            const target = entries[0]

            if (target.isIntersecting) {
                setVisibleCount(prevCount => Math.min(prevCount + ITEM_TO_LOAD, sortedExperience.length))
            }
        }

        const observer = new IntersectionObserver(handleObserver, { rootMargin: '500px', threshold: 0.1 })
    
        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current)
        }

        return () => {
            if (loadMoreRef.current) {
                observer.observe(loadMoreRef.current)
            }
        }
    }, [visibleCount, hasMoreToLoad])

    
   
    return (
    <section id='work' className="w-full h-screen px-[12%] py-10 scroll-mt-10" >
            <h2 className='text-center text-4xl md:text-5xl font-bold text-gray-900 mb-16 font-Ovo'>
                My <span className="text-[#90d0ed]">Work</span> History
            </h2>

            <div className="max-w-4xl mx-auto">
                {sortedExperience.slice(0, visibleCount).map((experience, index) => (
                    <React.Fragment key={index}>
                        <ExperienceCard 
                            experience={experience}
                            cardIndex={index}
                        />
                    
                        {index === visibleCount - 1 && hasMoreToLoad && (
                            <div ref={loadMoreRef} className="text-center py-8">
                                <p className="text-gray-500 italic">Loading more experiences...</p> 
                            </div>
                        )}
                    </React.Fragment>
                ))}
                
                {/* Optional: Message when all items are loaded */}
                {/* {!hasMoreToLoad && (
                    <div className="text-center py-8 text-gray-600">
                        <p>You've reached the end of my work history!</p>
                    </div>
                )} */}
            </div>
        </section>
    )
}

export default Work