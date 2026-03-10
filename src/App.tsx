import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router";
import { RootLayout } from "./layout/RootLayout";
import { HomePage } from "./pages/HomePage";
import { AuthorisationPage } from "./pages/AuthorisationPage";
import { AddBuild } from "./pages/AddBuild";

const App = () => {
    const routes = createRoutesFromElements(
        <Route element={<RootLayout />} path="/">
            <Route element={<HomePage />} index />
            <Route element={<AuthorisationPage />} path="auth" />
            <Route element={<AddBuild />} path="add" />
        </Route>,
    );
    const router = createBrowserRouter(routes);
    return <RouterProvider router={router} />;
};

export default App;
