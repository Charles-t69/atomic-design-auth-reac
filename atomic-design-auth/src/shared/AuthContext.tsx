import { createContext, useState, useEffect, ReactNode } from 'react';
import { storage } from '../utils/storage';

interface AuthContextType {
  user: any;
  isAuthenticated: boolean;
  login: (userData: any) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(storage.getItem('user'));
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!user);

  const login = (userData: any) => {
    setUser(userData);
    setIsAuthenticated(true);
    storage.setItem('user', userData);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    storage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};