import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';

const LoginPage = ({ loggedIn, setLoggedIn }) => {

  /* States for the input fields */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister(e) {
    fetch('http://localhost:5000/register', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(res => {
      return res.json()
    }).then(resJson => {
      if (resJson.response === "success") {
        setLoggedIn(true);
        
      };
      console.log(loggedIn);
    })
    e.preventDefault();
  }

  function handleLogin(e) {
    fetch('http://localhost:5000/login', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(res => {
      return res.json()
    }).then(resJson => {
      if (resJson.response === "success") {
        setLoggedIn(true);

        localStorage.clear();
        localStorage.id = resJson.id; 
        
      };
    })
    e.preventDefault();
  }

  return (
    <div id='login-page'>
      <Navbar displayLinks={false} />
      
       
      <div id='login-page-main-island'>

        <div id='login-page-main-island-content1'>
          <h1>Welcome to Windfall</h1>
          <p>Level up your life</p>
          <form 
            id='login-page-main-island-form'
            method='POST'>

            <input 
              type="text" 
              required 
              placeholder='Username'
              onChange={(e) => {
                setUsername(e.target.value)
              }}
              name="username"
              value={username}
            ></input>

            <input 
              type="password" 
              required 
              placeholder='Password'
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              name="password"
              value={password}
            ></input>
            <div id='login-page-main-island-buttons'>
              <button 
                type='submit'
                onClick={(e) => {
                handleLogin(e)
                }}
              >Log In</button>
              <button 
                type='submit'
                onClick={(e) => {
                handleRegister(e)
              }}
              >Sign Up</button>
            </div>
          </form>
        </div>

        <div id='login-page-main-island-content2'>
          <h1>Glad to see you</h1>
          <p>
            This app was created for men and 
            women on, or joining, self improvement. 
            You can use it to manage your tasks 
             and keep yourself accountable.
          </p>
          <p>
            I encourage you to use it responsibly 
            and honestly, so that you will see the 
            maximum improvement within yourself. 
          </p>
          <p>
            Enjoy.
          </p>
        </div>

      </div>
    </div>
  
  )
}

export default LoginPage;