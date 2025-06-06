import { createBrowserRouter } from "react-router";
import { Layout } from "../components/layout";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Cadastro } from "../pages/Cadastro";
import { Detalhes } from "../pages/Detalhes";
import { NewCar } from "../pages/NewCar";
import { Painel } from "../pages/Painel";
import { Private } from "../components/Private";



const routes = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },

            {
                path: '/detalhes',
                element: <Detalhes />
            },

            {
                path: '/painel',
                element: <Private><Painel /></Private>
            },

            {
                path: '/cadastrarVeiculo',
                element: <Private><NewCar /></Private>
            },

        ]

    },

    {
        path: '/login',
        element: <Login />
    },

    {
        path: '/cadastrarUsuario',
        element: <Cadastro />
    }
])

export default routes