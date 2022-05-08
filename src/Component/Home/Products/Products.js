import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [products] = useProducts();
   
    return (
            <div> 

           <h2> Inventory Items in down / Go Manage Inventory and see all <Link to="/inventory"> <button>Inventory</button></Link> </h2>
         


        <div className='products-container'>

            
    
            {
                products.slice(0 ,6).map(p=> <Product 
                    key={p._id}
                    p={p}>

                    </Product> )
            }
            
        </div>

        </div>
    );
};

export default Products;