// Routes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import CartPage from "./components/CartPage";
import HomeProductSection from "./pages/HomeProductSection";
import Contact from "./pages/Contact";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <HomeProductSection />
            </>
          }
        />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
