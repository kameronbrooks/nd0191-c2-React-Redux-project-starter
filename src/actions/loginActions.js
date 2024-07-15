import * as API from "../_DATA";


export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const REQUEST_USER_LOGIN = 'REQUEST_USER_LOGIN';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

const _requestUserLogin = () => {
  return {
    type: REQUEST_USER_LOGIN
  }
}

const _loginUser = (user) => {
  return {
    type: LOGIN_USER,
    user
  }
}

const _logoutUser = () => {
  return {
    type: LOGOUT_USER
  }
}

const _loginFailed = () => {
  return {
    type: LOGIN_USER_ERROR
  }
}

export const userLoginRequest = async (username, password, dispatch) => {
  dispatch(_requestUserLogin());

  const response = await API._getUsers();

  // find the user with the given username and password
  const user = Object.values(response).find(user => user.id === username && user.password === password);

  // if the user is found, dispatch the loginUser action with the user
  if (user) {
    dispatch(_loginUser(user));
  } else {
    dispatch(_loginFailed());
  }
}

export function handleLogoutUser(dispatch) {
  dispatch(_logoutUser());
}