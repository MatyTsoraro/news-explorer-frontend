import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children, loggedIn }) => {
  const navigate = useNavigate();

  if (!loggedIn) {
    navigate('/');
    return null;
  }

  return children;
};


export default ProtectedRoute;
