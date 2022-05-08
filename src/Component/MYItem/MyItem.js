import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase-init';

import './MyItem.css'
const MyItem = () => {

    const [user] = useAuthState(auth);
    const [myItem , setMyitem] = useState();

    useEffect(()=>{
        const getMyItem = async () =>{
            const email = user?.email;
            const url = `http://localhost:5000/myItem?email=${email}`;
            const {data} = await axios.get(url);
            setMyitem(data);
            
        }
    
        getMyItem();

    },[myItem])


     
    const handleDeleteBtn = (id) => {

        //  console.log(id)
  
          const proceed = window.confirm("are you sure to delete item ?");
          if(proceed){
              const url = `http://localhost:5000/myItem/${id}`
              fetch(url,{
                  method: 'DELETE'
              })
              .then(res => res.json())
              .then(result => {
                   console.log(result)
                  const remaining = myItem.filter(m => m._id !== id);
                  setMyitem(remaining);
              })
      
          }
  
  
      }
   
  



    return (
        <div className='my-item-container'>

            <h2 className='my-item-title'> MY Items</h2>
          
          {
               <Table striped bordered hover variant="dark">
               <thead>
                   <tr>
                      <th>Email</th>
                       <th>Name</th>
                       <th>Image</th>
                       <th>price</th>
                       <th>quantity</th>
                       <th>product_name</th>
                       <th>delete button </th>
                   </tr>
               </thead>
               <tbody>
               {
                   myItem?.map(m =>  <tr key={m._id}>
                        <td>{m?.email}</td>
                       <td>{m?.name}</td>
                       <td><img className='image' src={m?.img} alt="" /></td>
                       <td>{m?.price}</td>
                       <td>{m?.quentity}</td>
                       <td>{m?.product_name}</td>
                       <td><button onClick={ ()=> handleDeleteBtn(m?._id) } className='delete-btn'>delete</button></td>
                     </tr>)
               }
               </tbody>
           </Table>
          }
        </div>
    );
};

export default MyItem;