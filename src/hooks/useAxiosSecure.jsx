import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
export const axiosSecure = axios.create({
    baseURL: "https://food-finder-chi-puce.vercel.app"
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext)

    
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log("Request stopped by interceptors", token)
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        return Promise.reject(error)
    });


    // interceptor 401, 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, async (error) => {
        console.log('status: ', error)
        const status = error.response.status

        if (status === 401 || status == 403) {
            navigate('/login')
            await logOut()

        }
        return Promise.reject(error)
    });
    return axiosSecure

}

export default useAxiosSecure;