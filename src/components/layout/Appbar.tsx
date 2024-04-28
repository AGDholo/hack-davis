import {useNavigate} from "react-router-dom";
import {useAuthInfo, useLogoutFunction, useRedirectFunctions} from "@propelauth/react";
import {useState} from "react";
import {Dialog} from "@mui/material";
import axios from "axios";
import {useResearch} from "../../hooks/useResearch.ts";
import {Research} from "../../hooks/useUser.ts";
import {JobCard} from "../job/Jobcard.tsx";

export const Appbar = () => {
    const navigate = useNavigate()
    const authInfo = useAuthInfo()
    const {redirectToLoginPage} = useRedirectFunctions()
    const logoutFunction = useLogoutFunction()
    const [openSearch, setOpenSearch] = useState(false)
    const {allResearches} = useResearch()
    const [query, setQuery] = useState('')
    const [result, setResult] = useState<Research[]>()

    const handleSearch = () => {
        const researchData = allResearches && allResearches.length > 0 && encodeURIComponent(JSON.stringify(allResearches));
        axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/research/search?need=${query}&research=${researchData}`)
            .then(res => {
                try {
                    const r = JSON.parse(res.data)
                    setResult(r)
                    console.log(r)
                } catch (e) {
                    console.error(e)
                }
            })
    }
    return (
        <>

            <div className={'p-1 text-center bg-black text-white'}>
                This website is intended for the demonstration of the Hack Davis software. All data displayed on the
                site is fictitious and does not represent any actual professors or students.
            </div>
            <div>
                <div className="border-b dark:border-b-slate-600 h-16 grid-cols-3 grid items-center px-4 lg:px-10">
                    <div className=" text-lg lg:text-2xl font-extrabold permanent-marker flex items-end dark:text-white cursor-pointer"
                         onClick={() => navigate('/')}>
                        {/*<img src={'/img.png'} className={'lg:h-10'}/> */}
                        GetResearch
                    </div>
                    <div className={' z-0'}>
                        <form className="w-full  hidden lg:block z-0">
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <span className="i-mdi-search w-4 h-4 text-slate-500 dark:text-slate-400"/>
                                </div>
                                <input
                                    readOnly
                                    onClick={() => setOpenSearch(true)}
                                    className="block w-full p-3 ps-10 text-sm text-slate-900  rounded-3xl bg-slate-50
transition-all duration-200 ease-linear
cursor-pointer
  focus:ring-2 focus:ring-black focus:outline-none focus:ring-opacity-30
 dark:bg-slate-700  dark:placeholder-slate-400 dark:text-white "
                                    id="default-search"
                                    placeholder={'AI research'}
                                    type="search"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="justify-self-end flex gap-2 items-center">
                        <div
                            id="basic-button"
                            onClick={() => !authInfo.isLoggedIn ? redirectToLoginPage() : navigate('/dashboard')}
                            className={`
                            ${'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white'}
                            text-sm text-slate-500 cursor-pointer dark:bg-slate-700 dark:text-white rounded-3xl bg-slate-100 py-2 px-4`}>
                            <>
                                <div className={`flex items-center`}>
                                    <span className="text-lg i-mdi-account-circle mr-1"/>
                                    {authInfo.isLoggedIn ? 'Dashboard' : 'Free to use'}
                                </div>
                            </>
                        </div>

                        {authInfo.isLoggedIn && (
                            <div
                                id="basic-button"
                                onClick={() => logoutFunction(true)}
                                className={`
                            ${''}
                            text-sm text-slate-500 cursor-pointer dark:bg-slate-700 dark:text-white rounded-3xl bg-slate-100 py-2 px-4`}>
                                <>
                                    <div className={`flex items-center`}>
                                        Logout
                                    </div>
                                </>
                            </div>
                        )}
                    </div>
                </div>

            </div>

            <Dialog open={openSearch}
                    fullWidth
                    onClose={() => setOpenSearch(false)}>
                <div className={'p-4'}>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <span className="i-mdi-search w-4 h-4 text-slate-500 dark:text-slate-400"/>
                        </div>
                        <input
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSearch();
                                }
                            }}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}

                            className="block w-full p-3 ps-10 text-sm text-slate-900  rounded-3xl bg-slate-50
transition-all duration-200 ease-linear
    focus:ring-2 focus:ring-black focus:outline-none focus:ring-opacity-30
    dark:bg-slate-700  dark:placeholder-slate-400 dark:text-white "
                            id="default-search"
                            placeholder={'AI research'}
                            type="text"
                        />
                    </div>

                    <div className={'pt-4 grid-cols-1 grid md:grid-cols-2'}>
                        {result && result.map((r, i) => (
                            <>
                                <JobCard key={i}
                                         description={r.description}
                                         title={r.title}
                                         company={r.univercity}
                                         salary={r.money.toString() ?? ''}
                                         type={r.isFullTime ? 'Full-time' : 'Part-time'}
                                         location={r.location}>

                                </JobCard>
                            </>
                        ))}
                    </div>
                </div>
            </Dialog>
        </>
    )
}