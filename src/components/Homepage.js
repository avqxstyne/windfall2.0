import React from 'react';
import Habits from './Habits';
import Navbar from './Navbar';
import NoFapTracker from './NoFapTracker';
import WeeklyHabits from './WeeklyHabits';

const Homepage = ({ nfConfigured, setNfConfigured }) => {
  return (
    <div className='homepage'> 
      <Navbar displayLinks={true} />
      <WeeklyHabits />
      <NoFapTracker />
      {/* <Habits /> */}
    </div>
  )
}

export default Homepage;