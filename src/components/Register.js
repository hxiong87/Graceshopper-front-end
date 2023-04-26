import React, { useState } from "react";
import { API_URL } from '../config';

async function registerUser(credentials) {
  console.log(credentials)
  const {email, password} = credentials.user
  console.log("The register user function", email, password)
  try {
  const response = await fetch(`${API_URL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: email,
        password: password
    })
  })
      const result = await response.json()
      console.log(result)
      if (result.error === "Duplicate Username") {
        window.alert("Username is already taken")
      }
      if (result.error === "Short password") {
        window.alert("Password Too Short")
      }
      console.log("IIIIIIIIIIII", result)
      return result
    } catch (error) {
      console.log(error)
    }
}

export const Register = ({ user, setUser }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("this is registration component", setEmail, setPassword)
        const userObj = await registerUser({
          user: {email,
          password}
        });
        
        console.log("Register user ob", userObj.token, userObj.user.email)
    alert("Registration Successful!")
    // setEmail(userObj.user.email)
    // setPassword("")
    window.localStorage.setItem('token', userObj.token)
    window.localStorage.setItem('userEmail', userObj.user.email)
    window.localStorage.setItem('userId', userObj.user.id)
    console.log("FFFFFFFFFFFFF", userObj)
    setUser([userObj.user.email, userObj.user.id]);
    // window.location.assign("/profile")
    }
    return(
      <div className="registration-container">
      <h2>CREATE AN ACCOUNT.</h2>
      <h5>Complete your sign up to <br></br>
        recieve your discount*</h5>
        <form onSubmit={handleSubmit} class="registerForm">
      

          {/* add name input
          we will display  */}
              <input 
                type="email" 
                onChange={(event) => setEmail(event.target.value)} 
                placeholder="Enter Email"
              />
      
         
              <input 
                type="password" 
                minLength={8} required
                onChange={(event) => setPassword(event.target.value)} 
                placeholder="Password"
              />
       
          <div class="box">
            <button type="submit">CREATE ACCOUNT</button>
          </div>
        </form>
        </div>
    )
}