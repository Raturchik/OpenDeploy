import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "../services/firebase/firebase";

export const PrivateRoute = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    console.log(user);

    return user?.uid ? <Outlet /> : <Navigate to="auth" replace />;
};
