import { Navigate } from "react-router-dom";

import useAuthContext from "../hooks/use-auth-context";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuthContext();

  if (!currentUser) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
};

export default PrivateRoute;
