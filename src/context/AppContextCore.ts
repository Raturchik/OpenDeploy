import { createContext } from "react";

interface AppContextType {
    isLogin: boolean;
    setIsLogin: (value: boolean) => void;
    error: string;
    setError: (value: string) => void;
}

export const ContextProvider = createContext<AppContextType | null>(null);
