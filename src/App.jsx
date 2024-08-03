import { useEffect } from "react";
import "./App.css";
import Cart from "./Components/Cart";
import Footers from "./pages/Footers";
import Navbare from "./pages/Navbare";
import { ProducteData } from "./ProducteData";
import { useDispatch } from "react-redux";
import CartSlice, { setProducts } from "./Redux/CartSlice";



function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setProducts(ProducteData))
  },[])

  return (
    <>
      <Navbare />
      <Cart />
      <Footers />
    </>
  );
}

export default App;
