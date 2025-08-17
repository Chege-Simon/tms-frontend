import { createContext, useState, useEffect, ReactNode } from 'react';
import { getUser } from '../services/api';

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  setAuth: (user: User | null, token: string | null) => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  setAuth: () => {},
});

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('auth_token'));
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchUser() {
      if (token) {
        try {
          const response = await getUser();
          setUser(response.data as User);
        } catch (error) {
          setUser(null);
          setToken(null);
          localStorage.removeItem('auth_token');
        }
      }
      setLoading(false);
    }
    fetchUser();
  }, [token]);

  const setAuth = (newUser: User | null, newToken: string | null) => {
    setUser(newUser);
    setToken(newToken);
    if (newToken) {
      localStorage.setItem('auth_token', newToken);
    } else {
      localStorage.removeItem('auth_token');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, token, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}