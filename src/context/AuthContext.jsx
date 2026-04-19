import { createContext, useContext, useState, useEffect } from 'react';
import {
  getCurrentUser,
  setCurrentUser as persistUser,
  signIn as authSignIn,
  signOut as authSignOut,
  createAccount as authCreateAccount,
  setupDemoSession,
} from '../services/authService';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = getCurrentUser();
    if (stored) setUser(stored);
    setLoading(false);
  }, []);

  function signIn(username, password) {
    const result = authSignIn(username, password);
    if (result.success) {
      setUser(result.user);
      persistUser(result.user);
    }
    return result;
  }
  
  function signInDemo() {
    const result = setupDemoSession();
    if (result.success) {
      setUser(result.user);
      persistUser(result.user);
    }
    return result;
  }

  function createAccount(username, password) {
    const result = authCreateAccount(username, password);
    if (result.success) {
      setUser(result.user);
      persistUser(result.user);
    }
    return result;
  }

  function signOut() {
    authSignOut();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signInDemo, createAccount, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
