import type { User } from "firebase/auth";
import { createContext } from "react";

interface AppContextType {
    isLogin: boolean;
    setIsLogin: (value: boolean) => void;
    error: string;
    setError: (value: string) => void;
    user: User;
    setUser: (value: User) => void;
}

export const AuthorizationContext = createContext<AppContextType | null>(null);
