import { createContext, useContext, useMemo, useState } from "react";

import { tokenStorage } from "../utils/tokenStorage";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => tokenStorage.getUser());
  const [token, setToken] = useState(() => tokenStorage.getToken());

  const login = ({ token: authToken, user: userData }) => {
    tokenStorage.setToken(authToken);
    tokenStorage.setUser(userData);
    setToken(authToken);
    setUser(userData);
  };

  const updateUser = (userData) => {
    tokenStorage.setUser(userData);
    setUser(userData);
  };

  const logout = () => {
    tokenStorage.clear();
    setToken(null);
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated: Boolean(token),
      login,
      updateUser,
      logout
    }),
    [user, token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};
