import {Appbar} from "../layout/Appbar.tsx";
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import {FC} from "react";
import {useAuthInfo, useRedirectFunctions} from "@propelauth/react";
import {useUser} from "../../hooks/useUser.ts";
import {Alert, BottomNavigation, BottomNavigationAction} from "@mui/material";

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
    const {user} = useUser()
    const navigate = useNavigate()
    const accountSettings = [
        {
            icon: 'i-mdi-briefcase-search-outline',
            label: 'Researchs',
            path: '/dashboard'
        },
        {
            icon: 'i-mdi-user-circle-outline',
            label: 'Profile',
            path: '/dashboard/profile'
        }
    ]

    // 创建条件相关的选项
    const researchOptions = user && user.professor ? [
        {
            icon: 'i-mdi-list-box-outline',
            label: 'My Researches',
            path: '/dashboard/my-researches'
        },
        {
            icon: 'i-mdi-plus-circle-outline',
            label: 'Create Researches',
            path: '/dashboard/create-researches'
        },
    ] : [
        {
            icon: 'i-mdi-list-box-outline',
            label: 'My applications',
            path: '/dashboard/my-applications'
        }
    ];

    // 合并账户设置和条件相关的选项
    const createJob = [...researchOptions];


    const authInfo = useAuthInfo()
    const {redirectToLoginPage} = useRedirectFunctions()

    const {isProfileComplete, isUserLoading} = useUser();


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
                {authInfo.isLoggedIn ? (
                    <>
                        {!isUserLoading && !isProfileComplete && (
                            <Alert severity="error"
                                   className={'mb-2'}>
                                It is imperative that you complete
                                your <Link to={'/dashboard/profile'}
                                           className={'font-semibold'}>profile</Link> in order to proceed with any
                                further
                                action.
                            </Alert>
                        )}
                        <Outlet/>
                    </>
                ) : (
                    <div className={'flex'}>
                        <div
                            id="basic-button"
                            onClick={() => !authInfo.isLoggedIn && redirectToLoginPage()}
                            className={`
                            ${'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white'}
                            text-sm text-slate-500 cursor-pointer dark:bg-slate-700 dark:text-white rounded-3xl bg-slate-100 py-2 px-4`}>
                            <>
                                Please login
                            </>
                        </div>
                    </div>
                )}
            </div>

            <BottomNavigation
                showLabels
                className={'sticky bottom-0 lg:hidden border'}
            >
                {accountSettings.map((item, index) => (
                    <BottomNavigationAction
                        key={index}
                        label={item.label}
                        onClick={() => navigate(item.path)}
                        icon={<span className={`text-xl ${item.icon}`}></span>}
                    />
                ))}

                {createJob.map((item, index) => (
                    <BottomNavigationAction
                        key={index}
                        label={item.label}
                        onClick={() => navigate(item.path)}
                        icon={<span className={`text-xl ${item.icon}`}></span>}
                    />
                ))}
            </BottomNavigation>
        </>
    )
}