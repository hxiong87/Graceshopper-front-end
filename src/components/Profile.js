import React from "react";
import image from '/Users/leeka/graceshopper-front-end/src/css/profile-img.png'

export const Profile = () => {
    return (
    <div className="profile-container">
    
    <div class="item2">
    <div className="profile-items">
    <h1>Welcome to your profile!</h1>
    </div>
  </div>

  <div class="item3">
  <img clasName="img" src={image} alt="home backgroud img" />
   
  </div>
    </div>
    )
    }