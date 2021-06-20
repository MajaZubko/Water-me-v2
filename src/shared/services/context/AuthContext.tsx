import React, { createContext, useContext, useState, useEffect, ReactChild, ReactPortal } from 'react';
import { noop } from 'lodash';
import { auth, firebase } from '../../../config/firebase';

type AuthContextType = {
  currentUser: null | firebase.User;
  loginWithGoogle: () => void;
  logOut: () => void;
};

const AuthContext = createContext<AuthContextType>({ currentUser: null, loginWithGoogle: noop, logOut: noop });

export const useAuth = () => {
  return useContext(AuthContext);
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const AuthProvider = ({
  children,
}: {
  children: boolean | {} | ReactChild | ReactPortal | null | undefined;
}) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const logOut = () => {
    auth.signOut();
  };

  const value = {
    currentUser,
    loginWithGoogle,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
