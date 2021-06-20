import React, { createContext, useContext, useState } from 'react';
import { auth, firebase } from '../../../config/firebase';

const AuthContext = createContext<{ currentUser: null | firebase.User }>({ currentUser: null });

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.FC }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

  auth.onAuthStateChanged((user) => {
    setCurrentUser(user);
  });

  const value = {
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
