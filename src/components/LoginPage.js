import { Context } from '../Context';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import {userLoginRequest} from '../actions/loginActions';

import {useState, useContext} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  const user = useSelector(state => state.login.user);
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const loginError = useSelector(state => state.login.loginError);
  const loginErrorMessage = useSelector(state => state.login.loginErrorMessage);
  const loading = useSelector(state => state.login.loading);

  const dispatch = useDispatch();


  const handleSubmit = (event) => { 
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    event.preventDefault();
    userLoginRequest(username, password, dispatch).then(()=> {
      setValidated(true);
    })
  }

  if (isLoggedIn) {
    return <Navigate to='/' />
  }

  return (
    <div>
      <h1>Login Page</h1>
      <Container>
        <Form className='login-form' noValidate validated={validated} onSubmit={handleSubmit}>
          <h3>Login</h3>
          <hr />
          <InputGroup className='mb-3' hasValidation>
            <InputGroup.Text>Login</InputGroup.Text>
            <Form.Control
              required
              placeholder='Username'
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)}
              }
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className='mb-3' hasValidation>
            <InputGroup.Text>Password</InputGroup.Text>
            <Form.Control
              required
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)}
              }
            />
            <Form.Control.Feedback type="invalid">
              Please choose a password.
            </Form.Control.Feedback>
          </InputGroup>
          {loginError && <Alert variant='danger'>{loginErrorMessage}</Alert>}
          <hr />
          {loading && <Spinner animation='border' />}
          {!loading && <Button
            className='ms-auto'
            variant='dark'
            type='submit'
          >Login</Button>}
          
        </Form>
        <br />
        <div className='hint-text'>
          Use <strong>tylermcginnis</strong> as the username and <strong>abc321</strong> for the password
        </div>
      </Container>
    </div>
  );
}


export default LoginPage;