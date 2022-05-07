import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [products] = useProducts();
   
    return (
        <div className='products-container'>
         
            {
                products.slice(0 ,6).map(p=> <Product 
                    key={p._id}
                    p={p}>

                    </Product> )
            }
            
        </div>
    );
};

export default Products;