
import { useForm } from "react-hook-form"
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../sharedComponents/SharedTitle/SectionTitle";
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const image_hosting_server_key = import.meta.env.VITE_HOSTING_SERVER_KEY
const image_hoisting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_server_key}`

const Update = () => {

    const { id } = useParams()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const [prevData, setPrevData] = useState([])

    useEffect(() => {
        axiosPublic.get(`/menus/${id}`)
            .then(res => setPrevData(res.data))
            .catch(error => console.log(error))
    }, [])

    console.log("Default", prevData)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log("data", data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hoisting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log("Image file url", res.data.data.display_url)

        if (res.data.success) {
            const food = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            
            axiosSecure.patch(`/menus/${id}`, food)
                .then(res => {
                    console.log(res.data)
                    if (res.data.modifiedCount > 0) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been updated",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
                .catch(error => console.log(error))

                console.log(food)
        }
    }

    return (
        <div className="mx-12">
            <SectionTitle heading="Update an Item" subHeading="What's New?"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input
                            type="text" defaultValue={prevData.name}
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select  {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default" defaultValue={prevData.category}>Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number" defaultValue={prevData.price}
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea defaultValue={prevData.recipe} {...register('recipe')} className="textarea textarea-bordered h-24"></textarea>
                    </div>

                    <div className="form-control w-full my-3">
                        <input  {...register('image', { required: true })} type="file" className="file-input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="btn bg-[#D1A054] text-white mb-3">
                            Update Recipe Details <FaUtensils className="ml-2"></FaUtensils>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;