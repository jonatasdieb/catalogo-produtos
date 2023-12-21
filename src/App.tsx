import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/products";
import ProductDetails from "./pages/products/details";
import { CartProvider } from "./contexts/cartContext";
import { CssBaseline } from "@mui/material";
import Menu from "./shared/menu";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <CartProvider> 
        <Menu />       
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
