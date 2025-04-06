import React from "react";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import ProductsPage from "./pages/Products";
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";
import { Route, Router, Routes } from "react-router-dom";

function App() {

  
  return (
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
  );
}

export default App;
