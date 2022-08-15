import './scss/App.scss';
import './scss/LoginPage.scss';
import './scss/Habits.scss';
import LoginPage from './components/LoginPage';
import Homepage from './components/Homepage';

function App() {
  console.log(localStorage);
  return (    
        <div className="App"> 

          {localStorage.logged ? (
            <Homepage />
          ) : (
            <LoginPage />
          )}
          
        </div>
  ); 
}

export default App;
