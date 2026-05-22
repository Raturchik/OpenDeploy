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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
                    <div className="h-7.5 w-7.5 bg-[#ffffff] rounded-full m-3.75 animate-[pulse0_1s_infinite]"></div>
                    <div className="h-7.5 w-7.5 bg-[#ffffff] rounded-full m-3.75 animate-[pulse1_1s_infinite]"></div>
                    <div className="h-7.5 w-7.5 bg-[#ffffff] rounded-full m-3.75 animate-[pulse2_1s_infinite]"></div>
                </div>
            </main>
        );
    }

    return user?.uid ? <Outlet /> : <Navigate to="/" replace />;
};
