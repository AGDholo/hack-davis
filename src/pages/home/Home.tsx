export const Home = () => {
    return (
        <>
            <div className={'py-32 bg-gradient-to-b from-white via-cyan-50 to-white'}>
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
                            text-sm text-slate-500 cursor-pointer dark:bg-slate-700 dark:text-white rounded-3xl bg-slate-100 py-2 px-4`}>
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

                                    <div className={'text-2xl'}>
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
    const jobs = [
        {
            company: "Harvard University",
            location: "Cambridge, MA, USA",
            title: "Quantum Computing Researcher",
            type: "Full-time",
            description: "Lead groundbreaking research in quantum algorithms and machine learning.",
            salary: "$7000/month"
        },
        {
            company: "MIT",
            location: "Cambridge, MA, USA",
            title: "Renewable Energy Specialist",
            type: "Full-time",
            description: "Pioneer new solar energy solutions within our engineering department.",
            salary: "$6500/month"
        },
        {
            company: "Stanford University",
            location: "Stanford, CA, USA",
            title: "AI Ethics Professor",
            type: "Full-time",
            description: "Guide the future of AI with a focus on ethical implications and policies.",
            salary: "$6800/month"
        },
        {
            company: "Caltech",
            location: "Pasadena, CA, USA",
            title: "Astrophysics Postdoc",
            type: "Full-time",
            description: "Conduct research on dark matter within our Space Science Department.",
            salary: "$5600/month"
        },
        {
            company: "Oxford University",
            location: "Oxford, UK",
            title: "Medieval History Scholar",
            type: "Full-time",
            description: "Explore the depths of medieval history and culture in a global context.",
            salary: "£4500/month"
        },
        {
            company: "Columbia University",
            location: "New York, NY, USA",
            title: "Urban Studies Analyst",
            type: "Full-time",
            description: "Develop sustainable urban planning strategies for the 21st century.",
            salary: "$6300/month"
        },
        {
            company: "Yale University",
            location: "New Haven, CT, USA",
            title: "Environmental Policy Expert",
            type: "Full-time",
            description: "Shape environmental policy and practice with cutting-edge research.",
            salary: "$6900/month"
        },
        {
            company: "Princeton University",
            location: "Princeton, NJ, USA",
            title: "Neuroscience Investigator",
            type: "Full-time",
            description: "Lead innovative studies on the human brain and neurological diseases.",
            salary: "$7200/month"
        }
    ];


    return (
        <>
            <div className={'container mx-auto text-center'}>
                <div className={'text-4xl font-semibold'}>
                    Featured <span className={'text-blue-500'}>Research Jobs</span>
                </div>

                <div className={'grid grid-cols-12 text-left gap-6 pt-10'}>
                    {
                        jobs.map((job, index) => (
                            <div className={'col-span-3 p-6 border rounded-xl hover:shadow cursor-pointer transition-all duration-200 ease-linear flex flex-col'}
                                 key={index}>
                                <div className={'flex-1'}>
                                    <div className={'flex'}>
                                        <div className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
                                            <span>{job.company}</span>
                                        </div>
                                    </div>

                                    <div className={'mt-1 space-y-0.5'}>
                                        <div className={'text-xl font-semibold'}>
                                            {job.title}
                                        </div>

                                        <div className={'text-sm text-gray-500'}>
                                            {job.location}
                                        </div>

                                        <div className={'text-sm text-gray-500'}>
                                            {job.type}
                                        </div>
                                    </div>

                                    <div className={'flex flex-1'}>
                                        <div className={'mt-2'}>
                                            {job.description}
                                        </div>
                                    </div>
                                </div>

                                <div className={'mt-auto flex justify-between items-end pt-5'}>
                                    <div className={'text-lg font-bold'}>
                                        {job.salary}
                                    </div>

                                    <button className={'bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm px-4 py-2 rounded-3xl'}>
                                        Apply Now
                                    </button>
                                </div>
                            </div>
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