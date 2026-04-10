import { createContext, type ReactNode } from "react";

const ContextProvider = createContext(null);

interface AppContextProps {
    children: ReactNode;
}

export function AppContext({ children }: AppContextProps) {
    return <ContextProvider.Provider value={null}>{children}</ContextProvider.Provider>;
}
