import React from 'react';
import Banner from '../Banner/Banner';
import HowWorks from '../HowItWorks/HowWorks';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands/Brands';

const Home = () => {
    return (
        <div className='my-8'>
            <Banner />
            <HowWorks />
            <OurServices />
            <Brands />
        </div>
    );
};

export default Home;