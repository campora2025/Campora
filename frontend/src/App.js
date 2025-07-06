import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProdDetail from "./components/produk/ProdDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Landing from "./pages/Landing";
import ProductPage from "./pages/Product";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/produk" element={<ProductPage />} />
        <Route path="/produk/:id" element={<ProdDetail />} />
        <Route path="/kontak" element={<Contact />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;