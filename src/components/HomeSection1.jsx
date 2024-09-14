import React, { useState } from 'react';
import backgroundImage from '/src/assets/images/ref-bg-pic5.webp';

export default function HomeSection1(props) {
  const {toggleModal, closeModal,  isModalOpen, setIsModalOpen, handleSubmit, email,setEmail, isSubmitted, setIsSubmitted} = props

  return (
    <div className="relative min-h-screen w-full mt-9">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay Content */}
      <div className="absolute top-[25vh] flex flex-col w-full items-center text-center text-gray-50 z-10 px-4 md:px-8 lg:px-16">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-teal-400 to-blue-600 text-5xl lg:text-6xl font-bold mb-4">
          Your Career Accelerator
        </h1>
        <p className="text-gray-50 font-semibold text-lg px-7">
          Powering Careers Through Professional Referrals
        </p>
        <button
          className="gradient-hover px-6 py-3 rounded-lg transition-all duration-300 waitlist-btn mt-[1rem] text-lg font-semibold"
          onClick={toggleModal}
        >
          JOIN THE WAITLIST
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-lg relative transform transition-all duration-500 scale-95 opacity-100 animate-fadeInUp">
            {isSubmitted ? (
              // Success message after submission
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">
                  Thank You!
                </h2>
                <p className="text-gray-700 mb-6">
                  Your email has been submitted successfully. We will notify you when we launch!
                </p>
                <button
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            ) : (
              // Form to submit email
              <div>
                <h2 className="text-2xl font-semibold text-center mb-4">
                  Join the Waitlist
                </h2>
                <p className="text-gray-700 text-center mb-6">
                  Be the first to know when we launch!
                </p>

                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:border-teal-400"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Submit
                  </button>
                </form>

                <button
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors text-xl"
                  onClick={closeModal}
                >
                  &times;
                </button>
                <button
                  className="mt-4 w-full bg-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
