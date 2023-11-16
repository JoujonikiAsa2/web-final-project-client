import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxiosPublic';

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user)
                const userInfo={
                    name: res.user?.displayName,
                    email: res.user?.email,
                    photoUrl: res.user?.photoURL
                }
                axiosPublic.post('/users', userInfo)
                .then(res=>{
                    console.log(res.data)
                    navigate('/')
                })
                .catch(error=>{
                    console.log(error.message)
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className='divider'>Or</div>
            <div>
                <button onClick={handleGoogleLogin} className='btn bg-green-300 capitalize mr-4'><FaGoogle className='text-yellow-600'></FaGoogle>Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;