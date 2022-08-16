import React from 'react';
import Navbar from './Navbar';
import NoFapTracker from './NoFapTracker';
import DailyHabits from './DailyHabits';
import DailyHabitsMenu from './DailyHabitsMenu';

const Homepage = () => {
  
  useEffect(() => {
    fetch('https://localhost:5000/gethabits', {
      method: "POST",
      headers: {"Content-type": "application/json"},
    })
  })

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