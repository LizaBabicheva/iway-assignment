import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const authenticated = useSelector((state) => {
    return state.user.isAuthenticated;
  });
  if (!authenticated) {
    return <Navigate replace to="/login" />;
  }

  return children;
};
