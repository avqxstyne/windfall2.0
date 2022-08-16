import React from 'react';
import Navbar from './Navbar';
import NoFapTracker from './NoFapTracker';
import DailyHabits from './DailyHabits';
import DailyHabitsMenu from './DailyHabitsMenu';

const Homepage = () => {
  return (
    <div className='homepage'> 
      <Navbar displayLinks={true} />
      <div id='homepage-container'>
        <DailyHabits />
        <DailyHabitsMenu />
        <NoFapTracker />
      </div>
    </div>
  )
}

export default Homepage;