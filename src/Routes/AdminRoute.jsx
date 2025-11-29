import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";

const AdminRoute = ({ children }) => {
  const { role, isLoading } = useRole();
  const { loading } = useAuth();

  if(loading || isLoading) {
    return <p>Loading....wait....</p>
  }

  if(role.role !== 'admin') {
    return <p>Forbidden...</p>
  }

  return children;
};

export default AdminRoute;
