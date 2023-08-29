// No need to import React in this case since it's not being used explicitly
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children, loggedIn }) => {
  const navigate = useNavigate();

  if (!loggedIn) {
    navigate('/');
    return null;
  }

  return children;
};

export default ProtectedRoute;
