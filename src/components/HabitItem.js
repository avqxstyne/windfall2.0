import React from 'react'

const HabitItem = () => {
  return (
    <div className='habit-item'>
        <div className='habit-item-remove'>-</div>
        <p className='habit-item-text'><div>Habit text</div></p>
        <div className='habit-item-check'>
        <span class="material-symbols-outlined">
          done
        </span>
        </div>
    </div>
  )
}

export default HabitItem