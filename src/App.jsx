import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import Sell from "./pages/Sell.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import "./App.css";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app-container">

      <Navbar />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />

    </div>
  );
}

export default App;
