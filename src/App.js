import './scss/App.scss';
import './scss/LoginPage.scss';
import './scss/Habits.scss';
import LoginPage from './components/LoginPage';
import Homepage from './components/Homepage';

function App() {  
  console.log(localStorage);
  setTimeout(()=>{
    console.log(localStorage);

  }, 100)
  switch (window.location.pathname) {
    case '/':
      return (
        <LoginPage />
      )
    case '/home/':
      return (
        <Homepage />
      )
  }
}

export default App;
