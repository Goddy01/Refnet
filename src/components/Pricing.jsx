import React, { useEffect, useState, useRef } from 'react';

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // Trigger animation when section is in the viewport
      },
      {
        threshold: 0.01, // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Clean up observer on unmount
      }
    };
  }, []);

  return (
    <section 
      id='pricing'
      ref={sectionRef}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-[#19469D] px-4 py-[7vh]"
    >
      <div className='mb-8 font-poppins animate-bounce text-gray-100'>
        <h2 className='text-4xl font-extrabold tracking-wider'>
          <span className="uppercase">
            Pricing
          </span>
        </h2>
        <p className='text-base font-normal tracking-normal text-center'>
            (for Job Seekers)
        </p>
      </div>
      <div className={`flex justify-center w-full transition-all duration-1000 ${isVisible ? 'animate-slideUp' : ''}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-4 lg:px-6 max-w-screen-xl">
          {/* Free Plan */}
          <div className="relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out w-auto cursor-pointer">
            <div className="p-6 md:p-8 flex flex-col h-full">
              <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-800">
                Free
              </h3>
              <div className="mt-4 md:mt-6 flex justify-center">
                <span className="text-3xl md:text-4xl font-bold">$0</span>
                <span className="text-sm md:text-lg font-medium text-gray-600 self-end">
                  /month
                </span>
              </div>
              <ul className="mt-4 md:mt-6 space-y-2 md:space-y-4 flex flex-col flex-grow items-center">
                <li className="flex items-center text-gray-700 text-center">
                  Free matching with Professionals
                </li>
                <li className="flex items-center text-gray-700 text-center">
                  Free AI-Powered Presonalized Job Referral Links
                </li>
              </ul>
              <button className="mt-4 md:mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg py-2 md:py-3 font-semibold hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out">
                Choose Plan
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out w-auto cursor-pointer">
            <div className="p-6 md:p-8 flex flex-col h-full">
              <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-800">
                Pro
              </h3>
              <div className="mt-4 md:mt-6 flex justify-center">
                <span className="text-3xl md:text-4xl font-bold">$29</span>
                <span className="text-sm md:text-lg font-medium text-gray-600 self-end">
                  /month
                </span>
              </div>
              <ul className="mt-4 md:mt-6 space-y-2 md:space-y-4 flex flex-col flex-grow items-center">
                <li className="flex items-center text-gray-700 text-center">
                  Everything included in Free
                </li>
                <li className="flex items-center text-gray-700 text-center">
                  Referral Tracking
                </li>
                <li className="flex items-center text-gray-700 text-center">
                  Chat Directly with Industry Professionals
                </li>
              </ul>
              <button className="mt-4 md:mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg py-2 md:py-3 font-semibold hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}