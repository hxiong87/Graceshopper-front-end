import React, { useEffect, useState } from "react";
import { API_URL } from '../config';

const editInfo = async(token,user) => {
  try {
    const response=await fetch (`${API_URL}/users/me`, {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json", 
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        user: {
          address: user.address, 
          aptNum: user.aptNum,
          city: user.city,
          state: user.state,
          zip: user.zip,
          card: user.card,
          cardName: user.cardName,
          expDate: user.expdate,
          secCode: user.secCode
        }

      })
    }
    )
    const result= await response.json()
    return result
  }
  catch (error) {
    console.error(error)
  }
}

async function fetchMe(userId, token) {
  console.log('YYYYYYYYYYYYYYY', userId, token);
  try {
    const response = await fetch(`${API_URL}/users/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    });
    console.log('OOOOOOOOOOOOO', response);
    const result = await response.json();
    if (result.error) {
      throw result.error;
    }
    console.log('PPPPPPPPPPPPPP', result);
    return result;
  } catch (error) {
    console.error(error);
  }
}



// async function getProfile () {
//   try{
//     const response= await fetch (`${API_URL}/users/me`, {
//       headers: {
//         'Content-Type': 'application/json',
//         "Authorization": `Bearer ${token}`
//       }
//     })
//     let result=await response.json();
//     console.log('The use effect in profile', result.data.user)
//   } catch(error) {
//     console.error(error)
//   }
// }

export const Profile = ({token}) => { 
  const [address, setAddress] = useState('');
  const [aptNum, setAptNum] = useState('');
  const [city, setCity] = useState('');
  const [state, setState]= useState('');
  const [zip, setZip] = useState();
  const [card,setCard] = useState('');
  const [cardName, setCardName] = useState('');
  const [expDate, setExpDate] = useState('');
  const [secCode, setSecCode] = useState('');
  const [profile, setProfile] = useState('');






  

  const handleSubmit= async (event) => {
    event.preventDefault();
      const personalInfo = {
      address,
      aptNum,
      city,
      state,
      zip,
      card,
      cardName,
      expDate,
      secCode,
       
     
    
    };
   };






   return (
      <div className="personal-info">
      <form className="address" onSubmit={handleSubmit}>
        <h3> Edit Address:</h3>
        <label>Street Address</label>
          <input 
            type='text' 
            autoComplete="address-line1" 
            placeholder="Enter Street Address" 
            onChange={(event) => {setAddress(event.target.value)}}
          />     
        <label>Apt Number (Optional)</label>
          <input 
            type='text' 
            autoComplete="address-line2" 
            placeholder="Enter Apt Number(optional)" 
            onChange={(event) => {setAptNum(event.target.value)}}
          />
        <label>City</label>
          <input 
            type='text' 
            autoComplete="address-level2" 
            placeholder="Enter your city" 
            onChange={(event) => {setCity(event.target.value)}}
          />
        <label>State</label>
          <input 
            type='text' 
            autoComplete="address-level1" 
            placeholder="Enter your state" 
            onChange={(event) => {setState(event.target.value)}}
          />
        <label>Zip/Postal code</label>
          <input 
            type='number' 
            minLength={7} required 
            autoComplete="postal-code" 
            placeholder="Enter your zip code" 
            onChange={(event) => {setZip(event.target.value)}}
          />
        <button type="submit"> Save address</button>
      </form>
      
      <form className="credit-card" onSubmit={handleSubmit}>
        <h3> Edit credit card:</h3>
        <label>Credit Card</label>
          <input 
            type='number' 
            maxLength={16} required 
            placeholder="Enter your credit card number" 
            onChange={(event) => {setCard(event.target.value)}}
          />
        <label>Cardholder Name</label>
          <input 
            type='text' 
            placeholder="Enter cardholder name" 
            onChange={(event) => {setCardName(event.target.value)}}
          />
        <label>Expiration Date</label>
          <input 
            type="month" 
            placeholder="Enter expiration date" 
            onChange={(event) => {setExpDate(event.target.value)}}
          />
        <label>Security code</label>
          <input 
            type='number' 
            maxLength={4} required 
            placeholder="Enter CVC" 
            onChange={(event) => {setSecCode(event.target.value)}}
          /> 
        <button type="submit"> Save card info</button>
      </form>
      </div>
    ) 
   };
