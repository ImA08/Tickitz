import { useContext } from "react";
import { Navigate, useLocation } from "react-router";

import { userContext } from "../../contexts/userContext";

export function PrivateRoute({ children, redirectTo }) {
  const { user } = useContext(userContext);
  const location = useLocation();

  // case 1: belum login
  if (!user.email || !user.password) {
    return <Navigate to={redirectTo} replace state={{ from: location.pathname }} />;
  }


  return children;
}

// export default PrivateRoute;
