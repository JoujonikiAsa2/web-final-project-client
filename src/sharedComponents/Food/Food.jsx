import React, { useContext, useEffect } from 'react';
import Button from '../Button/Button';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { axiosSecure } from '../../hooks/useAxiosSecure';
import useCarts from '../../hooks/useCarts';

const Food = ({ item }) => {

    const { name, image, recipe, price } = item
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const [, refetch] = useCarts()

    const handleAddToCart = (food) => {
        console.log(food)

        if (user && user.email) {
            // sent item to database

            const cartItems = {
                menuId: food._id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post("/carts", cartItems)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            icon: "success",
                            title: `${name} added successfully`,
                            confirmButtonText: "Go to the cart",
                            customClass: {
                                // Add custom classes for styling
                                title: 'text-lg',
                            },
                            showCancelButton: true,
                            cancelButtonText: "Go Back"

                        }).then((result) => {
                            /* Read more about isConfirmed, isDenied below */
                            if (result.isConfirmed) {
                                navigate("/dashboard/cart", { state: { from: location } })
                            }
                        })
                        refetch()
                    }

                })
                .catch(error => console.log(error))
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Plase Login To add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the use to the login page
                    navigate("/login", { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card space-y-4 p-4 relative">
            <span className='absolute right-8 top-10 w-12 bg-yellow-400 text-black'>${price}</span>
            <img className="w-full h-60" src={image} alt="" />
            <div className='flex flex-col justify-center items-center'>
                <h3 className="uppercase text-[#151515] text-xl">{name}</h3>
                <p className="text-base">{recipe}</p>
                <div onClick={() => handleAddToCart(item)}>
                    <Button
                        borderColor="orange-400" textColor="orange-400" btnText="Add to Cart"></Button>
                </div>
            </div>
        </div>
    );
}

export default Food;