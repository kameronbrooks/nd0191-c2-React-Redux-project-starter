import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { Context, Provider } from './Context';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import loginReducer from './reducers/loginReducer';
import questionsReducer from './reducers/questionsReducer';
import userReducer from './reducers/userReducer';

const store = createStore(
  combineReducers({ 
    login: loginReducer,
    questions: questionsReducer,
    users: userReducer
  })
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
