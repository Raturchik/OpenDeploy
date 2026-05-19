import { Outlet } from "react-router";
import { Header, Footer } from "../components";

export const RootLayout = () => {
    return (
        <div className="min-h-screen w-full flex flex-col">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};
