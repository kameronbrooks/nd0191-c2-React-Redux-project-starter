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

const LoginPage = ({ loginState, dispatch }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  const user = useSelector(state => state.login.user);
  const isLoggedIn = useSelector(state => state.login.loggedin);


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


  return (
    <div>
      <h1>Login Page</h1>
      <Container>
        <Form className='login-form' noValidate validated={validated} onSubmit={handleSubmit}>

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
          {loginState.loginError && <Alert variant='danger'>{loginState.loginErrorMessage}</Alert>}
          <br />
          {loginState.loading && <Spinner animation='border' />}
          {!loginState.loading && <Button
            className='ms-auto'
            variant='dark'
            type='submit'
          >Login</Button>}
          
        </Form>
      </Container>
    </div>
  );
}

const ConnectedLoginPage = () => {
  return (
    <Context.Consumer>
      {
        (store) => {
          return <LoginPage loginState={store.getState().login} dispatch={store.dispatch} />
        }
      }
    </Context.Consumer>
  );
}


export default ConnectedLoginPage;