import React from 'react';
import useProducts from '../../../hooks/useProducts';

const Products = () => {
    const [products, setProducts] = useProducts();
    console.log(products);
    return (
        <div>
            this is products
        </div>
    );
};

export default Products;