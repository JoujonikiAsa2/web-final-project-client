import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../sharedComponents/Loading/Loading";

const AdminRoutes = ({children}) => {
    const {isAdmin,isAdminLoading} = useAdmin()
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading || isAdminLoading){
        return <Loading></Loading>
    }

    if(user && isAdmin){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoutes;