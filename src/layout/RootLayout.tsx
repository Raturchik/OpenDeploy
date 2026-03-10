import { Outlet } from "react-router";
import { Header, Footer } from "../components";

export const RootLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};
