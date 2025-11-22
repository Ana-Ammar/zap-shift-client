import React, { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const axiosSecure = useAxiosSecure()
    const [searchParams] = useSearchParams()
    const [paymentInfo, setPaymentInfo] = useState({})
    const sessionId = searchParams.get('session_id')

    useEffect(() => {
        if(sessionId) {
           axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
           .then(res => setPaymentInfo({
            transectionId: res.data.transectionId,
            trackingId: res.data.trackingId
           }))
        }
    }, [sessionId, axiosSecure])
    console.log(paymentInfo)


    return (
        <div>
            <h1 className='text-5xl font-bold text-secondary mb-3 p-4'>Payment successfull</h1>
            <div className='bg-base-100 p-4 rounded-xl shadow-xl m-6 text-lg space-y-2'>
                <p><strong>Your Transaction-Id : </strong>{paymentInfo?.transectionId}</p>
                <p><strong>Your Parcel Tracking-Id : </strong>{paymentInfo?.trackingId}</p>
            </div>
    
        </div>
    );
};

export default PaymentSuccess;