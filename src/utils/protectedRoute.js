import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const ProtectedRoute = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
