import React, { useState } from 'react';

export default function Header(props) {
  const {toggleModal, closeModal,  isModalOpen, setIsModalOpen, toggleMenu, showNav,  handleSubmit, email,setEmail, isSubmitted, setIsSubmitted} = props

  return (
    <div>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 text-white p-4 bg-[#19469D] z-50 w-full">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-[23px] font-bold gradient-text">Refnet</h1>
          <button
            className="lg:hidden px-3 py-2 text-gray-200 hover:text-gray-400 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={showNav ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
          <nav
            className={`lg:flex lg:items-center lg:space-x-4 fixed top-0 right-0 h-[100vh] lg:h-auto bg-[#2C56A5] lg:bg-transparent lg:opacity-100 transition-transform duration-300 ease-in-out transform ${showNav ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 lg:relative lg:flex lg:flex-row lg:space-x-4 lg:w-[50vw] w-[50vw] px-4`}
          >
            <button
              className="text-white p-4 self-end lg:hidden"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="flex flex-col items-center justify-center lg:flex-row lg:space-x-4 space-y-[2.3rem] lg:space-y-0 w-full lg:w-auto">
            <li>
                <a
                    href="#pricing"
                    className="relative px-3 py-2 rounded transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    onClick={toggleMenu}
                >
                    Pricing
                </a>
                </li>

              <li>
                <a
                  href="#how-it-works"
                  className="relative px-3 py-2 rounded transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  onClick={toggleMenu}
                >
                  How It Works
                </a>
              </li>
              {/* <li>
                <a
                  href="#contact"
                  className="relative px-3 py-2 rounded transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  Contact
                </a>
              </li> */}

              <li className='lg:absolute lg:right-0'>
                <a
                  href="#home"
                  className="gradient-hover px-1 py-2 rounded transition-colors duration-300 waitlist-btn flex flex-row" onClick={toggleModal}
                >
                  Join the Waitlist
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
