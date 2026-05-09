import { Route, Routes } from "react-router";
import { RootLayout } from "./layout/RootLayout";
import { HomePage, AuthorisationPage, AddBuild } from "./pages";
import { PrivateRoute } from "./layout/PrivateRoute";
import { CardPage } from "./pages/CardPage";

const App = () => {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route element={<PrivateRoute />} path="/">
                    <Route element={<HomePage />} index />
                    <Route element={<AddBuild />} path="add" />
                    <Route element={<CardPage />} path="card/:id" />
                </Route>
            </Route>
            <Route element={<AuthorisationPage />} path="auth" />
        </Routes>
    );
};

export default App;
