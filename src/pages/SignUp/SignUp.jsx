import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import SocialLogin from '../../sharedComponents/SocialLogin';
const SignUp = () => {

    const axiosPublic = useAxiosPublic()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then((res) => {

                console.log(res.user)
                updateUserProfile(data.name, data.phone, data.photoUrl)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photoUrl: data.photoUrl
                        }
                        axiosPublic.post('/api/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log("user added to the database")
                                    const Toast = Swal.mixin({
                                        toast: true,
                                        position: "top-end",
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true,
                                        didOpen: (toast) => {
                                            toast.onmouseenter = Swal.stopTimer;
                                            toast.onmouseleave = Swal.resumeTimer;
                                        }
                                    });
                                    Toast.fire({
                                        icon: "success",
                                        title: "Signed in successfully"
                                    });
                                }
                            })
                    })
                    .catch(error => console.log(error.message))

                navigate('/login')
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card w-full max-w-1/2 shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                            </div>
                            {errors.name && <span className='text-xs text-red-600'>Name is required</span>}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoUrl" {...register("photoUrl", { required: true })} placeholder="photoUrl" className="input input-bordered" />
                            </div>
                            {errors.photoUrl && <span className='text-xs text-red-600'>PhotoUrl is required</span>}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="text" name="phone"  {...register("phone", { required: true })} placeholder="phone number" className="input input-bordered" />
                            </div>
                            {errors.phone && <span className='text-xs text-red-600'>Phone is required</span>}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email"  {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            </div>
                            {errors.email && <span className='text-xs text-red-600'>Email is required</span>}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,20}/
                                })} placeholder="password" className="input input-bordered" />
                            </div>
                            {errors.password?.type === "required" && <span className='text-xs text-red-600'>Password is required</span>}
                            {errors.password?.type === "minLength" && <span className='text-xs text-red-600'>Password should be 6 character or longer</span>}
                            {errors.password?.type === "maxLength" && <span className='text-xs text-red-600'>Password should be less then 20 character</span>}
                            {errors.password?.type === "pattern" && <span className='text-xs text-red-600'>Minimum six characters, at least one letter, one number and one special character</span>}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <Link to="/login" className='text-xs'>Already have an account? Go to <span className='text-red-600'>Login</span></Link>
                        </form>
                        <div className='flex justify-center items-center mb-8'>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;