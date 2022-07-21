import './App.css';
import './LoginPage.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import Homepage from './components/Homepage';


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  console.log(loggedIn)
  return (
    <div className="App">

      {/*
      {loggedIn ? (
        <Navbar />
      ) : (
        <LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      )} */}
      <Homepage />
      
    </div>
  ); 
}

export default App;
