import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../components/layout/Layout.tsx";
import {Home} from "../pages/home/Home.tsx";
import {DashboardLayout} from "../components/dashboard/DashboardLayout.tsx";
import {Job} from "../pages/dashboard/job/Job.tsx";
import {Profile} from "../pages/dashboard/profile/Profile.tsx";
import {MyJob} from "../pages/dashboard/job/MyJob.tsx";
import {CreateJob} from "../pages/dashboard/job/CreateJob.tsx";
import {MyApplication} from "../pages/dashboard/job/MyApplication.tsx";
import {EditJob} from "../pages/dashboard/job/EditJob.tsx";

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
                element: <Job/>,
            },
            {
                path: 'profile',
                element: <Profile/>,
            },
            {
                path: 'my-jobs',
                element: <MyJob/>,
            },
            {
                path: 'edit/{id}',
                element: <EditJob/>
            },
            {
                path: 'create-job',
                element: <CreateJob/>
            },
            {
                path: 'my-applications',
                element: <MyApplication/>
            }
        ],
    }
])