import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { combineReducers, createStore } from 'redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import loginReducer from './reducers/loginReducer';
import questionsReducer from './reducers/questionsReducer';
import userReducer from './reducers/userReducer';


// This function will render a component with a fresh store
const renderWithFreshStore = (ui) => {
  const store = createStore(
    combineReducers({ 
      login: loginReducer,
      questions: questionsReducer,
      users: userReducer
    })
  );
  return render(
    <Provider store={store}>
      {ui}
    </Provider>
  );
}

// ==================================
//        App Component Tests
// ==================================
describe('App', () => {
  it('redirects to the login page', () => {
    renderWithFreshStore(
        <App />
    );
  
    const h1Element = screen.getByText(/Login Page/i);
    expect(h1Element).toBeInTheDocument();
  });
});

describe('App', () => {
  it('redirects to the home page upon successful login', async () => {
    const {container} = renderWithFreshStore(
      <App />
    );
  
    const usernameInput = container.querySelector('#username-input');
    const passwordInput = container.querySelector('#password-input');

    fireEvent.change(usernameInput, { target: { value: 'zoshikanlu' } });
    fireEvent.change(passwordInput, { target: { value: 'pass246' } });

    const loginButton = container.querySelector('#login-button');

    fireEvent.submit(loginButton);

    await waitFor(() => expect(screen.getByText(/New Questions/i)).toBeInTheDocument(), {timeout: 30000});

  });
});

describe('App', () => {
  it('shows error on unsuccessful login', async () => {
    const {container} = renderWithFreshStore(
      <App />
    );
  
    const usernameInput = container.querySelector('#username-input');
    const passwordInput = container.querySelector('#password-input');

    fireEvent.change(usernameInput, { target: { value: 'zoshikanla' } });
    fireEvent.change(passwordInput, { target: { value: 'pass247' } });

    const loginButton = container.querySelector('#login-button');

    fireEvent.submit(loginButton);

    await waitFor(() => expect(screen.getByText(/Invalid username or password/i)).toBeInTheDocument(), {timeout: 30000});

  });
});

describe('App', () => {
  it('will match snapshot', () => {
    const {container} = renderWithFreshStore(
      <App />
    );
    expect(container).toMatchSnapshot();
  });
});
