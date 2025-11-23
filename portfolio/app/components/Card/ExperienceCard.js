import React from 'react'

const formatDateRange = (start, end) => {
  return `${start} - ${end}`
}

const TechBadge = ({ children, isFramework = false, image }) => (
    <span 
        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors 
            ${isFramework 
                ? 'bg-[#90d0ed]/20 text-[#2563EB]' 
                : 'bg-gray-100 text-gray-700' 
            }`
        }
    >
        {image && (
            <Image 
                src={image} 
                alt={children} 
                width={16} 
                height={16} 
                className="w-4 h-4 mr-1.5"
            />
        )}
        {children}
    </span>
);

const TECH_MAP = {};
const getTechDetails = (title) => TECH_MAP[title] || { name: title, isFramework: false, image: null };

const ExperienceCard = ({ experience, cardIndex }) => {

    const animationDelay = `${cardIndex * 0.1}s`;

    const allTech = [
      ...(experience.programLanguagesUsed || [])
          .map(title => ({ 
              ...getTechDetails(title), 
              isFramework: false       
          })),
      
      ...(experience.frameWorksUsed || [])
          .map(title => ({ 
              ...getTechDetails(title), 
              isFramework: true         
          })),
  ].filter(item => item.name);
    
    const descriptionList = (experience.description && experience.description.length > 0)
        ? experience.description.filter(p => p.trim() !== '')
        : ["Just a full time programmer :)"];

    return (
        <div className="flex relative pb-12 animate-fadeInSlideUp" style={{ animationDelay: animationDelay }}>
            
            <div className="w-10 absolute inset-0 flex items-start justify-center md:items-center md:flex-row">
                <div className={`h-full w-1 bg-gray-200 pointer-events-none ${experience.currentlyWorking ? 'bg-transparent' : ''}`}></div>
            </div>
            
            <div 
                className={`
                    flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10 transition-all duration-300
                    md:mt-0
                    ${experience.currentlyWorking 
                        ? 'bg-red-500 ring-4 ring-red-300/50 animate-pulse' // current job
                        : 'bg-[#90d0ed]' // past jobs
                    }
                `}
            >
                {experience.currentlyWorking ? (
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M16 20V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"></path>
                        <path d="M4 11h16"></path>
                        <path d="M12 2v20"></path>
                    </svg>
                ) : (
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                )}
            </div>

            <div className="flex-grow pl-4 md:pl-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    
                    {/* Duration */}
                    <p className="text-[#90d0ed] text-sm mb-2 font-semibold tracking-wider uppercase">
                        {formatDateRange(experience.dateStarted, experience.dateEnded)}
                    </p>

                    {/* Job Title and Company */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {experience.title}
                    </h3>
                    <p className="text-gray-600 text-base mb-4 font-medium">
                        {experience.company}
                    </p>

                    {/* Description / Achievements */}
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                        {descriptionList.map((point, index) => (
                            <li key={index} className="flex items-start">
                                <span className="mr-2 text-[#90d0ed] flex-shrink-0 mt-1">&bull;</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Technologies Used (Pills/Badges) */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 mt-4">
                        <span className="text-sm font-semibold text-gray-800 mr-2">Tech Stack:</span>
                        {allTech.map((tech, index) => (
                            <TechBadge 
                                key={index} 
                                isFramework={tech.isFramework}
                                image={tech.image} // 👈 Passes the icon/image source
                            >
                                {tech.name}
                            </TechBadge>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;