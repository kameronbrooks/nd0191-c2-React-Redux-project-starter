import { useSelector, useDispatch } from 'react-redux';
import { Container, Table, Spinner } from 'react-bootstrap';
import { useEffect } from 'react';
import { fetchUsers } from '../actions/userActions';

const LeaderboardTable = () => {

  const users = useSelector(state => state.users.users);
  const isLoading = useSelector(state => state.users.loading);

  // Check if users already exist in the store
  // If they do, we can render the table immediately 
  // while we wait for the API to respond
  const alreadyHasUsers = Object.keys(users).length > 0;

  const dispatch = useDispatch();

  const objectKeyCount = (obj) => Object.keys(obj).length;

  const calculateScore = (user) => {
    return user.questions.length + objectKeyCount(user.answers);
  }

  useEffect(() => {
    fetchUsers(dispatch);
  },[])


  return (!isLoading || alreadyHasUsers) ? (
    <Table striped bordered >
      <thead>
        <tr>
          <th>#</th>
          <th>User</th>
          <th>Questions Asked</th>
          <th>Questions Answered</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.values(users)
          .sort((a, b) => calculateScore(b) - calculateScore(a))
          .map((user, index) => (
            <tr key={user.id}>
              <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.questions.length}</td>
              <td>{Object.keys(user.answers).length}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  ) : (
    <div className="spinner-container">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}

export default LeaderboardTable;

