import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [products] = useProducts();
   
    return (
            <div> 

           <h2 className='products-title'> Inventory Items </h2>
         


        <div className='products-container'>

            
    
            {
                products.slice(0 ,6).map(p=> <Product 
                    key={p._id}
                    p={p}>

                    </Product> )
            }
            

            <button  className='inv-btn'> <Link to="/inventory">Go manage Inventory </Link> </button>
        </div>

        </div>
    );
};

export default Products;