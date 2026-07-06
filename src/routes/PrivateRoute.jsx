import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const PrivateRoute = ({ children }) => {

    const [user] = useContext(AuthContext);

    if (user && user.role === "admin") {
        return children;
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
            <p className="text-lg text-gray-600">You do not have permission to access this page.</p>
        </div>
    );
};

export default PrivateRoute;