import { useState, type ReactNode } from "react";
import { ContextProvider } from "./AppContextCore";

interface AppContextProps {
    children: ReactNode;
}

export function AppContextProvider({ children }: AppContextProps) {
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState("");

    return (
        <ContextProvider.Provider value={{ error, setError, isLogin, setIsLogin }}>
            {children}
        </ContextProvider.Provider>
    );
}
