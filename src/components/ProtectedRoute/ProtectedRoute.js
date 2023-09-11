<<<<<<< HEAD
import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, loggedIn, ...props }) => {
  return (
    <Route {...props}>
      {loggedIn ? children : <Redirect exact to={"/"} />}
    </Route>
  );
=======
// No need to import React in this case since it's not being used explicitly
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children, loggedIn }) => {
  const navigate = useNavigate();

  if (!loggedIn) {
    navigate('/');
    return null;
  }

  return children;
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
};

export default ProtectedRoute;
