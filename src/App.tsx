import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Product from "./pages/product";
import Service from "./pages/service";
import ProductDetails from "./pages/productdetails";
import NotFound from "./pages/404";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/service" element={<Service />} />
      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
