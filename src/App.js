import './App.css';
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
  Loading,
  Cart,
} from './components';

function App() {
  const [token, setToken] = useState('');
  const [user, setUser] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [ isLoading, setIsLoading ] = useState(false);

  function logout() {
    window.localStorage.removeItem('token');
    window.location.assign('/');

    setIsLoggedIn(false);
    setToken('');
    setUser('');
    alert("You're Logged Out!");
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  return (
    <div className="app-container">
      <div>
        <Header />
        <Navbar isLoggedIn={isLoggedIn} logout={logout} />
        {/* {isLoading ? <Loading/> : null} */}
      </div>
      <div className="main">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/products" element={<Products user={user} />} />

            <Route
              path="/login"
              element={<Login user={user} setUser={setUser} />}
            />

            <Route
              path="/register"
              element={<Register user={user} setUser={setUser} />}
            />

            <Route path="/profile" element={<Profile />} />

            <Route path="/admin" element={<Admin />} />

            <Route
              path="/products/:productId"
              element={<SingleProductView />}
            />

            <Route path="/cart" element={<Cart user={user} />} />
          </Routes>
        </main>
      </div>
      <footer>
        <h1></h1>
      </footer>
    </div>
  );
}

export default App;
