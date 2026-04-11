import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthorizationContextProvider } from "./context/AuthorizationContext.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <AuthorizationContextProvider>
            <StrictMode>
                <App />
            </StrictMode>
        </AuthorizationContextProvider>
    </BrowserRouter>,
);
