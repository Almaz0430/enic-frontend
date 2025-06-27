import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User, RegisterCredentials, UniversityRegisterCredentials } from '../shared/api/auth';
import { authApi } from '../shared/api/auth';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  registerUniversity: (credentials: UniversityRegisterCredentials) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const user = await authApi.getCurrentUser();
      setUser(user);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setError(null);
      const user = await authApi.login({ email, password });
      setUser(user);
    } catch (err) {
      setError('Неверный email или пароль');
      throw err;
    }
  };

  const register = async (credentials: RegisterCredentials) => {
    try {
      setError(null);
      const user = await authApi.register(credentials);
      setUser(user);
    } catch (err: any) {
      if (err.response?.data?.email) {
        setError('Пользователь с таким email уже существует');
      } else {
        setError('Ошибка при регистрации');
      }
      throw err;
    }
  };

  const registerUniversity = async (credentials: UniversityRegisterCredentials) => {
    try {
      setError(null);
      const user = await authApi.registerUniversity(credentials);
      setUser(user);
    } catch (err: any) {
      if (err.response?.data?.email) {
        setError('Пользователь с таким email уже существует');
      } else {
        setError('Ошибка при регистрации ВУЗа');
      }
      throw err;
    }
  };

  const logout = async () => {
    try {
      await authApi.logout();
      setUser(null);
    } catch (err) {
      setError('Ошибка при выходе из системы');
      throw err;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, register, registerUniversity, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 