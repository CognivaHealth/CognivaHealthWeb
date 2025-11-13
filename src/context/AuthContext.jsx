import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('cogniva:user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (email, password) => {
    // Mock auth; in real app call API
    const u = { email, name: email.split('@')[0] };
    localStorage.setItem('cogniva:user', JSON.stringify(u));
    setUser(u);
    return u;
  };

  const signup = (name, email, password) => {
    // Mock: store then require login
    localStorage.setItem('cogniva:pendingUser', JSON.stringify({ name, email }));
    return true;
  };

  const logout = () => {
    localStorage.removeItem('cogniva:user');
    setUser(null);
  };

  const value = useMemo(() => ({ user, login, signup, logout }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
