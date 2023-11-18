import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../sharedComponents/Loading/Loading";
import useAdmin from "../hooks/useAdmin";

const AdminRoutes = ({children}) => {
    const [isAdmin,isAdminLoading] = useAdmin()
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(isAdmin)

    
    if(user && isAdmin){
        return children
    }

    if(loading || isAdminLoading){
        return <Loading></Loading>
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoutes;