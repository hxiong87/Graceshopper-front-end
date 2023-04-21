import './App.css'
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Header,
  Navbar,
  Home,
  Login,
  Register,
  Profile,
  SingleProductView,
  Admin,
  Products,
  Loading
} from './components';

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] =useState(false);
  // const [ isLoading, setIsLoading ] = useState(false);
  
  function logout() {
    window.localStorage.removeItem('token');
    window.location.assign("/");

    setIsLoggedIn(false)
    setToken('');
    setUser('');
    alert("You're Logged Out!")
  }

    useEffect(() => {
      if (localStorage.getItem("token")) {
          setIsLoggedIn(true);
      }
    }, [isLoggedIn]);





  return (
   
    <div className="app-container">
      <div>
        <Header/> 
        <Navbar isLoggedIn={isLoggedIn} logout={logout}/>
        {/* {isLoading ? <Loading/> : null} */}
       </div>
    <div className='main'>
      <main>
        <Routes>
            <Route
              path='/'
              element={<Home />}/>

            <Route 
              path='/products' 
              element={<Products />}/>
           
            <Route
              path='/login'
              element={<Login />}/>

            <Route
              path='/register'
              element={<Register />}/>

            <Route
              path='/profile'
              element={<Profile />}/>

            <Route 
              path='/admin' 
              element={<Admin />}/>

            <Route
              path='/products:productId'
              element={<SingleProductView />}/> 

        </Routes>
      </main>
    </div>
    <footer>
      <h1>
    
      </h1>
    </footer>
  </div>

  );
}

export default App;