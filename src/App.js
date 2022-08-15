import './scss/App.scss';
import './scss/LoginPage.scss';
import './scss/Habits.scss';
import LoginPage from './components/LoginPage';
import Homepage from './components/Homepage';
import { useEffect, useState } from 'react';

function App() {  
  return (    
        <div className="App"> 

          {localStorage.logged ? (
            <Homepage />
          ) : (
            <LoginPage setUpdate={setUpdate}/>
          )}
          
        </div>
  ); 
}

export default App;
