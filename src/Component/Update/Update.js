import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Update.css'
const Update = () => {

    const { productId } = useParams();

    const [product, setProduct] = useState({})

    const { _id, name, img, description, price, quantity, supplier_name
    } = product;

    console.log(_id);


    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])











    return (
        <div className='update-container '>

            <img src={img} alt="" />
            <div className='d-flex justify-content-center p-4'>

                <div>
                    <h5> id: {_id}</h5>
                    <h5> Name: {name}</h5>
                    <h5> Price : {price}</h5>
                    <h5> qunetity : {quantity}</h5>
                    <h5> supplier name : {supplier_name} </h5>
                    <h5> {description}</h5>

                    <button> deliver </button> 

                    <form>
                        <input type="number" name="" id="" />
                        <input type="submit" value="add" />
                    </form>
                </div>
              
             

            </div>

        </div>
    );
};

export default Update;