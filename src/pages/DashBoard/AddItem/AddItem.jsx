
import { useForm } from "react-hook-form"
import SectionTitle from '../../../sharedComponents/SharedTitle/SectionTitle';
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_server_key = import.meta.env.VITE_HOSTING_SERVER_KEY
const image_hoisting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_server_key}`

const AddItem = () => {

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hoisting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data.data.display_url)

        if (res.data.success) {
            const food = {
                name: data.name,
                recipe: data.recipe,
                category: data.category,
                image: res.data.data.display_url,
                price: data.price,
                details: data.details
            }
            axiosSecure.post('/menus', food)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <div className="mx-12">
            <SectionTitle heading="ADD AN ITEM" subHeading="What's New?"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Recipe Name"
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
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
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
                                type="number"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="details"></textarea>
                    </div>

                    <div className="form-control w-full my-3">
                        <input {...register('image', { required: true })} type="file" className="file-input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="btn bg-[#D1A054] text-white mb-3">
                            Add Item <FaUtensils className="ml-2"></FaUtensils>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;