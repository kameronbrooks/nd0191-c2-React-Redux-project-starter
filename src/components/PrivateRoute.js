import React from 'react';
import { Route, redirect } from 'react-router-dom';
import { Context } from '../Context';

const PrivateRoute = ({ component: Component, ...rest }) => {

  const context = React.useContext(Context);
  const store = context.store;

  if (!store.getState('login').isLoggedIn) {
    return redirect('/login');
  }

  return (
    <Route
      {...rest}
      render={props =>
        <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;