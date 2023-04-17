import React, { useState } from "react";

export const Register = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async (event) => {
        event.preventDefault();
    //     const userObj = await registerUser({
    //       user: {username,
    //       password}
    //     });
        
        // console.log("Resgister user ob", userObj.token, userObj.user.username)
    alert("Registration Successful!")
    setEmail("")
    setPassword("")



    }
    return(
      <div className="registration-container">
      <h2>CREATE AN ACCOUNT.</h2>
      <h5>Complete your sign up to <br></br>
        recieve your discount*</h5>
        <form onSubmit={handleSubmit} class="registerForm">
      

          
              <input 
                type="text" 
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