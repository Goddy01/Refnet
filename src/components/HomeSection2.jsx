import React from 'react';

export default function HomeSection2() {
  return (
    <div className='min-h-screen p-4 bg-gradient-to-r from-sky-700 to-blue-900 pt-[3rem] flex flex-col items-center justify-center'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-8 text-gray-100'>How It Works</h2>
        <div className='flex flex-col lg:flex-row lg:space-x-8 text-gray-900'>
          {/* Step 1 */}
          <div className='flex flex-col items-center mb-8 lg:mb-0 lg:w-1/3 border border-gray-300 rounded-lg p-6 bg-gray-50 font-semi-bold h-[50vh]'>
            <div className='w-20 h-20 flex items-center justify-center rounded-full mb-4 border-1'>
              <span className='text-4xl font-bold'>1</span>
            </div>
            <p className='text-center'>
              Begin by understanding the core problem or challenge you're facing. This initial step involves gathering relevant information, setting goals, and establishing a clear plan to address the issue at hand. Detailed research and proper planning are crucial for setting a solid foundation.
            </p>
          </div>
          {/* Step 2 */}
          <div className='flex flex-col items-center mb-8 lg:mb-0 lg:w-1/3 border border-gray-300 rounded-lg p-6 font-semi-bold bg-gray-50'>
            <div className='w-20 h-20 flex items-center justify-center rounded-full mb-4 border-1'>
              <span className='text-4xl font-bold'>2</span>
            </div>
            <p className='text-center'>
              The next step involves executing the plan created in the first stage. This includes implementing strategies, coordinating with team members, and continuously monitoring progress. Adjustments and refinements are made based on real-time feedback and evolving circumstances.
            </p>
          </div>
          {/* Step 3 */}
          <div className='flex flex-col items-center lg:w-1/3 border border-gray-300 rounded-lg p-6 font-semi-bold bg-gray-50'>
            <div className='w-20 h-20 flex items-center justify-center rounded-full mb-4 border-1'>
              <span className='text-4xl font-bold'>3</span>
            </div>
            <p className='text-center'>
              Conclude the process by evaluating the results and outcomes. This final stage involves analyzing data, gathering feedback, and assessing whether the initial goals were achieved. Lessons learned are documented, and strategies are refined for future projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
