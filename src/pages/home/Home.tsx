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

            <div className={'py-32 bg-slate-100'}>
                <div className={'container mx-auto text-center'}>
                    <div className={'text-4xl font-semibold'}>
                        One platform for
                        <br/>
                        all your research <span className={'text-blue-500'}>jobs</span>
                    </div>
                </div>
            </div>
        </>
    )
}