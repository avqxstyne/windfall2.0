import React from 'react';
import Navbar from './Navbar';
import NoFapTracker from './NoFapTracker';

const Homepage = () => {
  return (
    <div className='homepage'>
      <Navbar displayLinks={true} />
      <NoFapTracker />
    </div>
  )
}

export default Homepage;