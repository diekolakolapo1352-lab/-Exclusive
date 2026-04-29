import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Products from "./component/Products";
// import { Button } from "./component/Button";

function App() {

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
