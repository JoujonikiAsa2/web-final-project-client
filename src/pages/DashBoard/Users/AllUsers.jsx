import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaAdn, FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const axiosSecure = useAxiosSecure()

    const { refetch, data: users = [] } = useQuery({
        queryKey: "users",
        queryFn: async () => {
            const result = await axiosSecure.get('/users',{
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
            return result.data
        }
    })

    const handleUserRole = (user) => {
        console.log(user)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make admin!"
        }).then(result => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        console.log(res.user)
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Added!",
                                text: "The user added as admin.",
                                icon: "success"
                            });
                        }
                        else{
                            refetch()
                            Swal.fire({
                                title: "Already Added!",
                                text: "The user already added as admin.",
                                icon: "error"
                            });

                        }
                    })
                    .catch(error => {
                        Swal.fire({
                            title: "Error!",
                            text: `${error.message}`,
                            icon: "error"
                        });
                    })
            }
        })
    }

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                    })
                    .catch(error => {
                        Swal.fire({
                            title: "Error!",
                            text: `${error.message}`,
                            icon: "error"
                        });
                    })
            }
        });
    }

    return (
        <div>
            <h2 className='text-2xl font-semibold text-center pt-6 text-orange-400'>Manage All Users</h2>
            <div className=' bg-white rounded  mx-12 my-6'>
                <div className='flex justify-between users-center py-3'>
                    <h2 className='text-lg font-semibold'>Total Users: {users.length}</h2>
                </div>
                <div className="overflow-x-auto rounded-2xl">
                    <table className="table  w-full">
                        {/* head */}
                        <thead className='bg-gray-200'>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Roll</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>
                                        {index + 1}
                                    </th>

                                    <td>
                                        {user.name}
                                    </td>
                                    <td>{user.email}</td>
                                    {
                                        user.role !== "admin" ? <td>
                                        <button className='btn bg-orange-400' onClick={() => handleUserRole(user)}>
                                            <FaUsers></FaUsers></button>
                                    </td> :
                                    <td>
                                    <button className='btn bg-orange-400' onClick={() => handleUserRole(user)}>
                                        <FaAdn></FaAdn></button>
                                </td>
                                    }
                                    <th>
                                        <button
                                            onClick={() => handleDelete(user._id)}
                                            className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                    </th>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;