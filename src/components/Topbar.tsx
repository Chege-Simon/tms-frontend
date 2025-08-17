import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/api';

interface User {
  name: string;
}

function Topbar() {
  const { user, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      setAuth(null, null);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="bg-white shadow p-4 flex justify-between items-center fixed top-0 w-full z-10">
      <h1 className="text-xl font-bold">Transport Management System</h1>
      {user && (
        <div className="flex items-center">
          <span className="mr-4">{(user as User).name}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Topbar;