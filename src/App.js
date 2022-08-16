import './scss/App.scss';
import './scss/LoginPage.scss';
import LoginPage from './components/LoginPage';
import Homepage from './components/Homepage';

function App() {  
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
