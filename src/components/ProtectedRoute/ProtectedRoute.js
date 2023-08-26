import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children, loggedIn, ...props }) => {
  const navigate = useNavigate();

  if (!loggedIn) {
    navigate('/');
    return null;
  }

  return (
      <Route {...props}>
        {children}
      </Route>
  );
};

export default ProtectedRoute;
