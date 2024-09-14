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
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-[#19469D] px-4 py-[10vh]"
    >
      <h2 className='text-4xl font-extrabold text-center mb-8 text-gray-100 tracking-wider font-poppins animate-bounce'>
        <span className="uppercase">
          Pricing
        </span>
      </h2>
      <div className={`flex justify-center w-full transition-all duration-1000 ${isVisible ? 'animate-slideUp' : ''}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-[4.5rem] gap-5 px-4 lg:px-6 max-w-screen-xl">
          {/* Basic Plan */}
          <div className="relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out md:w-[50vw] lg:w-full cursor-pointer">
            <div className="p-6 md:p-8 flex flex-col h-full">
              <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-800">
                Basic Plan
              </h3>
              <p className="mt-2 md:mt-4 text-center text-gray-600">
                Best for individuals starting out
              </p>
              <div className="mt-4 md:mt-6 flex justify-center">
                <span className="text-3xl md:text-4xl font-bold">$19</span>
                <span className="text-sm md:text-lg font-medium text-gray-600 self-end">
                  /month
                </span>
              </div>
              <ul className="mt-4 md:mt-6 space-y-2 md:space-y-4 flex-grow">
                <li className="flex items-center text-gray-700">
                  <span className="mr-1 md:mr-2 text-green-500">✔️</span> 5 GB Storage
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-1 md:mr-2 text-green-500">✔️</span> Unlimited Bandwidth
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-1 md:mr-2 text-green-500">✔️</span> 24/7 Support
                </li>
              </ul>
              <button className="mt-4 md:mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg py-2 md:py-3 font-semibold hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out">
                Choose Plan
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out w-full  cursor-pointer">
            <div className="p-6 md:p-8 flex flex-col h-full">
              <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-800">
                Pro Plan
              </h3>
              <p className="mt-2 md:mt-4 text-center text-gray-600">
                Best for growing teams
              </p>
              <div className="mt-4 md:mt-6 flex justify-center">
                <span className="text-3xl md:text-4xl font-bold">$49</span>
                <span className="text-sm md:text-lg font-medium text-gray-600 self-end">
                  /month
                </span>
              </div>
              <ul className="mt-4 md:mt-6 space-y-2 md:space-y-4 flex-grow">
                <li className="flex items-center text-gray-700">
                  <span className="mr-1 md:mr-2 text-green-500">✔️</span> 50 GB Storage
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-1 md:mr-2 text-green-500">✔️</span> Unlimited Bandwidth
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-1 md:mr-2 text-green-500">✔️</span> 24/7 Priority Support
                </li>
              </ul>
              <button className="mt-4 md:mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg py-2 md:py-3 font-semibold hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out">
                Choose Plan
              </button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out w-full  cursor-pointer">
            <div className="p-6 md:p-8 flex flex-col h-full">
              <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-800">
                Premium Plan
              </h3>
              <p className="mt-2 md:mt-4 text-center text-gray-600">
                Best for large businesses
              </p>
              <div className="mt-4 md:mt-6 flex justify-center">
                <span className="text-3xl md:text-4xl font-bold">$99</span>
                <span className="text-sm md:text-lg font-medium text-gray-600 self-end">
                  /month
                </span>
              </div>
              <ul className="mt-4 md:mt-6 space-y-2 md:space-y-4 flex-grow">
                <li className="flex items-center text-gray-700">
                  <span className="mr-1 md:mr-2 text-green-500">✔️</span> 200 GB Storage
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-1 md:mr-2 text-green-500">✔️</span> Unlimited Bandwidth
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-1 md:mr-2 text-green-500">✔️</span> 24/7 Dedicated Support
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
