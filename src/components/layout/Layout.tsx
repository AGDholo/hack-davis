import {Appbar} from "./Appbar.tsx";
import {Outlet} from "react-router-dom";
import {Footer} from "./Footer.tsx";

export const Layout = () => {
    return (
        <>
            <div className={'fixed w-full backdrop-blur-xl ease-in duration-100  z-50'}>
                <Appbar/>
            </div>
            <Outlet/>

            <Footer/>
        </>
    )
}