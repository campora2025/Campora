import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./components/produk/Cart";
import ProdDetail from "./components/produk/ProdDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Landing from "./pages/Landing";
import ProductPage from "./pages/Product";

function getCartFromLocal() {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch {
    return [];
  }
}

function App() {
  const [cart, setCart] = useState(getCartFromLocal());

  // Sync cart state with localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Handler untuk add to cart
  const handleAddToCart = (product) => {
    setCart(prev => {
      const exist = prev.find(item => item.id === product.id);
      if (exist) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  // Handler untuk ubah qty
  const handleQtyChange = (id, qty) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item
      )
    );
  };

  // Handler untuk hapus item
  const handleRemove = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // Handler checkout (kosongkan cart)
  const handleCheckout = () => {
    setCart([]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/produk" element={<ProductPage />} />
        <Route path="/produk/:id" element={<ProdDetail onAddToCart={handleAddToCart} />} />
        <Route path="/kontak" element={<Contact />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Cart
        items={cart}
        onQtyChange={handleQtyChange}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />
    </Router>
  );
}

export default App;