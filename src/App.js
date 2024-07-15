import logo from './logo.svg';
import './App.css';
import {Context} from './Context';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import LeaderboardPage from './components/LeaderboardPage';


const App = () => {
  console.log('App');
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
