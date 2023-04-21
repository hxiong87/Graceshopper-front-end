import React from "react";
import { API_URL } from '../config';

// const fetchUserOrder = async ( username, token ) => {
//     try {
//         const response = await fetch(`${API_URL}/${username}/order`, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//               },
//             });
//         const result = await response.json();
//         if (result.error) {
//             throw result.error;
//         }
//         return result;
//       } catch (error) {
//         console.error('Error fetching things', error);
//       }
// };

export const Cart = () => {
    return (
    <div className="cart">
        Your current shopping cart
    </div>
    )
}