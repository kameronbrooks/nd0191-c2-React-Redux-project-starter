import React from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../Context';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Navbar from './Navbar';



const LeaderboardPage = () => {

  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />
  }

  return (
    <div>
      <Navbar />
      <Container>
        <h1>Leaderboard</h1>
        <p>Welcome to the home page!</p>
      </Container>
    </div>
  )
};

export default LeaderboardPage;