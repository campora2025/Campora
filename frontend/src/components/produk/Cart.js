import PropTypes from "prop-types";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaCheckCircle, FaCode, FaMinus, FaPlus, FaShoppingCart, FaTimes, FaTrash } from "react-icons/fa";

// Style konsisten dengan CategProd.js
const GREEN_THEME = {
  bg: "#f8fffe",
  surface: "#ffffff",
  accent: "#16a085",
  accent2: "#27ae60",
  text: "#1a4d40",
  textDim: "#4a7068",
  neon: "#2ecc71",
  border: "#e8f6f3",
  hover: "#d5f4ef",
  shadow: "rgba(22, 160, 133, 0.1)",
};
const FONT = {
  family: "'Fira Mono', 'JetBrains Mono', 'Roboto Mono', 'Consolas', monospace",
  headerWeight: 700,
  bodyWeight: 400,
};

function getOrderMessage(items, total) {
  let msg = `Halo, saya ingin order di C-Devia Mart:%0A`;
  items.forEach((item, idx) => {
    msg += `${idx + 1}. ${item.name} x${item.qty} - Rp${item.price.toLocaleString("id-ID")}%0A`;
  });
  msg += `%0ATotal: Rp${total.toLocaleString("id-ID")}`;
  return msg;
}

export default function Cart({ items, onQtyChange, onRemove, onCheckout }) {
  const [open, setOpen] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Handler checkout dengan animasi dan kirim WA
  const handleCheckout = () => {
    setShowThanks(true);
    setTimeout(() => {
      setShowThanks(false);
      setOpen(false);
      if (onCheckout) onCheckout();
      // Kirim ke WhatsApp
      const msg = getOrderMessage(items, total);
      window.open(`https://wa.me/6285788322061?text=${msg}`, "_blank");
    }, 4600); // animasi 4.6 detik
  };

  // Floating cart icon button
  return (
    <>
      {/* Floating Cart Icon */}
      <div
        style={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 9999,
        }}
      >
        <Button
          style={{
            background: GREEN_THEME.accent,
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: 60,
            height: 60,
            boxShadow: `0 4px 16px ${GREEN_THEME.accent2}33`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
            position: "relative",
            transition: "background 0.2s",
          }}
          onClick={() => setOpen(true)}
        >
          <FaShoppingCart />
          {items.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                background: GREEN_THEME.neon,
                color: GREEN_THEME.bg,
                borderRadius: "50%",
                fontSize: 13,
                fontWeight: FONT.headerWeight,
                padding: "2px 7px",
                minWidth: 22,
                textAlign: "center",
                border: `2px solid ${GREEN_THEME.surface}`,
                boxShadow: `0 1px 4px ${GREEN_THEME.accent2}55`,
              }}
            >
              {items.length}
            </span>
          )}
        </Button>
      </div>

      {/* Slide-out Cart Drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: 370,
          maxWidth: "100vw",
          background: GREEN_THEME.surface,
          color: GREEN_THEME.text,
          fontFamily: FONT.family,
          borderLeft: `2px solid ${GREEN_THEME.accent2}22`,
          boxShadow: open ? `-4px 0 32px ${GREEN_THEME.surface}88` : "none",
          zIndex: 10000,
          transform: open ? "translateX(0)" : "translateX(110%)",
          transition: "transform 0.35s cubic-bezier(.77,0,.18,1)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "22px 24px 10px 24px",
          borderBottom: `2px solid ${GREEN_THEME.accent2}22`,
          background: GREEN_THEME.surface,
        }}>
          <h2 style={{
            fontWeight: FONT.headerWeight,
            fontSize: 22,
            margin: 0,
            color: GREEN_THEME.text,
            letterSpacing: 1.1,
          }}>
            Keranjang Belanja
          </h2>
          <Button
            variant="link"
            style={{
              color: GREEN_THEME.textDim,
              fontSize: 22,
              border: "none",
              background: "none",
              marginLeft: 8,
              boxShadow: "none",
            }}
            onClick={() => setOpen(false)}
            aria-label="Tutup"
          >
            <FaTimes />
          </Button>
        </div>
        {/* Cart Content */}
        <div style={{
          flex: 1,
          overflowY: "auto",
          padding: "18px 24px 0 24px",
        }}>
          {items.length === 0 ? (
            <div style={{ color: GREEN_THEME.textDim, textAlign: "center", margin: "48px 0" }}>
              Keranjang kosong.
            </div>
          ) : (
            items.map(item => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 18,
                  background: GREEN_THEME.bg,
                  borderRadius: 10,
                  padding: "10px 12px",
                  boxShadow: `0 2px 8px ${GREEN_THEME.accent2}22`,
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: 54,
                    height: 54,
                    objectFit: "cover",
                    borderRadius: 8,
                    border: `2px solid ${GREEN_THEME.surface}`,
                    background: GREEN_THEME.surface,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: FONT.headerWeight, fontSize: 16, color: GREEN_THEME.text }}>
                    {item.name}
                  </div>
                  <div style={{ color: GREEN_THEME.textDim, fontSize: 14 }}>
                    Rp{item.price.toLocaleString("id-ID")}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
                    <Button
                      size="sm"
                      variant="dark"
                      style={{
                        background: GREEN_THEME.surface,
                        color: GREEN_THEME.accent,
                        border: `1px solid ${GREEN_THEME.accent2}22`,
                        borderRadius: 6,
                        padding: "2px 8px",
                        fontWeight: FONT.headerWeight,
                      }}
                      onClick={() => onQtyChange(item.id, item.qty - 1)}
                      disabled={item.qty <= 1}
                    >
                      <FaMinus />
                    </Button>
                    <span style={{ minWidth: 24, textAlign: "center", color: GREEN_THEME.text }}>
                      {item.qty}
                    </span>
                    <Button
                      size="sm"
                      variant="dark"
                      style={{
                        background: GREEN_THEME.surface,
                        color: GREEN_THEME.accent,
                        border: `1px solid ${GREEN_THEME.accent2}22`,
                        borderRadius: 6,
                        padding: "2px 8px",
                        fontWeight: FONT.headerWeight,
                      }}
                      onClick={() => onQtyChange(item.id, item.qty + 1)}
                    >
                      <FaPlus />
                    </Button>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="danger"
                  style={{
                    background: GREEN_THEME.accent,
                    color: "#fff",
                    border: "none",
                    borderRadius: 6,
                    padding: "6px 10px",
                    marginLeft: 8,
                  }}
                  onClick={() => onRemove(item.id)}
                >
                  <FaTrash />
                </Button>
              </div>
            ))
          )}
        </div>
        {/* Footer */}
        <div style={{
          borderTop: `2px solid ${GREEN_THEME.accent2}22`,
          padding: "16px 24px",
          background: GREEN_THEME.surface,
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: FONT.headerWeight,
            fontSize: 18,
            color: GREEN_THEME.text,
            marginBottom: 10,
          }}>
            <span>Total</span>
            <span>Rp{total.toLocaleString("id-ID")}</span>
          </div>
          <Button
            style={{
              background: GREEN_THEME.neon,
              color: GREEN_THEME.bg,
              border: "none",
              borderRadius: 8,
              padding: "12px 28px",
              fontWeight: FONT.headerWeight,
              fontSize: 18,
              letterSpacing: 0.8,
              boxShadow: `0 2px 8px ${GREEN_THEME.accent2}22`,
              width: "100%",
              marginTop: 2,
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = GREEN_THEME.accent;
              e.currentTarget.style.color = GREEN_THEME.text;
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = GREEN_THEME.neon;
              e.currentTarget.style.color = GREEN_THEME.bg;
            }}
            onClick={handleCheckout}
            disabled={items.length === 0}
          >
            Checkout
          </Button>
        </div>
      </div>
      {/* Overlay when cart open */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "#0008",
            zIndex: 9998,
            cursor: "pointer",
          }}
        />
      )}
      {/* Animasi Terima Kasih */}
      {showThanks && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(24,26,32,0.97)",
            zIndex: 20000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            animation: "fadeIn 0.3s",
          }}
        >
          <div style={{
            background: GREEN_THEME.surface,
            borderRadius: 24,
            padding: "48px 36px",
            boxShadow: `0 4px 32px ${GREEN_THEME.accent2}55`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 18,
            border: `2px solid ${GREEN_THEME.accent2}44`,
            position: "relative"
          }}>
            {/* Animasi Informatika */}
            <div style={{
              fontSize: 64,
              color: GREEN_THEME.neon,
              marginBottom: 8,
              animation: "spin 1.2s cubic-bezier(.77,0,.18,1) infinite alternate"
            }}>
              <FaCode />
            </div>
            <div style={{
              fontWeight: FONT.headerWeight,
              fontSize: 28,
              color: GREEN_THEME.accent2,
              textAlign: "center",
              marginBottom: 6,
              letterSpacing: 1.2,
              textShadow: `0 2px 8px ${GREEN_THEME.accent2}33`
            }}>
              Terima Kasih Sudah Order!
            </div>
            <div style={{
              color: GREEN_THEME.text,
              fontSize: 18,
              textAlign: "center",
              marginBottom: 8,
              maxWidth: 320,
            }}>
              Pesananmu sedang diproses. <br />
              <span style={{ color: GREEN_THEME.neon, fontWeight: 600 }}>Tetap semangat ngoding!</span>
            </div>
            <div style={{
              fontSize: 22,
              color: GREEN_THEME.accent,
              marginTop: 8,
              animation: "bounce 1.2s infinite alternate"
            }}>
              <FaCheckCircle />
            </div>
          </div>
          {/* Animasi CSS */}
          <style>
            {`
              @keyframes spin {
                0% { transform: rotate(-18deg) scale(1);}
                100% { transform: rotate(18deg) scale(1.12);}
              }
              @keyframes bounce {
                0% { transform: translateY(0);}
                100% { transform: translateY(-14px);}
              }
              @keyframes fadeIn {
                from { opacity: 0;}
                to { opacity: 1;}
              }
            `}
          </style>
        </div>
      )}
    </>
  );
}

Cart.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
      qty: PropTypes.number,
    })
  ).isRequired,
  onQtyChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onCheckout: PropTypes.func.isRequired,
};