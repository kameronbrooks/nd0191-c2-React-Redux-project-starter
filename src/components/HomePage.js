import React from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../Context';


const HomePage = ({store}) => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  )
}


const ConnectedHomePage = () => {

  return (
    <Context.Consumer>
      {
        (store) => {

          if (!store.getState().isLoggedIn) {
            return <Navigate to="/login" />
          }

          return <HomePage store={store}/>
        }
      }
    </Context.Consumer>
  );
};

export default ConnectedHomePage;