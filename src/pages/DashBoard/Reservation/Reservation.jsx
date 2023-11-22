import { Formik } from "formik";
import SectionTitle from "../../../sharedComponents/SharedTitle/SectionTitle";
import DateTime from "./DateTime";
import { axiosPublic } from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { RiReservedFill } from "react-icons/ri";

const Reservation = () => {
    return (
        <div className="mx-12 lg:py-24">
            <SectionTitle subHeading="reservation" heading="Book a table"></SectionTitle>
            <Formik
                initialValues={{ email: '', time: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                    console.log(values)

                    axiosPublic.post('/Reservations', values)
                    .then(res=>{
                        if(res.data.insertedId){
                            Swal.fire({
                                title: "Booked",
                                text: "values.name booked successfuly",
                                icon: 'success'
                            })
                        }
                    })
                    .catch(error=> console.log(error))
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col lg:gap-8 gap-4">
                            <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center gap-4">
                                <div>
                                    <DateTime></DateTime>
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="time"
                                        placeholder="Time"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.time}
                                        className="input input-bordered w-[300px]"
                                    />
                                    {errors.time && touched.time && errors.time}
                                </div>

                                <div>
                                    <select
                                    name="guest"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.guest}
                                    className="input input-bordered w-[300px]"
                                    >
                                        <option value=""></option>
                                        <option value="1">1 Persion</option>
                                        <option value="2">2 Persions</option>
                                        <option value="3">3 Persions</option>
                                        <option value="4">4 Persions</option>
                                    </select>
                                    {errors.guest && touched.guest && errors.guest}
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center gap-4">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        className="input input-bordered w-[300px]"
                                    />
                                    {errors.name && touched.name && errors.name}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phone}
                                        className="input input-bordered w-[300px]"
                                    />
                                    {errors.phone && touched.phone && errors.phone}
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        className="input input-bordered w-[300px]"
                                    />
                                    {errors.email && touched.email && errors.email}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center py-6">
                            <button type="submit" disabled={isSubmitting} className="btn bg-[#B58130]">
                            <RiReservedFill></RiReservedFill> Book a table
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Reservation;