import React, { useEffect } from "react";
import Header from "./componets/Header";
import HomePage from "./pages/home";
import ProductsPage from "./pages/products"
import ContactPage from "./pages/contact"
import Footer from "./componets/Footer";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ScrollToTop from "./componets/ScrollToTop"; 



function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (performance.navigation.type === 1 && location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop /> 

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
