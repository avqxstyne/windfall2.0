import React, { useRef, useEffect, useState } from 'react'

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

  const hydration = useRef();

  const [name, setName] = useState('');

  useEffect(() => {
    hydration.current = document.getElementsByClassName("hydration").length;
    document.getElementById("hydration").innerText = `0/${hydration.current}`;
  })
  
  const addTask = () => {
    let habit = document.createElement('div');
    let selected = document.getElementById("select");
    habit.setAttribute(`className`, `dh-habit ${selected.value}`)
    habit.innerText = `${name}`

    document.getElementById("dailyhabitsmenu").appendChild(habit)
  }
 
  return (
    <div id='dailyhabitsmenu'>
        <div className='new-task'>
          <h3>Add a habit</h3>
          <div className='new-task-form'>
            <input className='new-task-input' 
              placeholder='Task name'
              onChange={(e) => {
                setName(e.target.value)}}
            ></input>
            <select id='select'>
              <option disabled selected >Category:</option>
              <option value="hydration">Hydration</option>
              <option value="exercise">Exercise</option>
              <option value="eating">Eating</option>
              <option value="working">Working</option>
              <option value="mental">Mental</option>
              <option value="social">Social</option>
            </select>
            <button id='new-task-button' onClick={() => {addTask()}}>Add a new task</button>
          </div>
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