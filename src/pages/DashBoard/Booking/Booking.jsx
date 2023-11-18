import { Formik } from "formik";
import SectionTitle from "../../../sharedComponents/SharedTitle/SectionTitle";

const Booking = () => {
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
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center ">
                                <div>
                                    <input
                                        type="date"
                                        name="date"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.date}
                                        className="input input-bordered w-[300px]"
                                    />
                                    {errors.date && touched.date && errors.date}
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
                                    <input
                                        type="text"
                                        name="guest"
                                        placeholder="Guest"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.guest}
                                        className="input input-bordered w-[300px]"
                                    />
                                    {errors.guest && touched.guest && errors.guest}
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center ">
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
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Booking;