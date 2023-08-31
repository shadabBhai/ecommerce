import{BrowserRouter as Router ,Route,Routes } from "react-router-dom";
import { Provider } from "react-redux";


import Header from "./components/Header";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout"
import store from "./redux/store";
import Footer from "./components/Footer";


import Home from "./components/Home";
function App() {
  return (
    <Provider store={store}>
      <Router>
      <Header/> 
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/product/:id" element={<ProductDetail/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>

      </Routes>
      <Footer/>
    </Router>
  </Provider>
    
  );
}

export default App;
