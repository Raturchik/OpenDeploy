import type { User } from "firebase/auth";
import { createContext } from "react";

export type AuthCredentials = {
    email: string;
    password: string;
    username: string;
    copyPassword: string;
};
export type repoDataType = {
    name: string;
    description: string;
    avatar: string;
    userName: string;
    language: string;
    link: string;
};
interface AppContextType {
    repo: repoDataType | null;
    setRepo: (value: repoDataType | null) => void;
    error: string;
    setError: (value: string) => void;
    isAuthReady: boolean;
    user: User | null;
    setUser: (value: User | null) => void;
    signUpWithCredentials: (userData: AuthCredentials) => void;
    signInWithCredentials: (userData: AuthCredentials) => void;
    signInWithGoogle: () => void;
    signInWithGitHub: () => void;
    logout: () => void;
}

export const AuthorizationContext = createContext<AppContextType | null>(null);
