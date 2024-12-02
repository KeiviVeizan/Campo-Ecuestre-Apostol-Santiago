import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
function ProtectedRoute({allowedRole}) {
  const { loading, isAuthenticated,user } = useAuth();
  if (loading) return <h1>Loading...</h1>;
  if (!loading && !isAuthenticated) return <Navigate to="/login" replace />;
  if (!allowedRole.includes(user.role)) return <Navigate to="/notfound" replace />;
  return <Outlet />;
}

export default ProtectedRoute;
