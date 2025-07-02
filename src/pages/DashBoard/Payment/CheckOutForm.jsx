import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCarts from '../../../hooks/useCarts';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckOutForm = () => {

    const stripe = useStripe()
    const elements = useElements()
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [error, setError] = useState('')
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCarts()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const navigate= useNavigate()
    const location =useLocation()

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        // Block native form submission
        event.preventDefault()

        // is stripe.js not loaded disable the form submission
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        // if card elements is null then disable the form submission
        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log("Payment Method Error", error)
            setError(error.message)
        } else {
            console.log("Payment Method", paymentMethod)
            setError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'Anonymous',
                    email: user?.email || "Anonymous"
                }

            }
        })

        if (confirmError) {
            console.log('Confirm error', error)
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Somthing went wrong",
                text: `Find error : ${error}`,
                showConfirmButton: false,
                // timer: 3000
            });
        }
        else {
            console.log("Payment Intent", paymentIntent)
            if (paymentIntent.status === 'succeeded') {

                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuIds: cart.map(item => item.menuId),
                    status: 'pending'
                };

                // console.log(payment)

                const res = await axiosSecure.post('/payments', payment);
                console.log('Payment saved:', res.data);

                Swal.fire({
                    icon: "success",
                    title: 'Your Payment is successfully',
                    confirmButtonText: "Payment History",
                    customClass: {
                        // Add custom classes for styling
                        title: 'text-lg',
                    },
                    showCancelButton: true,
                    cancelButtonText: "Go Back"

                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        navigate("/dashboard/paymentHistory", { state: { from: location } })
                    }
                })

                refetch()
            }

            setTransactionId(paymentIntent.id)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement className='max-w-[850px] border-2 border-orange-300 rounded-lg p-2'>
                options={{
                    style: {


                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            </CardElement>
            <div className=''>
                <button className='btn btn-primary btn-sm my-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </div>
            <p className='text-red text-xs'>{error}</p>
        </form>
    );
};

export default CheckOutForm;