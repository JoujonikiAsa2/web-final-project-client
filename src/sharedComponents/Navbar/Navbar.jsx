import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import {FaShoppingCart} from 'react-icons/fa'
import useCarts from "../../hooks/useCarts";

const Navbar = () => {

    const { logOut, user } = useContext(AuthContext)

    const [cart] = useCarts()
    // useEffect(())

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("User logged out successfully")
                Swal.fire({
                    title: "Logged out successfully",
                    showClass: {
                        popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                    },
                    hideClass: {
                        popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                    }
                });
            })
            .catch(error => console.log(error.message))
    }
    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/orderFood/salad'>Foods</Link></li>
        <li><Link to={'/dashboard/cart'} className="indicator">
            <FaShoppingCart></FaShoppingCart>
            <span className="badge badge-sm indicator-item">+{cart.length}</span>
            </Link>
        </li>
        {
            !user ? <>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signUp'>Sign Up</Link></li>
            </> : <>
                <li><Link to='/signUp' onClick={handleLogOut}>Log Out</Link></li>
            </>
        }
    </>
    return (
        <div className="navbar bg-opacity-30 bg-black max-w-screen-xl text-white fixed z-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;