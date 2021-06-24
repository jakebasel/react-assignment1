import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import QuantityPicker from "./components/quantityPicker";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <h1> Hello there welcome to my online store</h1>
      <button className="btn btn-primary">Click me</button>
      
      <QuantityPicker></QuantityPicker>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
