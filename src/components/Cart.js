
import React, { useEffect, useState} from "react";
import { API_URL } from '../config';

const fetchUserOrder = async ( userId, token ) => {
    try {
        const response = await fetch(`https://graceshopper-0xzy.onrender.com/api/users/${userId}/order`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
            });
        const result = await response.json();
        if (result.error) {
            throw result.error;
        }
        return result;
      } catch (error) {
        console.error('Error fetching things', error);
      }
};

const fetchDeleteOrder = async ( orderId, token ) => {
    console.log("TTTTTTTTTTTTTT", orderId, token)
    try {
        const response = await fetch(`https://graceshopper-0xzy.onrender.com/api/orders/${orderId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
            });
        const result = await response.json();
        console.log("DDDDDDDDDD", response)
        if (result.error) {
            throw result.error;
        }
        console.log("FFFFFFFFFFFFF", result)
        return result;
      } catch (error) {
        console.error('Error fetching things', error);
      }
};

export const Cart = () => {
    const [cart, setCart] = useState([]);
    const [orderId, setOrderId] = useState()
    const token = window.localStorage.getItem('token')
    const userId = window.localStorage.getItem('userId')

    useEffect(() => {
        const fetchData = async() => {
            const result = await fetchUserOrder(
                userId,
                token
            )
            setCart(result);
        }
        fetchData();
    });

    const handleDelete = async (event) => {
        event.preventDefault();
        console.log("event target", event.target[1].value)
        setOrderId(event.target[1].value)
        fetchDeleteOrder( orderId, token)
      }

    const handleCheckout = async (event) => {
        event.preventDefault()
        console.log("checkout (will add Strpie last)")
    }

    return <div>
        {cart.map((cart) => (
        <div key={cart.id} className="cart">
            <div>
                <h3>
                    Product Id {cart.productId} 
                </h3>
                <div>
                    Quantity {cart.quantity}
                </div>
                <form onSubmit={handleDelete}>
                    <button type='submit'>Click TWICE to DELETE</button>
                    <input value={cart.id} className="hidden"/>
                </form>
            </div>
        </div>  
        ))}
        <div>
        <form onSubmit={handleCheckout}>
            <button type='submit'>Go To Checkout</button>
        </form>
        </div>
    </div>
}