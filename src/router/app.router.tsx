import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../components/layout/Layout.tsx";
import {Home} from "../pages/home/Home.tsx";
import {DashboardLayout} from "../components/dashboard/DashboardLayout.tsx";

export const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            }
        ],
    },
    {
        path: '/dashboard',
        element: <DashboardLayout/>,
    }
])