import React, { useEffect } from 'react';
import Navbar from './Navbar';
import NoFapTracker from './NoFapTracker';
import DailyHabits from './DailyHabits';
import DailyHabitsMenu from './DailyHabitsMenu';

const Homepage = () => {
  
  // useEffect(() => {
  //   fetch(`http://localhost:5000/gethabits?id=${localStorage.id}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   }).then(res => {
  //     return res.json()
  //   }).then(resJson => {
  //     document.getElementById('hydration').innerText = `${resJson.hydration}/2`
  //   })  
  // })

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