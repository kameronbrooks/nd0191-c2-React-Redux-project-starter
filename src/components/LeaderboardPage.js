import React from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../Context';
import { useSelector } from 'react-redux';
import { Container, Table} from 'react-bootstrap';
import Navbar from './Navbar';
import LeaderboardTable from './LeaderboardTable';



const LeaderboardPage = () => {

  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const user = useSelector(state => state.login.user);
  


  if (!isLoggedIn) {
    return <Navigate to="/login" />
  }

  return (
    <div>
      <Navbar />
      <Container>
        <h1>Leaderboard</h1>
        <hr />
          <div>
            <LeaderboardTable />
          </div>
        </Container>
    </div>
  )
};

export default LeaderboardPage;