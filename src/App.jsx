import React, {useState} from 'react'
import HomeSection1 from './components/HomeSection1'
import HomeSection2 from './components/HomeSection2'
import Header from './components/Header'
import Pricing from './components/Pricing'


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to toggle modal state
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (showNav === true) {
      toggleMenu()
    }
    setIsSubmitted(false); // Reset the success message when reopening the modal
  };

  // Function to explicitly close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setShowNav(!showNav);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Email submitted:", email); // Handle email submission (you can replace this with your logic)
    setIsSubmitted(true); // Show the success message after form submission
    setEmail(''); // Clear the input field
  };
  return (
    <div className='overflow-x-hidden'>
      <Header toggleModal={toggleModal} closeModal={closeModal} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} toggleMenu={toggleMenu} showNav={showNav} setShowNav={setShowNav} handleSubmit={handleSubmit} email={email} setEmail={setEmail} isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
      <HomeSection1 toggleModal={toggleModal} closeModal={closeModal} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} toggleMenu={toggleMenu}showNav={showNav} setShowNav={setShowNav} handleSubmit={handleSubmit} email={email} setEmail={setEmail} isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
      <HomeSection2 />
      <Pricing />
    </div>
  )
}

export default App
