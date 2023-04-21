import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";


export const Navbar = ({ isLoggedIn, logout }) => {
  


  
  
    return (
        <nav className="nav-main">
       
            <div className='navigation-links'>
                <ul className="leftside-link">
                    <Link className='home' to='/'>Home</Link>
                    <Link className="products" to='/products'>Products</Link>
                     <Link className="profile" to='/profile'>Profile</Link>
                     <Link className="admin-tab" to='/admin'>Admin</Link>
                </ul>  
                </div>
                <div className="logo">
                    <h1>S F P </h1>
                </div>
               
                <div className="navigation-links2">
                <ul className="rightside-links">
                     <Link className='login' to='/login'>Login</Link>
                    <Link className='register' to='/register'>Register</Link>
                    <Link className="cart" to='/Cart'>Shopping Cart</Link>
                    <Link to='/' onClick={() => logout()}>Logout</Link>
                </ul>
               
              
               
            </div>
   
         </nav>

    )
};
