import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import App from "../App";

const AllRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
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
            }
        ]
    }
])

export default AllRoutes;