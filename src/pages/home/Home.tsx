import {JobCard, jobs} from "../../components/job/Jobcard.tsx";

export const Home = () => {
    return (
        <>
            <div className={'py-32 pt-52 bg-gradient-to-b from-white via-cyan-50 to-white'}>
                <div className={'container mx-auto max-w-lg'}>
                    <div className={'text-center space-y-8  '}>
                        <div className={' text-6xl font-bold'}>
                            <div>
                                Get Right
                            </div>
                            <div className={'text-blue-500 mt-1'}>Research Job</div>
                        </div>

                        <div className={'text-black/50'}>
                            Your next research job is waiting for you!
                        </div>

                        <div>
                            <form className="w-full  hidden lg:block">
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <span className="i-mdi-search w-4 h-4 text-slate-500 dark:text-slate-400"/>
                                    </div>
                                    <input
                                        className="block w-full p-3 pe-36 ps-10 text-sm text-slate-900  rounded-3xl
transition-all duration-200 ease-linear
ring-1 ring-slate-500
  focus:ring-2 focus:ring-black focus:outline-none focus:ring-opacity-30
 dark:bg-slate-700  dark:placeholder-slate-400 dark:text-white "
                                        id="default-search"
                                        placeholder={'Job title or keyword'}
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
                                                        <span className="text-lg i-mdi-account-circle hidden lg:block mr-1"/>
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

            <div className={'py-24 bg-slate-100'}>
                <Solution/>
            </div>


            <div className={'py-24'}>
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
                    all your <span className={'text-blue-500'}>research jobs</span>
                </div>

                <div className={'grid grid-cols-12 py-10 gap-6 text-left'}>
                    {
                        solutions.map((solution, index) => (
                            <div className={'col-span-3 rounded-xl bg-white p-6 hover:shadow hover:bg-cyan-500 hover:text-white cursor-pointer transition-all duration-200 ease-linear'}
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

    return (
        <>
            <div className={'container mx-auto text-center'}>
                <div className={'text-4xl font-semibold'}>
                    Featured <span className={'text-blue-500'}>Research Jobs</span>
                </div>

                <div className={'grid grid-cols-12 text-left gap-6 pt-10'}>
                    {
                        jobs.map((job, index) => (
                            <JobCard key={index} {...job}/>
                        ))
                    }
                </div>

                <div className={'mt-10'}>
                    <button className={'transition-all duration-200 ease-linear hover:bg-cyan-500 hover:text-white border border-cyan-500 text-lg px-6 py-2 rounded-3xl'}>
                        View All Jobs
                    </button>
                </div>
            </div>
        </>
    )
}