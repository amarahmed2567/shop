import React,{useState} from "react";
import Home from "./components/Home/Home";
import NavBar from "./components/Nav/NavBar";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Products from "./components/product/Products";
import Product from "./components/product/ItemPage";
import { Container} from 'react-bootstrap'


function App() {

  return (
    <Router>
      <NavBar/>
    <Container>
    <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/products" element={<Products/>} />
      <Route path="/product/:id" element={<Product/>} />
    </Routes>
    </Container>
    </Router>
  );
}

export default App;
