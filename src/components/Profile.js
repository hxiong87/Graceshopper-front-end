import React from "react";
import { API_URL } from '../config';
import { useState, useEffect } from 'react';

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

export const Profile = () => {
  const [users, setUsers] = useState([]);
  const token = window.localStorage.getItem('token');
  const userId = window.localStorage.getItem('userId')
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchMe(userId, token);
      setUsers(result);
      console.log("Wawawawaw", result)
    };
    fetchData();
  }, []);



    return (
    <div className="profile-container">
    
      <div class="item2">
        <div className="profile-items">
          <h1>Welcome to your profile!</h1>
        </div>
      </div>

      <div class="item3">
        <img className="img" src='./profile_img.png' alt="home backgroud img" />
        {/* include purchase history and edit user  */}
      </div>
    </div>
    )
    }