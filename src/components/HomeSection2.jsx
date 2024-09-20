import React, { useEffect, useRef } from 'react';
import Image from '/src/assets/images/refer2.svg';

export default function HomeSection2() {
  const stepRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()]; // Refs for each step box

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
    <section
      id='how-it-works'
      className='min-h-screen px-4 flex flex-col items-center justify-center py-[10vh]'
      
    >
      <div className='container mx-auto relative z-10'>
        <h2 className='text-4xl font-extrabold text-center mb-8 text-blue-600 tracking-wider font-poppins animate-bounce text-nowrap'>
          HOW IT WORKS
        </h2>
        <div className='grid grid-cols-1 gap-[8rem] px-4 lg:px-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 text-gray-900'>
          {/* Professionals Section */}
          <div className='flex flex-col items-center gap-11'>
            <h3 className='text-2xl font-semibold text-blue-500'>For Professionals</h3>
            {/* Step 1 for Professionals */}
            <div
              ref={stepRefs[0]}
              className='opacity-0 flex flex-col items-center border border-gray-300 rounded-lg p-6 bg-gray-50 font-semi-bold sm:h-auto h-auto transition-transform transform duration-300 ease-in-out hover:scale-110 hover:shadow-3xl hover:bg-blue-50 hover:cursor-pointer'
            >
              <div className='w-20 h-20 flex items-center justify-center rounded-full mb-4 border-1 bg-blue-600 text-white hover:bg-blue-800 transition-colors duration-300'>
                <span className='text-4xl font-bold'>1</span>
              </div>
              <p className='text-center'>
              Know someone who’s a great fit for a job? Easily refer them to companies looking for talent.
              </p>
            </div>
            {/* Step 2 for Professionals */}
            <div
              ref={stepRefs[1]}
              className='opacity-0 flex flex-col items-center border border-gray-300 rounded-lg p-6 bg-gray-50 font-semi-bold sm:h-auto h-auto transition-transform transform duration-300 ease-in-out hover:scale-110 hover:shadow-3xl hover:bg-blue-50 hover:cursor-pointer'
            >
              <div className='w-20 h-20 flex items-center justify-center rounded-full mb-4 border-1 bg-blue-600 text-white hover:bg-teal-700 transition-colors duration-300'>
                <span className='text-4xl font-bold'>2</span>
              </div>
              <p className='text-center'>
              See how your referral is doing through every step of the process, from submission to interview.
              </p>
            </div>
            {/* Step 3 for Professionals */}
            <div
              ref={stepRefs[2]}
              className='opacity-0 flex flex-col items-center border border-gray-300 rounded-lg p-6 bg-gray-50 font-semi-bold sm:h-auto h-auto transition-transform transform duration-300 ease-in-out hover:scale-110 hover:shadow-3xl hover:bg-blue-50 hover:cursor-pointer'
            >
              <div className='w-20 h-20 flex items-center justify-center rounded-full mb-4 border-1 bg-blue-600 text-white hover:bg-indigo-700 transition-colors duration-300'>
                <span className='text-4xl font-bold'>3</span>
              </div>
              <p className='text-center'>
              When your referral gets hired, you’ll receive recognition and rewards for your contribution.
              </p>
            </div>
          </div>

          {/* Job Seekers Section */}
          <div className='flex flex-col items-center gap-11'>
            <h3 className='text-2xl font-semibold text-blue-500'>For Job Seekers</h3>
            {/* Step 1 for Job Seekers */}
            <div
              ref={stepRefs[3]}
              className='opacity-0 flex flex-col items-center border border-gray-300 rounded-lg p-6 bg-gray-50 font-semi-bold sm:h-auto h-auto transition-transform transform duration-300 ease-in-out hover:scale-110 hover:shadow-3xl hover:bg-blue-50 hover:cursor-pointer'
            >
              <div className='w-20 h-20 flex items-center justify-center rounded-full mb-4 border-1 bg-blue-600 text-white hover:bg-blue-800 transition-colors duration-300'>
                <span className='text-4xl font-bold'>1</span>
              </div>
              <p className='text-center'>
              Professionals in your industry can refer you directly to companies, giving you an edge in your job search.
              </p>
            </div>
            {/* Step 2 for Job Seekers */}
            <div
              ref={stepRefs[4]}
              className='opacity-0 flex flex-col items-center border border-gray-300 rounded-lg p-6 bg-gray-50 font-semi-bold sm:h-auto h-auto transition-transform transform duration-300 ease-in-out hover:scale-110 hover:shadow-3xl hover:bg-blue-50 hover:cursor-pointer'
            >
              <div className='w-20 h-20 flex items-center justify-center rounded-full mb-4 border-1 bg-blue-600 text-white hover:bg-teal-700 transition-colors duration-300'>
                <span className='text-4xl font-bold'>2</span>
              </div>
              <p className='text-center'>
              Follow the status of your application with real-time updates as you move through the process.
              </p>
            </div>
            {/* Step 3 for Job Seekers */}
            <div
              ref={stepRefs[5]}
              className='opacity-0 flex flex-col items-center border border-gray-300 rounded-lg p-6 bg-gray-50 font-semi-bold sm:h-auto h-auto transition-transform transform duration-300 ease-in-out hover:scale-110 hover:shadow-3xl hover:bg-blue-50 hover:cursor-pointer'
            >
              <div className='w-20 h-20 flex items-center justify-center rounded-full mb-4 border-1 bg-blue-600 text-white hover:bg-indigo-700 transition-colors duration-300'>
                <span className='text-4xl font-bold'>3</span>
              </div>
              <p className='text-center'>
              With the help of professionals backing your application, you’re one step closer to landing that dream role.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
