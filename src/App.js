import './scss/app.scss';
import './scss/loginPage.scss';
import './scss/animations.scss'
import LoginPage from './components/LoginPage';
import Homepage from './components/Homepage';

function App() {  
  switch (window.location.pathname) {
    case '/windfall2.0/':
      return (
        <LoginPage />
      )
    case '/windfall2.0/home/':
      return (
        <Homepage />
      )
  }
}

export default App;
