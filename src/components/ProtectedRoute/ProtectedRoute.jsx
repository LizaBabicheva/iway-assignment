import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  // const isAuthChecked = useSelector((state) => state.user.isAuthChecked);
  // const user = useSelector((state) => state.user.data);
  const authenticated = useSelector((state) => {
    return state.user.isAuthenticated;
  });
  // if (!isAuthChecked) {
  //   // return <Preloader />;
  //   return <p>Загружаем</p>;
  // }

  if (!authenticated) {
    return <Navigate replace to="/login" />;
  }

  return children;
};
