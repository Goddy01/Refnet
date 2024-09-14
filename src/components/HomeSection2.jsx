import React, { useEffect, useRef } from 'react';
import Image from '/src/assets/images/refer3.svg';

export default function HomeSection2() {
  const stepRefs = [useRef(), useRef(), useRef()]; // Refs for each step box

  useEffect(() => {
    const observerOptions = {
      root: null, // Uses the viewport as the root
      threshold: 0.01, // Trigger when 1% of the element is in view
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the animation class when the element enters the viewport
          entry.target.classList.add('animate-slide-in-right', 'opacity-100');
        } else {
          // Remove the animation class when the element leaves the viewport
          entry.target.classList.remove('animate-slide-in-right', 'opacity-100');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each step box
    stepRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      // Clean up the observer when the component is unmounted
      stepRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div
      className='min-h-screen p-4 pt-[3rem] flex flex-col items-center justify-center py-[8vh]'
      style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='container mx-auto relative z-10'>
        <h2 className='text-4xl font-bold text-center mb-8 lg:text-gray-50 tracking-wider font-poppins animate-bounce sm:text-blue-500 text-blue-700 text-nowrap'>
          HOW IT WORKS
        </h2>
        <div className='grid grid-cols-1 gap-8 px-4 lg:px-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-gray-900'>
          {/* Step 1 */}
          <div
            ref={stepRefs[0]}
            className='opacity-0 flex flex-col items-center border border-gray-300 rounded-lg p-6 bg-gray-50 font-semi-bold sm:h-auto lg:h-[45vh] transition-transform transform duration-300 ease-in-out hover:scale-110 hover:shadow-3xl hover:bg-blue-50 hover:cursor-pointer'
          >
            <div className='w-20 h-20 flex items-center justify-center rounded-full mb-4 border-1 bg-blue-600 text-white hover:bg-blue-800 transition-colors duration-300'>
              <span className='text-4xl font-bold'>1</span>
            </div>
            <p className='text-center'>
              Begin by understanding the core problem or challenge you're facing.
              This initial step involves gathering relevant information, setting
              goals, and establishing a clear plan to address the issue at hand.
              Detailed research and proper planning are crucial for setting a
              solid foundation.
            </p>
          </div>

          {/* Step 2 */}
          <div
            ref={stepRefs[1]}
            className='opacity-0 flex flex-col items-center border border-gray-300 rounded-lg p-6 bg-gray-50 font-semi-bold sm:h-auto lg:h-[45vh] transition-transform transform duration-300 ease-in-out hover:scale-110 hover:shadow-3xl hover:bg-blue-50 hover:cursor-pointer'
          >
            <div className='w-20 h-20 flex items-center justify-center rounded-full mb-4 border-1 bg-blue-600 text-white hover:bg-teal-700 transition-colors duration-300'>
              <span className='text-4xl font-bold'>2</span>
            </div>
            <p className='text-center'>
              The next step involves executing the plan created in the first
              stage. This includes implementing strategies, coordinating with
              team members, and continuously monitoring progress. Adjustments and
              refinements are made based on real-time feedback and evolving
              circumstances.
            </p>
          </div>

          {/* Step 3 */}
          <div
            ref={stepRefs[2]}
            className='opacity-0 flex flex-col items-center border border-gray-300 rounded-lg p-6 bg-gray-50 font-semi-bold sm:h-auto lg:h-[45vh] transition-transform transform duration-300 ease-in-out hover:scale-110 hover:shadow-3xl hover:bg-blue-50 hover:cursor-pointer'
          >
            <div className='w-20 h-20 flex items-center justify-center rounded-full mb-4 border-1 bg-blue-600 text-white hover:bg-indigo-700 transition-colors duration-300'>
              <span className='text-4xl font-bold'>3</span>
            </div>
            <p className='text-center'>
              Conclude the process by evaluating the results and outcomes. This
              final stage involves analyzing data, gathering feedback, and
              assessing whether the initial goals were achieved. Lessons learned
              are documented, and strategies are refined for future projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
