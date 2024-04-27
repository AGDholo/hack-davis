import {useNavigate} from "react-router-dom";

export const Appbar = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <div className="border-b dark:border-b-slate-600 h-16 grid-cols-3 grid items-center px-4 lg:px-10">
                    <div className="text-lg lg:text-2xl font-extrabold permanent-marker flex items-center dark:text-white cursor-pointer"
                         onClick={() => navigate('/')}>
                        <img src={'/img.png'}
                             className={'lg:h-5 h-4'}/> iapp
                    </div>
                    <div className={''}>
                        <form className="w-full  hidden lg:block">
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <span className="i-mdi-search w-4 h-4 text-slate-500 dark:text-slate-400"/>
                                </div>
                                <input
                                    className="block w-full p-3 ps-10 text-sm text-slate-900  rounded-3xl bg-slate-50
transition-all duration-200 ease-linear
  focus:ring-2 focus:ring-black focus:outline-none focus:ring-opacity-30
  cursor-not-allowed

 dark:bg-slate-700  dark:placeholder-slate-400 dark:text-white "
                                    id="default-search"
                                    placeholder={'Search your research job'}
                                    type="search"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="justify-self-end flex gap-2 items-center">
                        
                    </div>
                </div>

            </div>
        </>
    )
}