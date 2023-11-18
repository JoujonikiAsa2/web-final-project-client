import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useMenuItems from "../../../hooks/useMenuItems";
import SectionTitle from "../../../sharedComponents/SharedTitle/SectionTitle";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageItem = () => {
    // const [menus] = useMenuItems()
    const axiosSecure = useAxiosSecure()
    const { refetch, data: menus = [] } = useQuery({
        queryKey: 'menus',
        queryFn: async () => {
            const result = await axiosSecure.get(`/menus`)
            return result.data
        }
    })

    console.log(menus)
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

                axiosSecure.delete(`/menus/${id}`)
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
        <div className="mx-12">
            <SectionTitle subHeading="Hurry Up" heading="MANAGE ALL ITEMS"></SectionTitle>
            <div className="overflow-x-auto rounded-2xl">
                <table className="table">
                    <thead className="bg-[#D1A054] uppercase text-white">
                        <tr>
                            <th>#</th>
                            <th>Item image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Acions</th>
                            <th>Acions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menus.map((item, index) => <tr>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <Link to={`/dashboard/update/${item._id}`}>
                                        <button className="btn bg-[#D1A054]">
                                            <FaEdit className="text-white"></FaEdit>
                                        </button>
                                    </Link>
                                </td>
                                <td><button className="btn bg-[#B91C1C]" onClick={() => handleDelete(item._id)}><FaTrashAlt className="text-white"></FaTrashAlt></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItem;