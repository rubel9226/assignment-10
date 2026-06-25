"use client";

import { createContext, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children, user, token='' }) => {

  const data = {
    user, 
    token
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUser = () => useContext(AuthContext);