import React from 'react';
import { Route, Routes, Link, useNavigate  } from 'react-router-dom';
import { useState } from 'react';

async function addNewProduct(postObj, userToken) {
  console.log("AAAAAAAAAAAAAAA", postObj, userToken)
  return fetch('https://graceshopper-0xzy.onrender.com/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    },
    body: JSON.stringify(postObj)
  })
    .then(response => response.json())
    .then(result => {
      console.log("BBBBBBBBBBBBBBB", postObj, result);
      if (result.error === "Name already exists") {
        window.alert("A product with that name already exists")
      }
      return result;
    })
    .catch(console.error);
}

export const Admin = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [inventory, setInventory] = useState();
  const [petType, setPetType] = useState();
  const handleSubmit = async event => {
    const token = window.localStorage.getItem('token')
      event.preventDefault();
      const obj = {
          title, description, price, inventory, petType
      }
      await addNewProduct(obj, token)
  }
  return (
      <form onSubmit={handleSubmit} class="login">
        <label>
          <p>Name</p>
          <input type="text" onChange={event => setTitle(event.target.value)} placeholder="Name..."/>
        </label>
        <label>
          <p>Description</p>
          <input type="text" onChange={event => setDescription(event.target.value)} placeholder="Description..."/>
        </label>
        <label>
          <p>Price</p>
          <input type="number" onChange={event => setPrice(event.target.value)} placeholder="Price..."/>
        </label>
        <label>
          <p>Inventory</p>
          <input type="number" onChange={event => setInventory(event.target.value)} placeholder="Inventory..."/>
        </label>
        <label>
          <p>Pet Type</p>
          <input type="text" onChange={event => setPetType(event.target.value)} placeholder="Pet Type..."/>
        </label>
        <div>
          <button type="submit">Create New Product</button>
        </div>
      </form>
  )
}

// export const Admin = () => {
// //   add products, edit and delete products, view user information, 
// //  allow checkout options
// //  get all users

//     return (
//     <div className="admin-bar">
//       <Link className='add-product'>Add Product</Link>
//       <Link className='edit-product'>Edit Product</Link>
//       <Link className='delete-product'>Delete Product</Link>
//       <Link className='view-user'>View User</Link>
//       <Link className='get-all-users'>Get All Users</Link>
//       <h5>Admin</h5>
//     </div>
//   );
// };
