import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {AppRouter} from "./router/app.router.tsx";
import {AuthProvider} from "@propelauth/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthProvider authUrl={import.meta.env.VITE_AUTH_URL}>
            <RouterProvider router={AppRouter}/>
        </AuthProvider>
    </React.StrictMode>,
)
