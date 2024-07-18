import logo from './logo.svg';
import './App.css';
import {Context} from './Context';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import LeaderboardPage from './components/LeaderboardPage';
import QuestionPage from './components/QuestionPage';
import NewQuestionPage from './components/NewQuestionPage';
import PrivateRoute from './components/PrivateRoute';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          
          <Route path="/" element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          } />
          <Route path="/leaderboard" element={
            <PrivateRoute>
              <LeaderboardPage />
            </PrivateRoute>
          } />
          <Route path="/questions/:id" element={
            <PrivateRoute>
              <QuestionPage />
            </PrivateRoute>
          } />
          <Route path="/questions/new" element={
            <PrivateRoute>
              <NewQuestionPage />
            </PrivateRoute>
          } />

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
