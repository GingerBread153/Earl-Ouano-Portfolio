import { workExperience } from '@/assets/assets'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import ExperienceCard from './Card/ExperienceCard'

const INITIAL_DISPLAY_COUNT = 2;
const ITEMS_TO_LOAD = 1;

const Work = () => {
    // 💡 STATE SETUP: Start with 1 visible item for the staggered reveal effect
    const [visibleCount, setVisibleCount] = useState(INITIAL_DISPLAY_COUNT);
    
    // 💡 REFS: Only need the ref for the Intersection Observer target
    const loadMoreRef = useRef(null); 
    
    // Data setup (Reverse chronological order)
    const sortedExperience = [...workExperience].reverse();
    const hasMoreToLoad = visibleCount < sortedExperience.length;

    // --- INTERSECTION OBSERVER LOGIC ---
    // This watches the last rendered element and loads more when it enters the viewport.
    useEffect(() => {
        // Only run if there are more items to load and the ref element exists
        if (!hasMoreToLoad || !loadMoreRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // If the observer target is intersecting (visible), load more items
                if (entries[0].isIntersecting) {
                    setVisibleCount(prevCount => 
                        Math.min(prevCount + ITEMS_TO_LOAD, sortedExperience.length)
                    );
                }
            },
            { threshold: 0.1 } // Load when 10% of the placeholder is visible
        );

        observer.observe(loadMoreRef.current);

        // Cleanup function
        return () => {
            if (loadMoreRef.current) {
                observer.unobserve(loadMoreRef.current);
            }
        };
    // Dependencies ensure the observer re-attaches to the newly rendered last item
    }, [hasMoreToLoad, sortedExperience.length, visibleCount]); 
    // --- END INTERSECTION OBSERVER LOGIC ---


    return (
        // 💡 STRUCTURE REVERTED: Standard section flow. Removed h-[300vh], sticky, and overflow.
        <section id='work' className="w-full px-[8%] py-16 bg-gray-50 scroll-mt-24 relative z-0">
            <h2 className='text-center text-4xl md:text-5xl font-bold text-gray-900 mb-16 font-Ovo'>
                My <span className="text-[#90d0ed]">Work</span> History
            </h2>

            <div className="max-w-4xl mx-auto">
                {/* Map only the visible portion, using cardIndex for staggered animation */}
                {sortedExperience.slice(0, visibleCount).map((experience, index) => (
                    <React.Fragment key={index}>
                        <ExperienceCard 
                            experience={experience} 
                            cardIndex={index}
                        />
                        
                        {/* 💡 The Load More Ref is attached to the last rendered card placeholder */}
                        {index === visibleCount - 1 && hasMoreToLoad && (
                            <div ref={loadMoreRef} className="text-center py-8">
                                <p className="text-gray-500 italic">Scroll down to reveal more experiences...</p> 
                            </div>
                        )}
                    </React.Fragment>
                ))}
                
                {/* Final Message */}
                {!hasMoreToLoad && (
                    <div className="text-center py-8 text-gray-600 font-semibold">
                        <p>End of Work History</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Work