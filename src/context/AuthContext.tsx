
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Check if user is already logged in from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Failed to parse user from localStorage', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  // Mock login functionality (in a real app, you'd call an API)
  const login = async (email: string, password: string) => {
    try {
      // Simple validation
      if (!email || !password) {
        toast.error('Please provide both email and password');
        return false;
      }

      // Check if user exists in localStorage (from registered users)
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const matchedUser = registeredUsers.find(
        (u: any) => u.email === email && u.password === password
      );

      if (!matchedUser) {
        toast.error('Invalid credentials');
        return false;
      }

      // Create user object (omitting password)
      const loggedInUser = {
        id: matchedUser.id,
        name: matchedUser.name,
        email: matchedUser.email,
      };

      // Store in state and localStorage
      setUser(loggedInUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
      
      toast.success('Login successful!');
      return true;
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred during login');
      return false;
    }
  };

  // Mock register functionality
  const register = async (name: string, email: string, password: string) => {
    try {
      // Simple validation
      if (!name || !email || !password) {
        toast.error('Please fill in all fields');
        return false;
      }

      // Check if user already exists
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      if (registeredUsers.some((u: any) => u.email === email)) {
        toast.error('Email already registered');
        return false;
      }

      // Create new user
      const newUser = {
        id: `user-${Date.now()}`,
        name,
        email,
        password, // In a real app, NEVER store passwords in plain text
      };

      // Add to registered users
      registeredUsers.push(newUser);
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

      toast.success('Registration successful! Please login.');
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('An error occurred during registration');
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
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
