import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Product from "./pages/product";
import ProductDetails from "./pages/productdetails";
import NotFound from "./pages/404";
import Contact from "./pages/contact";
import AfterSalePage from "./pages/aftersale";
import TeamDetail from "./pages/teamdetail";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/corporate-profile" element={<About />} />
        <Route path="/products" element={<Product />} />
        {/* <Route path="/service" element={<Service />} /> */}
        <Route path="/after-sale" element={<AfterSalePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/team/:id" element={<TeamDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
