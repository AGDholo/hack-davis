import {JobCard} from "../../components/job/Jobcard.tsx";
import {useAuthInfo, useRedirectFunctions} from "@propelauth/react";
import {useNavigate} from "react-router-dom";
import {Dialog, LinearProgress, Tooltip} from "@mui/material";
import {useResearch} from "../../hooks/useResearch.ts";
import {useState} from "react";
import {Research} from "../../hooks/useUser.ts";
import axios from "axios";

export const Home = () => {
    const [openSearch, setOpenSearch] = useState(false)
    const [query, setQuery] = useState('')
    const [result, setResult] = useState<Research[]>()
    const [isSearching, setIsSearching] = useState(false)
    const {allResearches} = useResearch()

    const handleSearch = () => {
        setIsSearching(true)
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
                setIsSearching(false)
            })
    }

    return (
        <>
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
                            disabled={isSearching}
                            className="block w-full p-3 ps-10 text-sm text-slate-900  rounded-3xl bg-slate-50
transition-all duration-200 ease-linear
    focus:ring-2 focus:ring-black focus:outline-none focus:ring-opacity-30
    dark:bg-slate-700  dark:placeholder-slate-400 dark:text-white "
                            id="default-search"
                            placeholder={'AI research'}
                            type="text"
                        />
                    </div>

                    {isSearching && (
                        <LinearProgress/>
                    )}

                    <div className={'pt-4 grid-cols-1 grid md:grid-cols-2 md:gap-4'}>
                        {result && result.map((r, i) => (
                            <div className={'col-span-1 md:col-span-1'}>
                                <JobCard key={i}
                                         description={r.description}
                                         title={r.title}
                                         company={r.univercity}
                                         salary={r.money.toString() ?? ''}
                                         type={r.isFullTime ? 'Full-time' : 'Part-time'}
                                         location={r.location}>

                                </JobCard>
                            </div>
                        ))}
                    </div>
                </div>
            </Dialog>

            <div className={'py-32 pt-52 bg-gradient-to-b from-white via-cyan-50 to-white'}>
                <div className={'container mx-auto max-w-lg'}>
                    <div className={'text-center space-y-8  '}>
                        <div className={' text-6xl font-bold'}>
                            <div>
                                Get Right
                            </div>
                            <div className={'text-blue-500 mt-1'}>Research</div>
                        </div>

                        <div className={'text-black/50'}>
                            Your next research is waiting for you!
                        </div>

                        <div>
                            <form className="w-full px-5 sm:px-0">
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <span className="i-mdi-search w-4 h-4 text-slate-500 dark:text-slate-400"/>
                                    </div>
                                    <input
                                        readOnly
                                        onClick={() => setOpenSearch(true)}
                                        className="block w-full p-3 pe-36 ps-10 text-sm text-slate-900  rounded-3xl
transition-all duration-200 ease-linear
cursor-pointer
ring-1 ring-slate-500
  focus:ring-2 focus:ring-black focus:outline-none focus:ring-opacity-30
 dark:bg-slate-700  dark:placeholder-slate-400 dark:text-white "
                                        id="default-search"
                                        placeholder={'Search any research by AI'}
                                        type="search"
                                    />

                                    <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none cursor-pointer z-20">
                                        <div className="justify-self-end flex gap-2 items-center">
                                            <div
                                                id="basic-button"
                                                className={`
                            ${'bg-cyan-500 text-white'}
                            text-sm text-slate-500 cursor-pointer dark:bg-slate-700 dark:text-white rounded-3xl py-2 px-4`}>
                                                <>
                                                    <div className={`flex items-center`}>
                                                        Search
                                                    </div>
                                                </>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'py-24 bg-slate-100 px-5 sm:px-0'}>
                <Solution/>
            </div>


            <div className={'py-24 px-5 sm:px-0'}>
                <FeaturedJobs/>
            </div>
        </>
    )
}

const Solution = () => {
    const solutions = [
        {
            title: <>Health &<br/>Medicine</>,
            icon: 'i-mdi-hospital-box',
            iconColor: 'text-red-500'
        },
        {
            title: <>Physics &<br/>Astronomy</>,
            icon: 'i-mdi-telescope',
            iconColor: 'text-yellow-500'
        },
        {
            title: <>Social &<br/>Psychology</>,
            icon: 'i-mdi-brain',
            iconColor: 'text-green-500'
        },
        {
            title: <>Computer &<br/>Science</>,
            icon: 'i-mdi-computer',
            iconColor: 'text-blue-500'
        },
        {
            title: <>Earth &<br/>Environment</>,
            icon: 'i-mdi-earth',
            iconColor: 'text-indigo-500'
        },
        {
            title: <>Law &<br/>Politics</>,
            icon: 'i-mdi-gavel',
            iconColor: 'text-purple-500'
        },
        {
            title: <>Arts &<br/>Humanities</>,
            icon: 'i-mdi-palette',
            iconColor: 'text-pink-500'
        },
        {
            title: <>Math &<br/>Statistics</>,
            icon: 'i-mdi-calculator-variant',
            iconColor: 'text-blue-500'
        }
    ];

    return (
        <>
            <div className={'container mx-auto text-center'}>
                <div className={'text-4xl font-semibold'}>
                    One platform for
                    <br/>
                    all your <span className={'text-blue-500'}>researches</span>
                </div>

                <div className={'grid grid-cols-2 lg:grid-cols-12 py-10 gap-6 text-left'}>
                    {
                        solutions.map((solution, index) => (
                            <div className={'col-span-1 lg:col-span-3 rounded-xl bg-white p-6 hover:shadow hover:bg-cyan-500 hover:text-white cursor-pointer transition-all duration-200 ease-linear'}
                                 key={index}>
                                <div className={'flex gap-4'}>
                                    <div>
                                        <span className={`${solution.iconColor} text-3xl ${solution.icon}`}/>
                                    </div>

                                    <div className={'text-lg'}>
                                        {solution.title}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

        </>
    )
}

const FeaturedJobs = () => {
    const authInfo = useAuthInfo()
    const navigate = useNavigate()
    const {redirectToLoginPage} = useRedirectFunctions()
    const {allResearches} = useResearch()

    return (
        <>

            <div className={'container mx-auto text-center'}>
                <div className={'text-4xl font-semibold'}>
                    Featured <span className={'text-blue-500'}>Researches</span>
                </div>

                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 text-left gap-6 pt-10'}>
                    {
                        allResearches && allResearches.length > 0 && allResearches?.map((job, index) => (
                            index < 8 && <JobCard key={index}
                                                  id={job.id}
                                                  applied={job.applied}
                                                  description={job.description}
                                                  title={job.title}
                                                  company={job.univercity}
                                                  salary={job.money.toString()}
                                                  type={job.isFullTime ? 'Full-time' : 'Part-time'}
                                                  location={job.location}
                            />
                        ))
                    }
                </div>

                <div className={'mt-10'}>
                    <Tooltip arrow
                             title={authInfo.isLoggedIn ? '' : 'Login to view all jobs'}>
                        <button
                            onClick={() => !authInfo.isLoggedIn ? redirectToLoginPage() : navigate('/dashboard')}
                            className={'transition-all duration-200 ease-linear hover:bg-cyan-500 hover:text-white border border-cyan-500 text-lg px-6 py-2 rounded-3xl'}>
                            View All Jobs
                        </button>
                    </Tooltip>
                </div>
            </div>
        </>
    )
}