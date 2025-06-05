import { createBrowserRouter } from "react-router";
import { Layout } from "../components/layout";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Cadastro } from "../pages/Cadastro";



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
    },

    {
        path: '/cadastro',
        element: <Cadastro />
    }
])

export default routes