import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import { categories } from "../../data/categories";
import { Button, Badge, Toast, ToastContainer } from "react-bootstrap";
import { FaArrowLeft, FaInstagram, FaShareAlt, FaCartPlus } from "react-icons/fa";

// Style konsisten dengan CategProd.js
const CYBER = {
  bg: "#181A20",
  surface: "#23242a",
  accent: "#FF5722",
  accent2: "#FFC107",
  text: "#E0E0E0",
  textDim: "#B0B0B0",
  neon: "#00bfae",
  border: "#23242a",
};
const FONT = {
  family: "'Fira Mono', 'JetBrains Mono', 'Roboto Mono', 'Consolas', monospace",
  headerWeight: 700,
  bodyWeight: 400,
};

function getCategoryName(catId) {
  const cat = categories.find(c => c.id === catId);
  return cat ? cat.name : catId;
}

function getProductUrl(productId) {
  return `${window.location.origin}/produk/${productId}`;
}

function addToCartLocal(product) {
  let cart = [];
  try {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
  } catch {}
  const exist = cart.find(item => item.id === product.id);
  if (exist) {
    cart = cart.map(item =>
      item.id === product.id ? { ...item, qty: item.qty + 1 } : item
    );
  } else {
    cart.push({ ...product, qty: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Dummy spesifikasi jika tidak ada di data produk
function getSpecs(product) {
  // Bisa di-improve sesuai kebutuhan
  return [
    { label: "Kategori", value: getCategoryName(product.category) },
    { label: "Harga", value: `Rp${product.price.toLocaleString("id-ID")}` },
    { label: "Material", value: product.category === "tshirt" || product.category === "hoodie" ? "Katun Premium" : product.category === "bracelet" ? "Silikon" : product.category === "sticker" ? "Vinyl" : "Polycotton" },
    { label: "Ukuran", value: product.category === "bracelet" ? "All Size" : "S, M, L, XL" },
    { label: "Warna", value: "Hitam, Putih, Abu-abu" },
    { label: "Model 3D", value: product.model3D ? "Tersedia" : "Tidak tersedia" },
  ];
}

export default function ProdDetail({ productId: propProductId, onAddToCart }) {
  const params = useParams();
  const navigate = useNavigate();
  const productId = propProductId || params.id;
  const product = products.find(p => p.id === productId);

  const [showToast, setShowToast] = useState(false);

  if (!product) {
    return (
      <div style={{
        minHeight: "100vh",
        background: CYBER.bg,
        color: CYBER.text,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <h2 style={{ color: CYBER.accent }}>Produk tidak ditemukan</h2>
        <Button
          variant="secondary"
          style={{
            marginTop: 24,
            background: CYBER.surface,
            color: CYBER.text,
            border: `2px solid ${CYBER.accent2}22`,
            borderRadius: 8,
            fontWeight: FONT.headerWeight,
            fontFamily: FONT.family,
          }}
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft style={{ marginRight: 8 }} /> Kembali
        </Button>
      </div>
    );
  }

  // Share ke WhatsApp
  const handleShareWA = () => {
    const url = getProductUrl(product.id);
    const text = `Cek produk ini di C-Devia Mart:\n${product.name}\n${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  // Share ke Instagram (copy link)
  const handleShareIG = () => {
    const url = getProductUrl(product.id);
    navigator.clipboard.writeText(url);
    setShowToast(true);
  };

  // Add to cart (localStorage)
    const handleAddToCart = () => {
      if (onAddToCart) onAddToCart(product);
      // Optional: tetap simpan ke localStorage untuk backup
      addToCartLocal(product);
      setShowToast(true);
    };

  // Dummy deskripsi tambahan jika tidak ada
  const longDesc = product.description
    ? product.description + " Produk ini dibuat dengan material berkualitas dan desain eksklusif untuk komunitas developer dan tech enthusiast."
    : "Produk ini dibuat dengan material berkualitas dan desain eksklusif untuk komunitas developer dan tech enthusiast.";

  const specs = getSpecs(product);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: `linear-gradient(120deg, ${CYBER.bg} 80%, ${CYBER.surface} 100%)`,
        color: CYBER.text,
        fontFamily: FONT.family,
        padding: 0,
        margin: 0,
        position: "relative",
        overflowX: "hidden"
      }}
    >
      <div style={{
        maxWidth: 1080,
        margin: "0 auto",
        padding: "48px 0 48px 0",
        display: "flex",
        flexWrap: "wrap",
        gap: 48,
        alignItems: "flex-start",
        justifyContent: "center"
      }}>
        {/* Gambar produk */}
        <div style={{
          background: CYBER.bg,
          borderRadius: 20,
          boxShadow: `0 2px 16px ${CYBER.accent2}22`,
          border: `2px solid ${CYBER.surface}`,
          padding: 24,
          minWidth: 300,
          maxWidth: 380,
          flex: "1 1 340px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              borderRadius: 14,
              marginBottom: 18,
              objectFit: "cover",
              background: CYBER.surface,
              boxShadow: `0 2px 12px ${CYBER.accent2}22`
            }}
          />
          {/* (Opsional) 3D Model viewer */}
          {/* <model-viewer src={product.model3D} ... /> */}
        </div>
        {/* Detail produk */}
        <div style={{
          flex: "2 1 400px",
          minWidth: 300,
          maxWidth: 540,
          display: "flex",
          flexDirection: "column",
          gap: 18,
          background: CYBER.surface,
          borderRadius: 18,
          boxShadow: `0 2px 12px ${CYBER.accent2}22`,
          padding: "32px 32px 32px 32px"
        }}>
          <Badge bg="dark" style={{
            background: CYBER.accent2,
            color: CYBER.bg,
            fontWeight: FONT.headerWeight,
            fontSize: 15,
            borderRadius: 8,
            padding: "7px 18px",
            alignSelf: "flex-start",
            marginBottom: 8,
            letterSpacing: 0.5,
          }}>
            {getCategoryName(product.category)}
          </Badge>
          <h2 style={{
            fontWeight: FONT.headerWeight,
            fontSize: 32,
            color: CYBER.text,
            letterSpacing: 1.1,
            marginBottom: 6,
            textShadow: `0 1px 4px ${CYBER.surface}66`
          }}>
            {product.name}
          </h2>
          <div style={{
            color: CYBER.textDim,
            fontWeight: FONT.bodyWeight,
            fontSize: 18,
            marginBottom: 10,
            minHeight: 40,
          }}>
            {longDesc}
          </div>
          <div style={{
            fontWeight: FONT.headerWeight,
            fontSize: 24,
            color: CYBER.accent,
            margin: "10px 0 18px 0",
          }}>
            Rp{product.price.toLocaleString("id-ID")}
          </div>
          {/* Spesifikasi */}
          <div style={{
            margin: "10px 0 18px 0",
            background: CYBER.bg,
            borderRadius: 12,
            padding: "18px 18px 12px 18px",
            boxShadow: `0 1px 8px ${CYBER.accent2}11`
          }}>
            <div style={{
              fontWeight: FONT.headerWeight,
              fontSize: 17,
              color: CYBER.accent2,
              marginBottom: 10,
              letterSpacing: 0.5
            }}>Spesifikasi Produk</div>
            <table style={{ width: "100%", color: CYBER.text, fontSize: 15 }}>
              <tbody>
                {specs.map((spec, idx) => (
                  <tr key={idx}>
                    <td style={{ padding: "4px 0", color: CYBER.textDim, width: 120 }}>{spec.label}</td>
                    <td style={{ padding: "4px 0", color: CYBER.text }}>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Tombol aksi */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 8 }}>
            <Button
              style={{
                background: CYBER.surface,
                color: CYBER.text,
                border: `2px solid ${CYBER.accent2}22`,
                borderRadius: 8,
                fontWeight: FONT.headerWeight,
                fontFamily: FONT.family,
                padding: "12px 22px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 17,
              }}
              onClick={handleAddToCart}
            >
              <FaCartPlus size={18} /> Tambah ke Keranjang
            </Button>
            <Button
              style={{
                background: CYBER.surface,
                color: CYBER.accent,
                border: `2px solid ${CYBER.accent2}22`,
                borderRadius: 8,
                fontWeight: FONT.headerWeight,
                fontFamily: FONT.family,
                padding: "12px 22px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 17,
              }}
              onClick={handleShareWA}
            >
              <FaShareAlt size={18} /> Share ke WA
            </Button>
            <Button
              style={{
                background: CYBER.surface,
                color: "#E1306C",
                border: `2px solid ${CYBER.accent2}22`,
                borderRadius: 8,
                fontWeight: FONT.headerWeight,
                fontFamily: FONT.family,
                padding: "12px 22px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 17,
              }}
              onClick={handleShareIG}
            >
              <FaInstagram size={18} /> Copy Link IG
            </Button>
          </div>
          <Button
            variant="secondary"
            style={{
              background: CYBER.bg,
              color: CYBER.text,
              border: `2px solid ${CYBER.accent2}22`,
              borderRadius: 8,
              fontWeight: FONT.headerWeight,
              fontFamily: FONT.family,
              marginTop: 6,
              width: "fit-content"
            }}
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft style={{ marginRight: 8 }} /> Kembali ke Produk
          </Button>
        </div>
      </div>
      {/* Toast notification */}
      <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 9999 }}>
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={1800}
          autohide
          bg="dark"
        >
          <Toast.Body style={{ color: CYBER.text }}>
            {`Berhasil! Link disalin atau produk ditambahkan ke keranjang.`}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

ProdDetail.propTypes = {
  productId: PropTypes.string,
};