import React from 'react';
import HeroBackground from '../../assets/hero-background.svg'; // Make sure to place your image here

const Hero = () => {
    return (
        <div className=" relative flex flex-col rounded-[9.6px] overflow-hidden">
            <div
                className="relative h-[85vh] flex items-center text-white"
                style={{
                    backgroundImage: `url(${HeroBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Keyframe Animations */}
                <style>
                    {`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .fade-in-scale {
          animation: fadeInScale 1s ease-out forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }
      `}
                </style>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 max-w-2xl px-6 md:px-10 lg:px-16 space-y-5">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight fade-in-up delay-200">
                        Tirth
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-extrabold fade-in-up delay-400">
                        Construction Company.
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl font-medium opacity-95 leading-relaxed fade-in-up delay-600">
                        Turning Your Visions into Enduring Realities.
                    </p>
                    <p className="text-base md:text-lg font-light opacity-85 fade-in-up delay-800">
                        Partnering with You to Build the Future, with Unwavering Quality and Timely Delivery.
                    </p>
                    <button className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                        Explore Our Projects
                    </button>

                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-[#A9A8A8] text-black p-6 md:p-10 leading-relaxed text-sm md:text-base">
                <p>
                    We are Tirth Construction Co., dedicated to making your construction dreams come true! Overwhelmed with too many options? We offer you support, advice, and customized solutions that will amaze you with their thoroughness and thoughtfulness.
                </p>
                <p className="mt-4">
                    At Tirth Construction Co., our builders are more than consultants, they are fellow dreamers with a passion to help you build your vision. With more than 85 years of combined experience, you can be sure we are devoted to finding the best solutions for your construction plans.
                </p>
            </div>
        </div>

    );
};

export default Hero;