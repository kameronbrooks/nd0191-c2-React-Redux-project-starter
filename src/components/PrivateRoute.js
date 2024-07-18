import React from 'react';
import { Route, useLocation, Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {

  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const location = useLocation();

  // Redirect to login if not logged in
  return (
    <>
      {
        (!isLoggedIn) ? (
          <Navigate to="/login" state={{path: location.pathname}} />
        ) : (
          children
        )
      }
    </>
  );
  
};

export default PrivateRoute;