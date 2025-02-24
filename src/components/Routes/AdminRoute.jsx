import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { Spinner } from '../ui/Spinner';

const AdminRoute = ({ children }) => {
    const { user, loading, isAdmin } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    if (user && isAdmin) {
        return children;
    }

    // Update the path from /login to /sign-in
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
};

export default AdminRoute;