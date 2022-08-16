import React, { useEffect } from 'react'

const DailyHabits = () => {

 
  return (
    <div id='weekly'>
        <div className='weekly-habit' id='hydration'>
          <p>Hydration</p>
          <div className='weekly-habit-number'>0/2</div>
          <div className='weekly-habit-desc'>Drinking enough water per day</div>
        </div>
        <div className='weekly-habit'>
          <p>Exercise</p>
          <div className='weekly-habit-number'>0/3</div>
          <div className='weekly-habit-desc'>Increasing physical strength</div>
        </div>
        <div className='weekly-habit'>
          <p>Mental</p>
          <div className='weekly-habit-number'>0/4</div>
          <div className='weekly-habit-desc'>Controlling your mind</div>
        </div>

        <div className='weekly-habit'>
          <p>Eating</p>
          <div className='weekly-habit-number'>0/2</div>
          <div className='weekly-habit-desc'>Eat well</div>
        </div>
        <div className='weekly-habit'>
        <p>Working</p>
          <div className='weekly-habit-number'>0/2</div>
          <div className='weekly-habit-desc'>Working hard everyday</div>
        </div>
        <div className='weekly-habit'>
        <p>Social</p>
          <div className='weekly-habit-number'>0/3</div>
          <div className='weekly-habit-desc'>Leveling up social skills</div>
        </div>

    </div>
  )
}

export default DailyHabits