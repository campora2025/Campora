import PropTypes from "prop-types";
import { useState } from "react";
import { Badge, Button, Toast, ToastContainer } from "react-bootstrap";
import { FaArrowLeft, FaInstagram, FaShareAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { categories } from "../../data/categories";
import { products } from "../../data/products";
import AdminSelector from "../AdminSelector";
import PickupCalculator from "../PickupCalculator";
import ReferralCode from "../ReferralCode";

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

// Spesifikasi produk sesuai dengan jenis produk KKN
function getSpecs(product) {
  const specs = [
    { label: "Kategori", value: getCategoryName(product.category) },
    { label: "Harga", value: `Rp${product.price.toLocaleString("id-ID")}` },
  ];

  // Spesifikasi berdasarkan jenis produk
  switch(product.id) {
    case 'id-card':
      specs.push(
        { label: "Material", value: "PVC Premium" },
        { label: "Ukuran", value: "85 x 55 mm" },
        { label: "Finishing", value: "Waterproof + Lanyard" },
        { label: "Design", value: "Custom sesuai universitas" }
      );
      break;
    case 'banner':
      specs.push(
        { label: "Material", value: "Flexi Korea 280gsm" },
        { label: "Ukuran", value: "Custom (per meter)" },
        { label: "Finishing", value: "Mata ayam + tali" },
        { label: "Ketahanan", value: "Outdoor 6-12 bulan" }
      );
      break;
    case 'plakat':
      specs.push(
        { label: "Material", value: "Akrilik Premium" },
        { label: "Ukuran", value: "20 x 15 cm" },
        { label: "Ketebalan", value: "5mm" },
        { label: "Finishing", value: "Laser cutting + UV print" }
      );
      break;
    case 'vest':
    case 'vest-opsi':
      specs.push(
        { label: "Material", value: product.id === 'vest-opsi' ? "Dry-fit Premium" : "Polyester" },
        { label: "Ukuran", value: "S, M, L, XL, XXL" },
        { label: "Sablon", value: "DTF Premium" },
        { label: "Fitur", value: product.id === 'vest-opsi' ? "Multi kantong + breathable" : "Standard fit" }
      );
      break;
    case 'baju':
      specs.push(
        { label: "Material", value: "Cotton Combed 30s" },
        { label: "Ukuran", value: "S, M, L, XL, XXL" },
        { label: "Sablon", value: "Plastisol" },
        { label: "Gramasi", value: "180gsm" }
      );
      break;
    case 'pickup':
      specs.push(
        { label: "Kapasitas", value: "Hingga 1 ton" },
        { label: "Include", value: "Driver + BBM + Asuransi" },
        { label: "Radius", value: "Seluruh Jawa" },
        { label: "Tarif", value: "Rp 30.000/km (gratis 5km pertama)" }
      );
      break;
    default:
      if (product.category === 'bundle') {
        specs.push(
          { label: "Isi Paket", value: product.includes ? product.includes.join(", ") : "Lihat deskripsi" },
          { label: "Cocok untuk", value: "Tim KKN 5-10 orang" },
          { label: "Hemat", value: "Lebih murah 15-20% dari beli terpisah" },
          { label: "Include", value: "Design custom gratis" }
        );
      }
  }

  return specs;
}

export default function ProdDetail({ productId: propProductId, onAddToCart }) {
  const params = useParams();
  const navigate = useNavigate();
  const productId = propProductId || params.id;
  const product = products.find(p => p.id === productId);

  const [showToast, setShowToast] = useState(false);
  const [pickupCalculation, setPickupCalculation] = useState(null);
  const [referralData, setReferralData] = useState(null);

  if (!product) {
    return (
      <div style={{
        minHeight: "100vh",
        background: GREEN_THEME.bg,
        color: GREEN_THEME.text,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <h2 style={{ color: GREEN_THEME.accent }}>Produk tidak ditemukan</h2>
        <Button
          variant="secondary"
          style={{
            marginTop: 24,
            background: GREEN_THEME.surface,
            color: GREEN_THEME.text,
            border: `2px solid ${GREEN_THEME.accent2}22`,
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
        background: `linear-gradient(120deg, ${GREEN_THEME.bg} 80%, ${GREEN_THEME.surface} 100%)`,
        color: GREEN_THEME.text,
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
          background: GREEN_THEME.bg,
          borderRadius: 20,
          boxShadow: `0 2px 16px ${GREEN_THEME.accent2}22`,
          border: `2px solid ${GREEN_THEME.surface}`,
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
              background: GREEN_THEME.surface,
              boxShadow: `0 2px 12px ${GREEN_THEME.accent2}22`
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
          background: GREEN_THEME.surface,
          borderRadius: 18,
          boxShadow: `0 2px 12px ${GREEN_THEME.accent2}22`,
          padding: "32px 32px 32px 32px"
        }}>
          <Badge bg="dark" style={{
            background: GREEN_THEME.accent2,
            color: GREEN_THEME.bg,
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
            color: GREEN_THEME.text,
            letterSpacing: 1.1,
            marginBottom: 6,
            textShadow: `0 1px 4px ${GREEN_THEME.surface}66`
          }}>
            {product.name}
          </h2>
          <div style={{
            color: GREEN_THEME.textDim,
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
            color: GREEN_THEME.accent,
            margin: "10px 0 18px 0",
          }}>
            Rp{product.price.toLocaleString("id-ID")}
          </div>
          {/* Spesifikasi */}
          <div style={{
            margin: "10px 0 18px 0",
            background: GREEN_THEME.bg,
            borderRadius: 12,
            padding: "18px 18px 12px 18px",
            boxShadow: `0 1px 8px ${GREEN_THEME.accent2}11`
          }}>
            <div style={{
              fontWeight: FONT.headerWeight,
              fontSize: 17,
              color: GREEN_THEME.accent2,
              marginBottom: 10,
              letterSpacing: 0.5
            }}>Spesifikasi Produk</div>
            <table style={{ width: "100%", color: GREEN_THEME.text, fontSize: 15 }}>
              <tbody>
                {specs.map((spec, idx) => (
                  <tr key={idx}>
                    <td style={{ padding: "4px 0", color: GREEN_THEME.textDim, width: 120 }}>{spec.label}</td>
                    <td style={{ padding: "4px 0", color: GREEN_THEME.text }}>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Tombol aksi */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 8 }}>
            <Button
              style={{
                background: GREEN_THEME.surface,
                color: GREEN_THEME.accent,
                border: `2px solid ${GREEN_THEME.accent2}22`,
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
              <FaShareAlt size={18} /> Share Produk
            </Button>
            <Button
              style={{
                background: GREEN_THEME.surface,
                color: "#E1306C",
                border: `2px solid ${GREEN_THEME.accent2}22`,
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
              <FaInstagram size={18} /> Copy Link
            </Button>
          </div>
          <Button
            variant="secondary"
            style={{
              background: GREEN_THEME.bg,
              color: GREEN_THEME.text,
              border: `2px solid ${GREEN_THEME.accent2}22`,
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

          {/* AdminSelector untuk direct checkout */}
          <AdminSelector
            productInfo={{
              name: product.name,
              price: product.price,
              category: getCategoryName(product.category),
              includes: product.includes || []
            }}
            pickupInfo={pickupCalculation}
            referralInfo={referralData}
            onAdminSelected={(admin, message) => {
              setShowToast(true);
            }}
          />
        </div>

        {/* Kalkulator Pickup dan Referral Code - untuk produk pickup dan bundle */}
        {(product.id === 'pickup' || product.category === 'bundle' || product.name.toLowerCase().includes('pickup')) && (
          <div style={{
            flex: "1 1 100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}>
            {/* Kalkulator Pickup - muncul untuk semua produk yang ada pickup */}
            {(product.id === 'pickup' || product.category === 'bundle' || product.name.toLowerCase().includes('pickup')) && (
              <PickupCalculator 
                onPriceCalculated={setPickupCalculation}
                productType={product.category === 'bundle' ? 'bundle' : 'pickup'}
              />
            )}
            
            {/* Kode Referral */}
            <ReferralCode 
              onReferralValidated={setReferralData}
            />

            {/* Summary dengan informasi pickup dan referral */}
            {(pickupCalculation || referralData) && (
              <div style={{
                background: GREEN_THEME.surface,
                border: `2px solid ${GREEN_THEME.border}`,
                borderRadius: '12px',
                padding: '20px'
              }}>
                <h4 style={{
                  color: GREEN_THEME.text,
                  marginBottom: '15px',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}>
                  📋 Ringkasan Pesanan
                </h4>

                <div style={{
                  background: GREEN_THEME.bg,
                  padding: '15px',
                  borderRadius: '8px',
                  marginBottom: '15px'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                    color: GREEN_THEME.text
                  }}>
                    <span>Harga Produk:</span>
                    <span style={{ fontWeight: 'bold' }}>
                      Rp {product.price.toLocaleString('id-ID')}
                    </span>
                  </div>

                  {pickupCalculation && (
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '10px',
                      color: GREEN_THEME.text
                    }}>
                      <span>Biaya Pickup ({pickupCalculation.distance} km):</span>
                      <span style={{ 
                        fontWeight: 'bold',
                        color: pickupCalculation.isFree ? GREEN_THEME.neon : GREEN_THEME.text
                      }}>
                        {pickupCalculation.isFree ? 'GRATIS' : `Rp ${pickupCalculation.finalPrice.toLocaleString('id-ID')}`}
                      </span>
                    </div>
                  )}

                  <hr style={{ margin: '10px 0', borderColor: GREEN_THEME.border }} />
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: GREEN_THEME.accent
                  }}>
                    <span>Total:</span>
                    <span>
                      Rp {(product.price + (pickupCalculation?.finalPrice || 0)).toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                {referralData?.isValid && (
                  <div style={{
                    background: GREEN_THEME.hover,
                    padding: '12px',
                    borderRadius: '8px',
                    border: `1px solid ${GREEN_THEME.neon}`,
                    fontSize: '14px',
                    color: GREEN_THEME.text
                  }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                      ✅ Menggunakan Kode Referral: {referralData.affiliate.code}
                    </div>
                    <div>
                      📞 Kontak Affiliate: {referralData.affiliate.name} ({referralData.affiliate.phone})
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
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
          <Toast.Body style={{ color: GREEN_THEME.text }}>
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