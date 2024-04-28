import {Appbar} from "./Appbar.tsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <div className={'fixed w-full bg-white z-'}>
                <Appbar/>
            </div>
            <Outlet/>
        </>
    )
}