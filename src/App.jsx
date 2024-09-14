import React from 'react'
import HomeSection1 from './components/HomeSection1'
import HomeSection2 from './components/HomeSection2'
import Header from './components/Header'
import Pricing from './components/Pricing'


function App() {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <HomeSection1 />
      <HomeSection2 />
      <Pricing />
    </div>
  )
}

export default App
