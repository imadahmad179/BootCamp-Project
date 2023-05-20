import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from '../components/mui/login'
import Signup from "../components/mui/Signup";
import Patient from '../Pages/DonationHistory';
import LeftMenu from '../components/mui/LeftMenu';
import Donation from '../Pages/Donation';
import BloodRequest from '../Pages/BloodRequest';
import RequestHistory from '../Pages/RequestHistory';


const router = createBrowserRouter([
    {
        path: "/Dashboard",
        element: <LeftMenu></LeftMenu>,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/Patient",
        element: <Patient />,
    },
    {
        path: "/",
        element: 
        <LeftMenu>
        <Donation />
        </LeftMenu>,
    },
    {
        path: "/Blood-Request",
        element: <BloodRequest />,
    },
    {
        path: "/Request-History",
        element: <RequestHistory />,
    },
]);

export default function Routes(props) {

    return (
        <RouterProvider router={router} />
    )
};