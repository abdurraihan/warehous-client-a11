import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase-init'

import './AddItem.css'
const AddItem = () => {
    const [user] = useAuthState(auth);
    //console.log(user?.email);

    const handleAddItems = (event) =>{
      
        event.preventDefault();

        const addItem = {
            email: user?.email,
            name: user?.displayName,
            product_name : event.target.product_name.value,
            quentity: event.target.quentity.value,
            price: event.target.price.value,
            img: event.target.img.value
        }

        axios.post('http://localhost:5000/addItem',addItem)
        .then(response =>{
           // console.log(response)
 
           const {data} = response;
           if(data.insertedId){
              toast('your Item is add !!')
              event.target.reset()
           }
 
            
        })

    }




    return (
        <div className='add-main'> 
        <div className='add-container'>


            <form className='p-5' onSubmit={handleAddItems} >
            <input  className='w-100 mb-2' value={user?.displayName} readOnly type="text" name="name" id="" placeholder='name' required/>
                <br />
                <input  className='w-100 mb-2' value={user?.email} readOnly type="email" name="email" id="" placeholder='email' required/>
               <br />
               
                <input className='w-100 mb-2'  className='w-100 mb-2'  name="product_name" id="" placeholder='enter product name' required/>

                <input className='w-100 mb-2' type="text" name='quentity' placeholder='add quentity' required />
               <br />
                <input className='w-100 mb-2' type="text" name='price' placeholder='price' required />
               <br />
                <input className='w-100 mb-2' type="text" name='img' placeholder='ADD IMAGE LINK' required />
               <br />

               
               <input type="submit" value="add item" />

            </form>
        </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddItem;