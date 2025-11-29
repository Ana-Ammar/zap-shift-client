import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <p>Loading.....</p>;
  }

  if (!user) {
    return <Navigate to="/login" state={location?.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
