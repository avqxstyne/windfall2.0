import React, { useRef, useEffect } from 'react'

/* const buttons = document.getElementsByClassName('dh-button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    buttons[i].classList.add("test")
  })
} */

const DailyHabitsMenu = () => {

  function buttonClick(event, type) {
    event.target.classList.add('dh-button-animation');

    fetch('http://localhost:5000/habits', {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({
        id: localStorage.id,
        type: type
      })
    }).then(res => {
        return res.json()
    }).then(resJson => {
      console.log(resJson.bruh)
    })
  }

  const hydration = useRef()

  useEffect(() => {
    hydration.current = document.getElementsByClassName("hydration").length;
    document.getElementById("hydration").innerText = `0/${hydration.current}`;
  })
  
 
  return (
    <div id='dailyhabitsmenu'>
        <div className='dh-habit'>
            <button className='dh-button hydration' onClick={(e) => {buttonClick(e, "hydration")}}></button>
            <div>Drink 1 glass after waking</div>
        </div>
        <div className='dh-habit'>
            <button className='dh-button hydration' onClick={(e) => {buttonClick(e, "hydration")}}></button>
            <div>Drink 1 glass after waking</div>
        </div>
        <div className='dh-habit'>
            <button className='dh-button hydration' onClick={(e) => {buttonClick(e, "hydration")}}></button>
            <div>Drink 1 glass after waking</div>
        </div>
        <div className='dh-habit'>
            <button className='dh-button hydration' onClick={(e) => {buttonClick(e, "hydration")}}></button>
            <div>Drink 1 glass after waking</div>
        </div>
        
        
        
         
        <div className='dh-habit'>
            <button className='dh-button exercise' onClick={(e) => {buttonClick(e, "exercise")}} ></button>
            <div>exercise</div>
        </div>
    </div>
  )
}

export default DailyHabitsMenu