import React from "react";
import { API_URL } from '../config';

export const Profile = () => {
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