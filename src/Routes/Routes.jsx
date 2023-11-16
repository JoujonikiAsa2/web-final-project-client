import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/OrderFood/OrderFood";
import OrderFood from "../pages/OrderFood/OrderFood";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashBoard from "../pages/Layout/DashBoard";
import Cart from "../pages/DashBoard/Cart/Cart";
import AllUsers from "../pages/DashBoard/Users/AllUsers";

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
                element:<PrivateRoute><Menu></Menu></PrivateRoute>
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
    },
    {
        path: "dashboard",
        element: <DashBoard></DashBoard>,
        children:[
            {
                path: "cart",
                element: <Cart></Cart>
            },

            // Admin routes
            {
                path: "users",
                element: <AllUsers></AllUsers>
            },
            {
                path: "manageItems",
                element: <Cart></Cart>
            },
            {
                path: "manageBookings",
                element: <Cart></Cart>
            },
            {
                path: "addItems",
                element: <Cart></Cart>
            },
        ]
    }
])

export default router