import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../sharedComponents/Footer/Footer";
import Navbar from "../../sharedComponents/Navbar/Navbar";

const MainLayout = () => {
    const location = useLocation()
    const noHeaderFooter1 = location.pathname.includes('login')
    const noHeaderFooter2 = location.pathname.includes('signUp')
    return (
        <div  className='max-w-screen-xl	mx-auto inter'>
            {noHeaderFooter1 || noHeaderFooter2 || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter1 || noHeaderFooter2 || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;