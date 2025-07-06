import React, { useState } from "react";
import ProdList from "../components/produk/ProdList";
import ProdDetail from "../components/produk/ProdDetail";
import Cart from "../components/produk/Cart";
import MainNavbar from "../components/Navbar";
import Footer from "../components/Footer";

// Contoh penggunaan Cart (dummy state & handler)
export default function ProductPage() {
  // Dummy cart state
  const [cartItems, setCartItems] = useState([]);

  // Handler untuk ubah qty
  const handleQtyChange = (id, qty) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item
      )
    );
  };

  // Handler untuk hapus item
  const handleRemove = id => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  // Handler untuk checkout
  const handleCheckout = () => {
    alert("Checkout berhasil!");
    setCartItems([]);
  };

  return (
    <>
      <MainNavbar />
      <div style={{ minHeight: "80vh", background: "#181A20", padding: "36px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 12px" }}>
          <ProdList />
          {/* <ProdDetail productId="id-produk" /> */}
          <div style={{ margin: "48px 0 0 0" }}>
            <Cart
              items={cartItems}
              onQtyChange={handleQtyChange}
              onRemove={handleRemove}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}