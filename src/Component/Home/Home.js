import React from 'react';
import Banar from './Banar/Banar';
import Products from './Products/Products';

import './Home.css'
import Informatin from './Informatin/Informatin';

const Home = () => {
    return (
        <div className='home'>
            <Banar></Banar>
            <Products></Products>
            <Informatin></Informatin>
           
        </div>
    );
};

export default Home;