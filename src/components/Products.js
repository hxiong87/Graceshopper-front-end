import React, { useState, useEffect } from 'react';
import { API_URL } from '../config';
import { Link, Route, Routes } from 'react-router-dom';
import { SingleProductView } from './SingleProductView';

const fetchAllProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    const result = await response.json();
    if (result.error) {
      throw result.error;
    }
    return result;
  } catch (error) {
    console.error('Error fetching things', error);
  }
};

export const addProduct = async (obj, productId, token) => {
  console.log('Add Product Vriables', productId, obj, token);

  try {
    const response = await fetch(`${API_URL}/orders/${productId}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(obj),
    });
    const result = await response.json();
    console.log('LLLLLLLLLLLLLL', response);
    if (result.error) {
      throw result.error;
    }
    console.log('BBBBBBBBBBBBBBB', result);
    return result;
  } catch (error) {
    console.error('Error fetching things', error);
  }
};

// const addProduct = async (userId, productId, quantity, token) => {
//   console.log("Add Product Vriables", userId, productId, quantity, token)
//   return fetch(`https://graceshopper-0xzy.onrender.com/api/products/${productId}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`
//     },
//     body: JSON.stringify({
//       userId,
//       productId,
//       quantity
//     })
//   })
//     .then(response => {console.log("LLLLLLLLLLLLLL", response); response.json()})
//     .then(result => {
//       console.log("BBBBBBBBBBBBBBB", result);
//       return result;
//     })
//     .catch(console.error);
// };

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [productId, setProductId] = useState();
  const [petType, setPetType] = useState('All');
  const token = window.localStorage.getItem('token');
  const userId = window.localStorage.getItem('userId');
  // const [open, setOpen] = useState(false);
  // const [userR, setuserR] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const prod = await fetchAllProducts();
      console.log('These are the products', prod);
      setProducts(prod);
    };
    fetchProducts();
  }, []);

  const handleAdd = async (event) => {
    event.preventDefault();
    console.log('Product Id', event.target[2].value);
    console.log('UUUUUUUUUUUUU', quantity, userId);
    setProductId(event.target[2].value);
    const obj = { userId: userId, productId: productId, quantity: quantity };
    const cart = await addProduct(obj, productId, token);
    return cart;
  };
  const handlePetTypeChange = (event) => {
    setPetType(event.target.value);
  };

  const handleClick = async (event) => {
    console.log('This is new', event);
  };
  const filteredProducts =
    petType === 'All'
      ? products
      : products.filter((product) => product.petType === petType);
  return (
    <div>
      <div>
        Pet Type:
        <select value={petType} onChange={handlePetTypeChange}>
          <option value="All">All</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
        </select>
      </div>
      <div className="product-grid-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-container">
            <section className="product">
              <div className="product-card">
                <div className="product-image">
                  <img src={product.url} alt={product.title} />
                </div>
                <div className="product-info">
                  <Link
                    className="title"
                    onClick={handleClick}
                    to={`/products/${product.id}`}
                  >
                    {product.title}
                  </Link>
                  <Routes>
                    <Route
                      path={`/products/${product.id}`}
                      element={<SingleProductView productId={productId} />}
                    ></Route>
                  </Routes>
                  <p className="upp-c">${product.price}</p>
                  <p>{product.description}</p>
                  <form onSubmit={handleAdd}>
                    <input
                      type="number"
                      onChange={(event) => setQuantity(event.target.value)}
                      placeholder="Quantity..."
                      min="1"
                      value={quantity}
                    />
                    <button type="submit">Add to Cart</button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

