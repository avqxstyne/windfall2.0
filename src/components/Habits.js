import React from 'react';
import HabitItem from './HabitItem';

const Habits = () => {
  
  return (
    <div id='habits'>
        <div className='habits-tracker'>
          <HabitItem />
          <HabitItem />
        </div>
        <div className='habits-tracker'>
          <HabitItem />
          <HabitItem />
        </div>
    </div>
  )
}

export default Habits