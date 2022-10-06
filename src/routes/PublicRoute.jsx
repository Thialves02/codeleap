import React from 'react'
import {
    Outlet,
    Navigate
} from "react-router-dom";
import userLogged from '../auth/Auth';

//If the user isnt logged the page starts on login screen
export default function PublicRoute() {
    return (
        !userLogged() ? <Outlet /> : <Navigate to='/main' />
    )
}
