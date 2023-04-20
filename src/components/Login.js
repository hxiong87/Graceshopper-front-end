import React, { useState } from "react";


async function loginUser(credentials) {
    console.log(credentials)
    return fetch('https://graceshopper-0xzy.onrender.com/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.message === "User does not exist") {
          window.alert("Username does not exist")
        }
        if (result.message === "Password is incorrect") {
          window.alert("Password incorrect")
        }
        return result
      })
      .catch(console.error);
  }

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (event) => {

        event.preventDefault();
        console.log("this is login",email, password)
        const userObj = await loginUser({
          email,
          password
        });
        
        console.log("login userObj", userObj.token, userObj.user.email)
        window.localStorage.setItem('token', userObj.token)
        window.location.assign("/profile")
    
      
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