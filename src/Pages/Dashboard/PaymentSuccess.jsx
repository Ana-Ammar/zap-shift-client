import React, { useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const axiosSecure = useAxiosSecure()
    const [searchParams] = useSearchParams()
    const sessionId = searchParams.get('session_id')

    useEffect(() => {
        if(sessionId) {
           axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
           .then(res => console.log(res.data))
        }
    }, [sessionId, axiosSecure])


    return (
        <div>
            <h1 className='text-5xl font-bold text-secondary mb-3 p-4'>Payment successfull</h1>
    
        </div>
    );
};

export default PaymentSuccess;