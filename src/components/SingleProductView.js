import React from "react";
import image from './/shopping.jpeg'

export const SingleProductView = () => {
    return (
    <div className="SPV-container">
    
    <div class="item4">
    <div className="review-box">
     
            <h1>THE REVIEWS ARE IN</h1>
            <p></p>
       
    </div>
  </div>

  <div class="item5">
    <div className="item-img">
  <img clasName="SPV-img" src={image} alt="home backgroud img" style={{width: '300px'}}/>
  </div>
   just displaying description and photo
  </div>
    </div>
    )
    }