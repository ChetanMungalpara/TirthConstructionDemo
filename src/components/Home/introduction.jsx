import intro from '../../assets/introduction.svg';
import React from "react";


function Introduction() {
    return (
        
        <div className="relative w-full h-[85vh] overflow-hidden rounded-[9.6px_9.6px_0px_0px]">
            <style>
                {`
                @keyframes fadeInSlideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeInSlideUp {
                    animation: fadeInSlideUp 1s ease-out forwards;
                }
                .animate-delay-200 { animation-delay: 0.2s; }
                .animate-delay-400 { animation-delay: 0.4s; }
                .animate-delay-600 { animation-delay: 0.6s; }
                .animate-delay-800 { animation-delay: 0.8s; }
                `}
            </style>
            <img
                src={intro}
                alt="Construction Introduction"
                className='w-full h-[100%] absolute inset-0 object-cover'
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
            <div className='absolute top-1/2 -translate-y-1/2 
                            text-white text-left 
                            p-4 md:p-8 lg:p-12 
                            max-w-xl w-full 
                            space-y-4'>
                {/* Company Name */}
                <h1 className='text-4xl md:text-5xl lg:text-6xl 
                               font-extrabold leading-tight 
                               tracking-tight drop-shadow-lg'> 
                    Tirth
                </h1>
                <h1 className='text-4xl
                               font-extrabold leading-tight 
                               tracking-tight drop-shadow-lg'> 
                Construction Company.</h1>
                {/* Main Slogan/Tagline */}
                <p className='text-lg md:text-xl lg:text-2xl 
                              font-medium opacity-95 
                              leading-relaxed drop-shadow-md
                              animate-fadeInSlideUp animate-delay-600'>
                    Turning Your Visions into Enduring Realities.
                </p>

                {/* Sub-slogan/Value Proposition */}
                <p className='text-base md:text-lg 
                              font-light opacity-85 
                              drop-shadow-sm'> {/* Adjusted opacity, shadow */}
                    Partnering with You to Build the Future, with Unwavering Quality and Timely Delivery.
                </p>

                {/* Call to Action Button */}
                <button className='bg-white bg-opacity-90 hover:bg-opacity-100 
                                   text-gray-800 font-semibold 
                                   py-3 px-8 rounded-full 
                                   shadow-xl hover:shadow-2xl 
                                   transition duration-300 ease-in-out 
                                   mt-6' to="/">
                    Explore Our Projects
                </button>
            </div>
        </div>
    );
}

export default Introduction;
