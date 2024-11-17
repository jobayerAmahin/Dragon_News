import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Dashboard from "../Pages/Dashboard";
import Register from "../Pages/Register";
import Home from "../Pages/Home";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    }
])

export default router