import React from 'react';
import './Futter.css'


const Futter = () => {
    const today = new Date();
     const year = today.getFullYear();
    return (
        <footer className='futter' >

            <p> coppy writing @{year} </p>
            
        </footer>
    );
};

export default Futter;