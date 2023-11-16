import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosSecure, { axiosSecure } from './useAxiosSecure';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useCarts = () => {
    // load with tanstack query
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext);
    const {refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/carts/?email=${user.email}`)
            return res.data
        }
    })
    return [cart,refetch]
 };

export default useCarts;