import React, { useState } from "react";
// import loginUser from './api'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (event) => {

        event.preventDefault();
        // const userObj = await loginUser({
        //   email,
        //   password
        // });
        
        // console.log("login userObj", userObj.token, userObj.user.email)
        // window.localStorage.setItem('token', userObj.token)
        //window.location.assign("/profile")
    
      
    }
    return(
      <div className="login-container">
      
            <form onSubmit={handleSubmit} class="loginForm">
                <h2>GOOD TO SEE YOU AGAIN.</h2>
                <h5>Please log in to your account.</h5>
    
                <input 
                   type="email" 
                   placeholder="Enter Email"
                   onChange={(event)=> setEmail(event.target.value)} 
                />
                <br></br>  

                <input 
                 type="password"
                 minLength={8} required 
                 placeholder="Enter Password"
                 onChange={(event) => setPassword(event.target.value)} 
                 />
              
                 <button type="submit">LOGIN</button>
       
            </form>
       </div>
    )
}