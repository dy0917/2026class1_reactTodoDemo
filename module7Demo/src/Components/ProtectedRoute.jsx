import { useContext } from "react";

import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
// wrap around logged-in user only routes to protect them
export default function ProtectedRoute({ redirectPath = "/", children }) {
  const { currentUser } = useContext(UserContext);
  if (!currentUser.email) {
    return <Navigate to={redirectPath} replace />;
  }
  // works for both nested and standalone routes
  return children ? children : <Outlet />;
}
