import { createBrowserRouter } from "react-router-dom"
import Concluido from "../paginas/cadastro/Concluido";
import DadosPessoais from "../paginas/cadastro/DadosPessoais";
import Interesses from "../paginas/cadastro/Interesses";
import LayoutBaseCadastro from "../paginas/cadastro/LayoutBaseCadastro";
import SelecaoCliente from "../paginas/cadastro/SelecaoCliente";
import LayoutBase from "../paginas/LayoutBase";
import PaginaInicial from "../paginas/PaginaInicial/PaginaInicial";
import Pagina404 from "../paginas/erros/Pagina404";
import Login from "../paginas/Login/Login";
import Perfil from "../paginas/area-logada/Perfil";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase />,
        ErrorBoundary: Pagina404,
        children: [
            {
                path: "",
                element: <PaginaInicial />,
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "area-logada",
                children:[
                    {
                        path:'perfil',
                        element: <Perfil />
                    }
                ]
            },
            {
                path: "cadastro",
                element: <LayoutBaseCadastro />,
                children: 
                [
                    {
                        path: '',
                        element: <SelecaoCliente />
                    },
                    {
                        path: 'interesses',
                        element: <Interesses />
                    },
                    {
                        path: 'dados-pessoais',
                        element: <DadosPessoais />
                    },
                    {
                        path: 'concluido',
                        element: <Concluido />
                    }

                ]
            }
        ],
    },
]);
   