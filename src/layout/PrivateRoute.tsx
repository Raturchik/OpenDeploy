import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthorizationContext } from "../context/AuthorizationContext";

export const PrivateRoute = () => {
    const context = useContext(AuthorizationContext);

    if (!context) {
        throw new Error("PrivateRoute must be used within AuthorizationContextProvider");
    }
    const { user, isAuthReady } = context;

    if (!isAuthReady) {
        return (
            <main className="mx-auto w-[90%] h-[calc(100vh-200px)] flex items-center justify-center">
                <p>Loading...</p>
            </main>
        );
    }

    return user?.uid ? <Outlet /> : <Navigate to="/auth" replace />;
};
