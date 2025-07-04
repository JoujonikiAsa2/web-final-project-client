import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import OrderFood from "../pages/OrderFood/OrderFood";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashBoard from "../pages/Layout/DashBoard";
import Cart from "../pages/DashBoard/Cart/Cart";
import AllUsers from "../pages/DashBoard/Users/AllUsers";
import AdminRoutes from "../AdminRoute/AdminRoutes";
import AddItem from "../pages/DashBoard/AddItem/AddItem";
import ManageItem from "../pages/DashBoard/ManageItems/ManageItem";
import Update from "../pages/DashBoard/ManageItems/Components/Update";
import Reservation from "../pages/DashBoard/Reservation/Reservation";
import Payment from "../pages/DashBoard/Payment/Payment";
import PaymentHistory from "../pages/DashBoard/PaymentHistory/PaymentHistory";

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
                element: <PrivateRoute><Menu></Menu></PrivateRoute>
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
                loader: () => fetch("https://food-finder-chi-puce.vercel.app/totalMenus")
            },
        ]
    },
    {
        path: "dashboard",
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: "cart",
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: "bookTable",
                element: <Cart></Cart>
            },
            {
                path: "reservation",
                element: <Reservation></Reservation>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },


            // Admin routes
            {
                path: "users",
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: "manageItems",
                element: <ManageItem></ManageItem>
            },
            {
                path: "update/:id",
                element: <Update></Update>,
            },
            {
                path: "manageBookings",
                element: <Cart></Cart>
            },
            {
                path: "addItems",
                element: <AdminRoutes><AddItem></AddItem></AdminRoutes>
            },
        ]
    }
])

export default router