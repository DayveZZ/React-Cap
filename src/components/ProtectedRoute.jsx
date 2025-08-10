import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import AuthContext from "../contexts/AuthContext.js";

const ProtectedRoute = () => {
  // const { user } = useContext(AuthContext);
  const user = true;
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
