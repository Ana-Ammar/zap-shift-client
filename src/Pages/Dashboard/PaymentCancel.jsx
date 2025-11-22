import React from 'react';
import { NavLink } from 'react-router';

const PaymentCancel = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-red-700 mb-3'>Something Went Wrong</h1>
             <NavLink to="/" className="button flex justify-center items-center gap-1"> <IoArrowBackOutline size={22}/>Go back and Try again later</NavLink>
        </div>
    );
};

export default PaymentCancel;