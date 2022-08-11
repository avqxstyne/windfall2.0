import './scss/App.scss';
import './scss/LoginPage.scss';
import './scss/Habits.scss';
import { createContext, useState } from 'react';
import LoginPage from './components/LoginPage';
import Homepage from './components/Homepage';

export const logContext = createContext()

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (    
        <div className="App">

          {loggedIn ? (
            <Homepage />
          ) : (
            <LoginPage 
              loggedIn={loggedIn} 
              setLoggedIn={setLoggedIn}
            />
          )}
          
        </div>
  ); 
}

export default App;
