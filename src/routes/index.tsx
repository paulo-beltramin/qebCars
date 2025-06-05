import { createBrowserRouter } from "react-router";
import { Layout } from "../components/layout";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";



const routes = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },

        ]

    },

    {
        path: '/login',
        element: <Login />
    }
])

export default routes