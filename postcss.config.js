export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}


import React, { useState } from 'react';

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  const toggleMenu = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 text-white p-4 z-50">
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
            className={`lg:flex lg:items-center lg:space-x-4 fixed inset-0 lg:relative lg:bg-transparent lg:opacity-100 transition-transform duration-300 ease-in-out transform ${showNav ? 'translate-x-0' : 'translate-x-full'} bg-blue-800 lg:bg-transparent lg:opacity-100 h-[20vh]`}
          >
            <div className="flex flex-col h-full">
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
              <ul className="flex space-x-4">
            <li>
                <a 
                  href="#about" 
                  className="gradient-hover px-3 py-2 rounded transition-colors duration-300"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#home" 
                  className="gradient-hover px-3 py-2 rounded transition-colors duration-300"
                >
                  Join Wait-list
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="gradient-hover px-3 py-2 rounded transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
