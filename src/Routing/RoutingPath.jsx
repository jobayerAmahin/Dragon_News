import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Dashboard from "../Pages/Dashboard";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import NewsContent from "../Components/NewsContent";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                children:[
                    {
                        path:`/category/:id`,
                        element: <NewsContent></NewsContent>,
                        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
                    }
                ]
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