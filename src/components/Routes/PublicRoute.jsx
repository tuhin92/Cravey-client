import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const PublicRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (user) {
        // Redirect to home if user is logged in
        return <Navigate to="/" replace />;
    }

    return children;
};

export default PublicRoute;