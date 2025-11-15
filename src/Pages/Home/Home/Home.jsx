import React from 'react';
import Banner from '../Banner/Banner';
import HowWorks from '../HowItWorks/HowWorks';
import OurServices from '../OurServices/OurServices';

const Home = () => {
    return (
        <div className='my-8'>
            <Banner />
            <HowWorks />
            <OurServices />
        </div>
    );
};

export default Home;