import logo from './logo.svg';
import './App.css';
import {Context} from './Context';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';


const App = () => {
  console.log('App');
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

const ConnectedApp = () => {
  console.log('ConnectedApp');
  return (
    <Context.Consumer>
      {
        (store) => {
          return <App store={store} />
        }
      }
    </Context.Consumer>
  );
}

export default App;
