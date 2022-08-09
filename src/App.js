import './scss/App.scss';
import './scss/LoginPage.scss';
import { createContext, useState } from 'react';
import LoginPage from './components/LoginPage';
import Homepage from './components/Homepage';

export const logContext = createContext()

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const nfConfigured = false;

  return (
    <logContext.Provider value={nfConfigured}>
    
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
      </logContext.Provider>
  ); 
}

export default App;
