import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Products from "./component/Products";
import { useState } from "react";
// import { Button } from "./component/Button";

function App() {

const [cart, setCart] = useState([]);


  return (
    <div className="App">
      <Navbar />
      <Products />
      {/* <Button /> */}
      <Footer />
    </div>
  );
}

export default App;
