import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router";
import { RootLayout } from "./layout/RootLayout";

function App() {
    const routes = createRoutesFromElements(
        <Route element={<RootLayout />} path="/"></Route>,
    );
    const router = createBrowserRouter(routes);
    return <RouterProvider router={router} />;
}

export default App;
