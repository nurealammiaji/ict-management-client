import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import App from "../App";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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
                element: <div>Clerk</div>
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