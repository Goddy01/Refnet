import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-[#19469D] text-white text-center py-4 font-semibold">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Built by <a href='https://toshirothe3rd.vercel.app/' className="font-bold hover:text-blue-300">Toshiro</a>
      </p>
    </footer>
  )
}
