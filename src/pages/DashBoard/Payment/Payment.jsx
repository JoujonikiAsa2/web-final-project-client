import SectionTitle from '../../../sharedComponents/SharedTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';


// we should give a publishable key inside the loadStripe
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {
    return (
        <div>
            <SectionTitle subHeading="Please Pay" heading="Payment"></SectionTitle>
            <div className=' bg-white rounded  mx-12 my-6'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;