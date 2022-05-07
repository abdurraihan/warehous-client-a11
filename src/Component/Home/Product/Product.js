
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './product.css'
const Product = ({p}) => {

    const {_id, name, img, description, price , quantity , supplier_name
    } = p;

    
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/products/${id}`);
    }
    return (
        <div className='product '>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p> supplier Name : {supplier_name}</p>
            <p> qunetity : {quantity}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary'>update</button>
        </div>
    );
};

export default Product;