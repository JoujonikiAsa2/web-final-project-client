import React from 'react';
import { FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { RiCalendarFill, RiFeedbackFill, RiReservedFill } from 'react-icons/ri';
import { NavLink, Outlet } from 'react-router-dom';
import useCarts from '../../hooks/useCarts';
import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {

    const [cart] = useCarts()
    // Get is admin value from the database
    const [isAdmin] = useAdmin()
    console.log(isAdmin)
    return (
        <div className='flex  min-h-screen '>
            <div className='w-64 bg-orange-400 fixed h-full overflow-y-auto z-30'>
                <ul className='menu p-4'>
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/adminHome'><FaHome></FaHome> Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addItems'><FaUtensils></FaUtensils> Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageItems'><FaList></FaList> Manage Itmes</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageBookings'><RiCalendarFill></RiCalendarFill> Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'><FaUsers></FaUsers> All Users</NavLink>
                            </li>
                        </> :
                            <>
                                <li>
                                    <NavLink to='/dashboard/home'><FaHome></FaHome> User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/reservation'><RiReservedFill></RiReservedFill> User Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/review'><RiFeedbackFill></RiFeedbackFill> Add Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart> My Carts ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/bookTable'><RiCalendarFill></RiCalendarFill> My Bookings</NavLink>
                                </li>
                            </>
                    }
                    <div className='divider'></div>
                    {/* shared navlink */}
                    <li>
                        <NavLink to='/'><FaHome></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/orderFood/salad'><FaSearch></FaSearch> Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to='/orderFood/salad'><FaEnvelope></FaEnvelope> Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1 ml-64'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;