import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/OrderFood/OrderFood";
import OrderFood from "../pages/OrderFood/OrderFood";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/orderFood/:category',
                element: <OrderFood></OrderFood>,
                loader: ()=>fetch("http://localhost:5001/totalMenus")
            },
        ]
    }
])

export default router