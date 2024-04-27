import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../components/layout/Layout.tsx";
import {Home} from "../pages/home/Home.tsx";

export const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            }
        ]
    },
])