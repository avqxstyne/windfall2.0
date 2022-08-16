import React, { useRef } from 'react'

/* const buttons = document.getElementsByClassName('dh-button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    buttons[i].classList.add("test")
  })
} */

const DailyHabitsMenu = () => {

  function buttonClick(event) {
    event.target.classList.add('dh-button-animation');

    fetch('http://localhost:5000/habits', {
      method: "POST",
      headers: {"Content-type": "application/json"},
    })
  }
 
  return (
    <div id='dailyhabitsmenu'>
        <div className='dh-habit'>
            <button className='dh-button hydration' onClick={(e) => {buttonClick(e)}}></button>
            <div>Drink 1 glass after waking</div>
        </div>
        <div className='dh-habit'>
            <button className='dh-button hydration' onClick={(e) => {buttonClick(e)}}></button>
            <div>Drink 6 glasses throughout day</div>
        </div>
        <div className='dh-habit'>
            <button className='dh-button exercise' onClick={(e) => {buttonClick(e)}} ></button>
            <div>exercise</div>
        </div>
    </div>
  )
}

export default DailyHabitsMenu