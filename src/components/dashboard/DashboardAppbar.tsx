import {Appbar} from "../layout/Appbar.tsx";

export const DashboardAppbar = () => {
    return (
        <div>
            <div className={'lg:sticky lg:top-0 lg:left-0 bg-white dark:bg-slate-800 w-full z-50'}>
                <Appbar/>
            </div>
        </div>
    )
}