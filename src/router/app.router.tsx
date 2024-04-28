import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../components/layout/Layout.tsx";
import {Home} from "../pages/home/Home.tsx";
import {DashboardLayout} from "../components/dashboard/DashboardLayout.tsx";
import {Research} from "../pages/dashboard/job/Research.tsx";
import {Profile} from "../pages/dashboard/profile/Profile.tsx";
import {MyResearch} from "../pages/dashboard/job/MyResearch.tsx";
import {CreateResearch} from "../pages/dashboard/job/CreateResearch.tsx";
import {MyApplication} from "../pages/dashboard/job/MyApplication.tsx";
import {EditResearch} from "../pages/dashboard/job/EditResearch.tsx";

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
        children: [
            {
                path: '',
                element: <Research/>,
            },
            {
                path: 'profile',
                element: <Profile/>,
            },
            {
                path: 'my-researches',
                element: <MyResearch/>,
            },
            {
                path: 'edit/{id}',
                element: <EditResearch/>
            },
            {
                path: 'create-researches',
                element: <CreateResearch/>
            },
            {
                path: 'my-applications',
                element: <MyApplication/>
            }
        ],
    }
])