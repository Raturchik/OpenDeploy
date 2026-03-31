import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import { RootLayout } from "./layout/RootLayout";
import { HomePage, AuthorisationPage, AddBuild } from "./pages";

const App = () => {
    const routes = createRoutesFromElements(
        <>
            <Route element={<RootLayout />} path="/">
                <Route element={<HomePage />} index />
                <Route element={<AddBuild />} path="add" />
            </Route>
            <Route element={<AuthorisationPage />} path="auth" />
        </>,
    );
    const router = createBrowserRouter(routes);
    return <RouterProvider router={router} />;
};

export default App;
