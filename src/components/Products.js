import React, { useState } from "react";




export const Products = ({ token }) => {
        const [products, setProducts] = useState([])
      
        // const [open, setOpen] = useState(false);
        // const [userR, setuserR] = useState([]);
        
    
        // useEffect(() => {
        //     const fetchProducts = async () => {
        //       const products = await fetchAllRoutines();
        //       setProducts(products);
    
        //     };
        
        //     fetchProducts();
        //   }, []);
    
   
          
        return products.map((product) => (
            <div key={product.id} class="product" className="routiens-contianer">
                <div>
                <img src={product.imageUrl} alt={product.name} />
                    <h1>{product.name}</h1>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                   
                  
                </div> 
            </div>
        ))
}