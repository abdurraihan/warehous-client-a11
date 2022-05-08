import React from 'react';
import { Table } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import './Inventory.css'

const Inventory = () => {

    const [products, setProducts] = useProducts();

    // const { _id, name, img, description, price, quantity, supplier_name
    // } = products;


    const handleDeleteBtn = (id) => {

      //  console.log(id)

        const proceed = window.confirm("are you sure to delete item ?");
        if(proceed){
            const url = `http://localhost:5000/products/${id}`
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(result => {
                 console.log(result)
                const remaining = products.filter(p => p._id !== id);
                setProducts(remaining);
            })
    
        }


    }




    return (
        <div>
            <h1> this is Inventory</h1>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>supplier_name</th>
                        <th>delete button </th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.map(p =>  <tr key={p._id}>
                        <td>{p.name}</td>
                        <td><img className='image' src={p.img} alt="" /></td>
                        <td>{p.price}</td>
                        <td>{p.quantity}</td>
                        <td>{p.supplier_name}</td>
                        <td><button onClick={ ()=> handleDeleteBtn(p._id) } className='delete-btn'>delete</button></td>
                      </tr>)
                }
                </tbody>
            </Table>
        </div>
    );
};

export default Inventory;