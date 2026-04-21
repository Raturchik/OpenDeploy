import { useEffect, useState, type ReactNode } from "react";
import { AuthorizationContext } from "./AuthorizationContext";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    type User,
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
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState("");
    const [isAuthReady, setIsAuthReady] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            setUser(user);
            setIsAuthReady(true);
        });
        return () => unsubscribe();
    }, []);

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
                    setUser(user.user);
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
                    setUser(user.user);
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
                setUser(responce.user);
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
                setUser(responce.user);
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
            setUser(null);
            navigate("auth"); // Перенаправление на страницу входа
        } catch (error) {
            console.error("Ошибка при выходе:", error);
        }
    };
    const value = {
        error,
        setError,
        isAuthReady,
        user,
        setUser,
        signUpWithCredentials,
        signInWithCredentials,
        signInWithGoogle,
        signInWithGitHub,
        logout,
    };
    return <AuthorizationContext.Provider value={value}>{children}</AuthorizationContext.Provider>;
}
