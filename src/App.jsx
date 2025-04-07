import React, { useEffect } from "react";
import ContactPage from "./pages/Contact";
import ProductsPage from "./pages/Products";
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import HomePage from "./Pages/Home";
import ScrollToTop from "./componets/ScrollToTop"; // ✅ Add this import

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
      <ScrollToTop /> {/* ✅ Add this just inside your app layout */}

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
