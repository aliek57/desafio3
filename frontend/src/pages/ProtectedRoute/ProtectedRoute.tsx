import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./ProtectedRoute.module.css";

type ProtectedRouteProps = {
    element: React.ReactElement;
};

export function ProtectedRoute({ element }: ProtectedRouteProps) {
    const { isAuthenticated, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className={styles.container}>
                <video className={styles.video} autoPlay loop muted>
                    <source src="../../assets/loading.mp4" type="video/mp4" />
                </video>
            </div>
        );
    }

    if (isAuthenticated) {
        return element;
    } else {
        return <Navigate to="/login" state={{ from: location }} />;
    }
}
