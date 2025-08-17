import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

interface Props {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: Props) {
  const { user, token } = useContext(AuthContext);

  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;