import React from "react";
import { Route, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import AuthComponent from "./AuthComponent";
const cookies = new Cookies();

export default function ProtectedRoutes({ component: Component, ...rest }) {
    // get cookie from the browser if logged in
    const token = cookies.get("TOKEN");
    console.log(token);
    // If there's a valid token in the cookie, render the component; otherwise, navigate to the landing page
    if (token) {
        return <AuthComponent/>
    } else {
        return <Navigate to="/" state={{ from: rest.location }} />;
    }
}
