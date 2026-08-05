import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import App from "../App";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Clerk from "../pages/Clerk/Clerk";
import Agreements from "../pages/Clerk/Agreements/Agreements";
import Boards from "../pages/Clerk/Boards/Boards";
import WorkOrders from "../pages/Clerk/WorkOrders/WorkOrders";
import Letters from "../pages/Clerk/Letters/Letters";
import ClerkDash from "../pages/Clerk/ClerkDash/ClerkDash";
import NoteSheets from './../pages/Clerk/NoteSheets/NoteSheets';
import StaffNotes from './../pages/Clerk/StaffNotes/StaffNotes';

const AllRoutes = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute><App /></PrivateRoute>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/clerk",
                element: <Clerk />,
                children: [
                    {
                        path: "/clerk",
                        element: <ClerkDash />
                    },
                    {
                        path: "/clerk/letters",
                        element: <Letters />
                    },
                    {
                        path: "/clerk/agreements",
                        element: <Agreements />
                    },
                    {
                        path: "/clerk/boards",
                        element: <Boards />
                    },
                    {
                        path: "/clerk/work-orders",
                        element: <WorkOrders />
                    },
                    {
                        path: "/clerk/note-sheets",
                        element: <NoteSheets />
                    },
                    {
                        path: "/clerk/staff-notes",
                        element: <StaffNotes />
                    }
                ]
            },
            {
                path: "/ictlab",
                element: <div>ICT Lab</div>
            },
            {
                path: "/internet",
                element: <div>Internet</div>
            },
            {
                path: "/software",
                element: <div>Software</div>
            },
            {
                path: "/ictstore",
                element: <div>ICT Store</div>
            },
            {
                path: "/settings",
                element: <div>Settings</div>
            },
            {
                path: "/search",
                element: <div>Search</div>
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
])

export default AllRoutes;