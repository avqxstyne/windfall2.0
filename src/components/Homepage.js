import React from 'react';
import Habits from './Habits';
import Navbar from './Navbar';
import NoFapTracker from './NoFapTracker';

const Homepage = ({ nfConfigured, setNfConfigured }) => {
  return (
    <div className='homepage'> 
      <Navbar displayLinks={true} />
      <NoFapTracker />
      <Habits />
    </div>
  )
}

export default Homepage;