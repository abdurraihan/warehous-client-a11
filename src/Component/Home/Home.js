import React from 'react';
import Banar from './Banar/Banar';
import Products from './Products/Products';

import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Banar></Banar>
            <Products></Products>
           
        </div>
    );
};

export default Home;