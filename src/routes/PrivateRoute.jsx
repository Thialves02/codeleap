import React from 'react'
import {
    Outlet,
    Navigate
} from "react-router-dom";
import userLogged from '../auth/Auth';

//If the user is logged the page starts on main screen
export default function PrivateRoute() {
    return (
        !userLogged() ? <Navigate to='/' /> : <Outlet />
    )
}
