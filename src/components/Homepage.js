import React from 'react';
import Navbar from './Navbar';
import NoFapTracker from './NoFapTracker';

const Homepage = ({ nfConfigured, setNfConfigured }) => {
  return (
    <div className='homepage'>
      <Navbar displayLinks={true} />
      <NoFapTracker nfConfigued={nfConfigured} setNfConfigured={setNfConfigured}/>
    </div>
  )
}

export default Homepage;