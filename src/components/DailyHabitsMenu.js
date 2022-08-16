import React from 'react'

const DailyHabitsMenu = () => {
  return (
    <div id='dailyhabitsmenu'>
        <div className='dh-habit'>
            <button className='dh-button' ></button>
            <div>Drink 1 glass after waking</div>
        </div>
        <div className='dh-habit'>
            <button className='dh-button'></button>
            <div>Drink 6 glasses throughout day</div>
        </div>
        <div className='dh-habit'>
            <button className='dh-button'>o</button>
            <div>exercise</div>
        </div>
    </div>
  )
}

export default DailyHabitsMenu