import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './Update.css'
const Update = () => {

    const { productId } = useParams();

    const [product, setProduct] = useState({})

    const { _id, name, img, description, price, quantity, supplier_name
    } = product;

    // console.log(_id);


    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])




    const handledeliver = () =>{

        if(quantity == 0){
            return toast(" you can't deliver more ")
        }

        const newQuentity = parseInt(quantity) -1;

        const newData = {
            _id : _id,
            name: name,
            img: img,
            description: description,
            price: price,
            supplier_name: supplier_name,
            quantity : newQuentity

        }
   //console.log(newData);
        const url = `http://localhost:5000/products/${productId}`
        fetch(url , {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(res=> res.json())
        // .then(data => console.log(data))
       


     

    }


    const handaleAdd =(event)=>{
        event.preventDefault();
        const number = event.target.number.value;
        if(number < 1){
            return toast('please add quantity');
        }

        const newQuentity = parseInt(quantity)  + parseInt(number) ;
        
        const newData = {
            _id : _id,
            name: name,
            img: img,
            description: description,
            price: price,
            supplier_name: supplier_name,
            quantity : newQuentity

        }
   //console.log(newData);
        const url = `http://localhost:5000/products/${productId}`
        fetch(url , {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(res=> res.json())
        // .then(data => console.log(data))
      
        event.target.reset();



      

    }








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

                    <button onClick={handledeliver}> deliver </button> 

                    <form onSubmit={handaleAdd}>
                        <input type="number" name="number" 
                        placeholder='restock the items' id="" />

                        <input type="submit" value="add" />
                    </form>
                </div>
              
                <ToastContainer></ToastContainer>

            </div>

        </div>
    );
};

export default Update;