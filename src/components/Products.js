import React, { useState, useEffect } from "react";


const fetchAllProducts = async () => {
    try {
        const response = await fetch(`https://graceshopper-0xzy.onrender.com/api/products`);
        const result = await response.json();
        if (result.error) {
            throw result.error;
        }
        return result;
      } catch (error) {
        console.error('Error fetching things', error);
      }
};

export const Products = ({ token }) => {
        const [products, setProducts] = useState([])
      
        // const [open, setOpen] = useState(false);
        // const [userR, setuserR] = useState([]);
        
    
        useEffect(() => {
            const fetchProducts = async () => {
              const products = await fetchAllProducts();
              console.log("These are the products", products)
              setProducts(products);
    
            };
        
            fetchProducts();
          }, []);
    
   
          
        return products.map((product) => (
            <div key={product.id} class="product" className="routines-contianer">
                <div>
                <img src={product.imageUrl} alt={product.title} />
                    <h1>{product.title}</h1>
                    <h4>Price: </h4>
                    <p>{product.price}</p>
                    <h4>Description: </h4>
                    <p>{product.description}</p>
                    <h4>Product Inventory: </h4>
                   <p>{product.inventory}</p>
                   <h4>Pet Type: </h4>
                   <p>{product.type}</p>
                  
                </div> 
            </div>
        ))
}