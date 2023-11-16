import React, { useState } from 'react';
import useCarts from '../../../hooks/useCarts';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { axiosSecure } from '../../../hooks/useAxiosSecure';
import { FaTrashAlt } from 'react-icons/fa';

const Cart = () => {

    const [cart, refetch] = useCarts()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

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

                axiosSecure.delete(`/carts/${id}`)
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
            <h2 className='text-2xl font-semibold text-center pt-6 text-orange-400'>My Cart</h2>
            <div className=' bg-white rounded  mx-12 my-6'>
                <div className='flex justify-between items-center py-3'>
                    <h2 className='text-lg font-semibold'>{cart.length} Items added to your cart</h2>
                    <h4 className='text-lg font-semibold'>Total Price: ${totalPrice}</h4>
                    <button className='btn btn-sm bg-orange-400'>Pay</button>
                </div>
                <div className="overflow-x-auto rounded-2xl">
                    <table className="table  w-full">
                        {/* head */}
                        <thead className='bg-gray-200'>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item._id)}
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

export default Cart;