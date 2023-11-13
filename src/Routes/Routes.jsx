import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/OrderFood/OrderFood";
import OrderFood from "../pages/OrderFood/OrderFood";

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
                path: '/orderFood/:category',
                element: <OrderFood></OrderFood>
            },
            {
                path: '/orderFood',
                element: <OrderFood></OrderFood>
            },
        ]
    }
])

export default router