import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  // ✅ ADD THIS (cart state)
  const [cart, setCart] = useState([]);

  // ✅ FIX FUNCTION
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>🛒 Cart: {cart.length}</h2>

      <div className="products-container">
        {loading && <h1>loading......</h1>}

        {data.map((product) => (   // ✅ FIX NAME
          <div key={product.id} className="card">
            <img src={product.image} alt="#" />

            <div className="card-description">
              <h6>{product.title}</h6>
              <h6>Price: {product.price}</h6>
              <h6>Category: {product.category}</h6>
            </div>

            {/* ✅ FIX BUTTON */}
            <button
              onClick={() => addToCart(product)}
              className="bg-orange-500 text-white p-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* ✅ SHOW CART ITEMS */}
      <div>
        <h3>Cart Items:</h3>
        {cart.map((item, index) => (
          <p key={index}>{item.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Products;






// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Products = () => {
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState([]);
//   const addToCart = (product) => {
//   setCart((prevCart) => [...prevCart, product]);
// };

//   useEffect(() => {
//     setLoading(true);
//     axios({
//       method: "GET",
//       url: "https://fakestoreapi.com/products",
//     })
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       })
//       .catch((e) => console.log(e))
//       .finally(() => setLoading(false));
//   }, []);
//   return (
//     <div className="products-container">
//       {loading && (
//         <div>
//           {" "}
//           <h1>loading......</h1>
//         </div>
//       )}
//       {data.map((Products) => (
//         <div key={Products.id} className="card">
//           <div>
//             {" "}
//             <img src={Products.image} alt="#" />
//           </div>
//           <div className="card-description border rounded-2xl ">
//             <h6>{Products.title}</h6>
//             <h6>{`Price: ${Products.price}`}</h6>
//             <h6>{`Category: ${Products.category}`}</h6>

            
//           </div>

//           <button onClick={() => addToCart(Products)}
//           className="border bg-orange-500 gap-4">
//             Add to Cart
//           </button>


          
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Products;
