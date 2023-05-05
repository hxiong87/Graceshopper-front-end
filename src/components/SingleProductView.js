import React, { useState, useEffect } from 'react';
import { API_URL } from '../config';
import { addProduct } from './Products';

const viewProduct = async (productId, token) => {
  try {
    const response = await fetch(`${API_URL}/products/${productId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    if (result.error) {
      throw result.error;
    }
    console.log('Attempting to view product', result, viewProduct);
    return result;
  } catch (error) {
    console.error('Error fetching users cart', error);
  }
};

export const SingleProductView = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState([]);
  const token = window.localStorage.getItem('token');
  const productId = window.localStorage.getItem('Product Id');
  console.log("Product ID in single view", productId)
  
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await viewProduct(productId, token);
      console.log('This is a single product', products);
      setProduct(products);
      //comment
    };
    fetchProducts();
  }, []);

  return (
    <div key={product.id} class="product" className="SPV-container">
      <div>
        <img src={product.url} alt={product.title} />
        <h1>{product.title}</h1>
        <h4>Price: </h4>
        <p>{product.price}</p>
        <h4>Description: </h4>
        <p>{product.description}</p>
        <h4>Product Inventory: </h4>
        <p>{product.inventory}</p>
        <h4>Pet Type: </h4>
        <p>{product.petType}</p>
        {/* <div>{product.url ? product.url : "Picture"}</div> */}
        <form>
          <input
            type="number"
            onChange={(event) => setQuantity(event.target.value)}
            placeholder="Quantity..."
            min="1"
            value={quantity}
          />
          <button type="submit">Click Twice to Add Product to Cart</button>
          <input value={product.id} className="hidden" />
        </form>
      </div>
    </div>


  );
};
