import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import Home from "./components/Home";
import ViewCart from "./components/ViewCart";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/ViewCart" element={<ViewCart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;