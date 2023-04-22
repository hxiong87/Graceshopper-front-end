
import React, { useEffect, useState} from "react";
import { API_URL } from '../config';

const fetchUserOrder = async ( username, token ) => {
    try {
        const response = await fetch(`https://graceshopper-0xzy.onrender.com/api/${username}/order`, {
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

export const Cart = ({ user }) => {
    const [ cart, setCart ] = useState([]);
    const token = window.localStorage.getItem('token')

    useEffect(() => {
        const fetchData = async() => {
            const result = await fetchUserOrder(
                user,
                token
            )
            setCart(result);
        }
        fetchData();
    });

    return <div>
        { cart === [] ? cart.map((cart) => (
        <div key={cart.id} className="cart">
            <div>
                <h3>
                    Product Id {cart.productId} 
                </h3>
                <div>
                    Quantity {cart.quantity}
                </div>
            </div>
        </div>  
        )) : `Your cart is empty!` }
    </div>
}