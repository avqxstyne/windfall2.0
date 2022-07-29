import './App.css';
import './LoginPage.css';
import { useState } from 'react';
import LoginPage from './components/LoginPage';
import Homepage from './components/Homepage';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [nfConfigured, setNfConfigured] = useState(false);

  

  console.log(localStorage.id);

  return (
    <div className="App">

      
      {loggedIn ? (
        <Homepage nfConfigured={nfConfigured} setNfConfigured={setNfConfigured}/>
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
