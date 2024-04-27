import {Appbar} from "./Appbar.tsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <Appbar/>
            <Outlet/>
        </>
    )
}