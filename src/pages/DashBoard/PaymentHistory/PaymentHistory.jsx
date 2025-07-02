import React, { useContext } from 'react';
import SectionTitle from '../../../sharedComponents/SharedTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentHistory = () => {

    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { refetch, data: payments } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        },
    })

    console.log(user.email, "payments", payments)
    return (
        <div>
            <SectionTitle subHeading="All payments you done!" heading="Payment History"></SectionTitle>
            <div className=' overflow-x-auto'>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => {
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td>{payment.transactionId}</td>
                                    <td>{payment.status}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;