import { createContext, useState } from "react";
import { signInWithRedirect } from "firebase/auth";

import { auth, provider } from "../config/firebase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = async () => {
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  const valueToShare = {
    currentUser,
    setCurrentUser,
    handleLogin,
  };

  return (
    <AuthContext.Provider value={valueToShare}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
