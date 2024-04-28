import {Appbar} from "../layout/Appbar.tsx";
import {Link, Outlet, useLocation} from "react-router-dom";
import {FC} from "react";

interface AccountData {
    icon: string;
    label: string;
    active?: boolean;
    path?: string;
}

interface AccountSectionProps {
    data: AccountData[];
}

const AccountSection: FC<AccountSectionProps> = ({data}) => {
    const location = useLocation();

    return (
        <>
            {data.map((item, index) => {
                const isActive = location.pathname === item.path;

                return (
                    <div key={index}
                         className={'px-2 my-1'}>
                        <Link
                            to={item.path ?? '#'}
                            className={`
                            ${isActive && 'bg-slate-200 dark:bg-slate-600 font-bold'} ${!isActive && 'text-slate-400'}  transition duration-200 ease-in-out py-3.5 px-8 flex items-center gap-2 cursor-pointer hover:bg-slate-200 hover:dark:bg-slate-600 rounded-3xl`}>
                            <span className={`text-xl ${item.icon} ${!isActive && ' bg-slate-400'} `}></span>
                            {item.label}
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

export const DashboardLayout = () => {
    const accountSettings = [
        {
            icon: 'i-mdi-briefcase-search-outline',
            label: 'Jobs',
            path: '/dashboard'
        },
        {
            icon: 'i-mdi-user-circle-outline',
            label: 'Profile',
            path: '/dashboard/profile'
        }
    ]

    const createJob = [
        {
            icon: 'i-mdi-list-box-outline',
            label: 'My jobs',
            path: '/dashboard/my-jobs'
        },
        {
            icon: 'i-mdi-list-box-outline',
            label: 'My applications',
            path: '/dashboard/my-applications'
        },
        {
            icon: 'i-mdi-plus-circle-outline',
            label: 'Create Job',
            path: '/dashboard/create-job'
        },

    ]

    return (
        <>
            <div className={'lg:sticky lg:top-0 lg:left-0 w-full z-50 backdrop-blur-xl ease-in duration-100'}>
                <Appbar/>
            </div>

            <div className={'hidden lg:block lg:w-64 bg-slate-50 dark:bg-slate-700 dark:text-white lg:h-full lg:fixed lg:py-4'}>
                <AccountSection data={accountSettings}/>
                <div className={'my-4 mx-4 dark:bg-slate-600 bg-slate-200'}
                     style={{
                         height: 1,
                     }}/>

                <AccountSection data={createJob}/>
            </div>

            <div className={'px-4 lg:ml-72 py-8 lg:mr-10 '}>
                <Outlet/>
            </div>


        </>
    )
}