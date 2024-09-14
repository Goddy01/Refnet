import React from 'react';
import backgroundImage from '/src/assets/images/ref-bg-pic5.webp';

export default function HomeSection1() {
  return (
    <div className="relative min-h-screen w-full mt-9">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay Content */}
      <div className="absolute top-[25vh] flex flex-col w-full items-center text-center text-gray-50 z-10 px-4 md:px-8 lg:px-16">
        <h1 className="
            text-transparent 
            bg-clip-text 
            bg-gradient-to-r from-blue-200 via-teal-400 to-blue-600 
            text-5xl lg:text-6xl 
            font-bold mb-4
          ">
          Your Career Accelerator
        </h1>
        <p className="
            text-gray-50 font-semibold text-lg px-7
          ">
          Powering Careers Through Professional Referrals
        </p>
        <button className="gradient-hover px-6 py-3 rounded-lg transition-all duration-300 waitlist-btn mt-[1rem] text-lg font-semibold">
            JOIN THE WAITLIST
        </button>

      </div>
    </div>
  );
}
