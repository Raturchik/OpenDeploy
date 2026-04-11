import { useState, type ReactNode } from "react";
import { AuthorizationContext } from "./AuthorizationContext";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { auth, githubProvider, signInWithGooglePopup } from "../services/firebase/firebase";
import { useNavigate } from "react-router";

interface AppContextProps {
    children: ReactNode;
}

type FormData = {
    email: string;
    password: string;
    username: string;
    copyPassword: string;
};

export function AuthorizationContextProvider({ children }: AppContextProps) {
    const [isLogin, setIsLogin] = useState(() => Boolean(auth.currentUser?.uid));
    const [error, setError] = useState("");

    const navigate = useNavigate();

    function signUpWithCredentials(userData: FormData): void {
        if (userData.password !== userData.copyPassword) {
            setError("Your passwords do not match.");
            return;
        }
        createUserWithEmailAndPassword(auth, userData.email, userData.password)
            .then((user) => {
                console.log(user);
                setError("");
                console.log(user);
                if (user.user) {
                    setIsLogin(true);
                }
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                setError("Unexpected error ocured");
            });
    }
    function signInWithCredentials(userData: FormData) {
        signInWithEmailAndPassword(auth, userData.email, userData.password)
            .then((user) => {
                console.log(user);
                setError("");

                console.log(user);
                if (user.user) {
                    setIsLogin(true);
                }

                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                setError("Unexpected error ocured");
            });
    }

    async function signInWithGoogle() {
        try {
            const responce = await signInWithGooglePopup();
            console.log(responce);
            if (responce.user) {
                setIsLogin(true);
            }
        } catch (error) {
            console.error(error);
            console.log("Unexpected error ocured");
        }
        await navigate("/");
    }

    const signInWithGitHub = async () => {
        try {
            const responce = await signInWithPopup(auth, githubProvider);
            console.log(responce);
            if (responce.user) {
                setIsLogin(true);
            }
            navigate("/");
        } catch (error) {
            console.error(error);
            setError("Unexpected error ocured");
        }
    };

    const logout = async () => {
        console.log("Выход выполнен успешно");
        try {
            await signOut(auth);
            setIsLogin(false);
            navigate("auth"); // Перенаправление на страницу входа
        } catch (error) {
            console.error("Ошибка при выходе:", error);
        }
    };
    const value = {
        error,
        setError,
        isLogin,
        setIsLogin,
        signUpWithCredentials,
        signInWithCredentials,
        signInWithGoogle,
        signInWithGitHub,
        logout,
    };
    return <AuthorizationContext.Provider value={value}>{children}</AuthorizationContext.Provider>;
}
