// import { Outlet, Navigate } from "react-router";

// const ProtectedRoute = () => {
//   // const { user } = useContext(AuthContext);

//   const user = true;

//   return user ? <Outlet /> : <Navigate to="/signup" />;
// };

// export default ProtectedRoute;

import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const ProtectedRoute = () => {
  const { user } = useContext(AuthContext);

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
