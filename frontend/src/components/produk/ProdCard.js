import PropTypes from "prop-types";
import { Badge, Button, Card } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { categories } from "../../data/categories";

// Style konsisten dengan tema hijau light mode
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

// Helper untuk dapatkan nama kategori dari id
function getCategoryName(catId) {
  const cat = categories.find(c => c.id === catId);
  return cat ? cat.name : catId;
}

export default function ProdCard({ product }) {
  const navigate = useNavigate();

  return (
    <Card
      style={{
        background: GREEN_THEME.surface,
        color: GREEN_THEME.text,
        border: `2px solid ${GREEN_THEME.border}`,
        borderRadius: 18,
        boxShadow: `0 2px 12px ${GREEN_THEME.shadow}`,
        transition: "transform 0.25s cubic-bezier(.25,.8,.25,1), box-shadow 0.2s, border 0.2s",
        cursor: "pointer",
        minWidth: 200,
        maxWidth: 270,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="prod-card"
      onMouseOver={e => {
        e.currentTarget.style.transform = "translateY(-8px) scale(1.04)";
        e.currentTarget.style.boxShadow = `0 6px 24px ${GREEN_THEME.shadow}`;
        e.currentTarget.style.border = `2px solid ${GREEN_THEME.neon}`;
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = `0 2px 12px ${GREEN_THEME.shadow}`;
        e.currentTarget.style.border = `2px solid ${GREEN_THEME.border}`;
      }}
    >
      <div style={{
        width: "100%",
        height: 170,
        background: GREEN_THEME.hover,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderBottom: `2px solid ${GREEN_THEME.border}`,
      }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <Card.Body style={{ width: "100%", padding: 18, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Badge bg="dark" style={{
          background: GREEN_THEME.accent2,
          color: "#fff",
          fontWeight: FONT.headerWeight,
          fontSize: 13,
          marginBottom: 8,
          letterSpacing: 0.5,
          borderRadius: 8,
          padding: "4px 12px"
        }}>
          {getCategoryName(product.category)}
        </Badge>
        <Card.Title style={{
          fontWeight: FONT.headerWeight,
          fontSize: 18,
          color: GREEN_THEME.text,
          letterSpacing: 0.8,
          textShadow: `0 1px 4px ${GREEN_THEME.shadow}`,
          textAlign: "center",
        }}>
          {product.name}
        </Card.Title>
        <Card.Text style={{
          color: GREEN_THEME.textDim,
          fontWeight: FONT.bodyWeight,
          fontSize: 15,
          textAlign: "center",
          letterSpacing: 0.2,
          minHeight: 48,
        }}>
          {product.description}
        </Card.Text>

        {/* Show includes if available (for KKN packages) */}
        {product.includes && (
          <div style={{
            width: "100%",
            marginBottom: 12,
            padding: "8px 12px",
            background: GREEN_THEME.bg,
            borderRadius: 8,
            border: `1px solid ${GREEN_THEME.accent2}33`
          }}>
            <div style={{
              fontSize: 12,
              color: GREEN_THEME.accent2,
              fontWeight: FONT.headerWeight,
              marginBottom: 4,
              textAlign: "center"
            }}>
              Termasuk:
            </div>
            <ul style={{
              color: GREEN_THEME.textDim,
              fontSize: 12,
              margin: 0,
              paddingLeft: 16,
              listStyle: "disc"
            }}>
              {product.includes.slice(0, 3).map((item, idx) => (
                <li key={idx} style={{ marginBottom: 2 }}>{item}</li>
              ))}
              {product.includes.length > 3 && (
                <li style={{ color: GREEN_THEME.accent, fontStyle: "italic" }}>
                  +{product.includes.length - 3} lainnya
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Show estimation info if available */}
        {(product.estimasiOngkir || product.estimasiHarga) && (
          <div style={{
            fontSize: 11,
            color: GREEN_THEME.neon,
            textAlign: "center",
            marginBottom: 8,
            fontStyle: "italic"
          }}>
            {product.estimasiOngkir || product.estimasiHarga}
          </div>
        )}

        <div style={{
          fontWeight: FONT.headerWeight,
          fontSize: 17,
          color: GREEN_THEME.accent,
          margin: "8px 0 14px 0",
        }}>
          Rp{product.price.toLocaleString("id-ID")}
        </div>
        <Button
          style={{
            background: GREEN_THEME.neon,
            color: GREEN_THEME.bg,
            border: "none",
            borderRadius: 8,
            padding: "10px 22px",
            fontWeight: FONT.headerWeight,
            fontSize: 16,
            letterSpacing: 0.6,
            boxShadow: `0 2px 8px ${GREEN_THEME.accent2}22`,
            display: "flex",
            alignItems: "center",
            gap: 8,
            transition: "background 0.2s, color 0.2s",
          }}
          onClick={() => navigate(`/produk/${product.id}`)}
          onMouseOver={e => {
            e.currentTarget.style.background = GREEN_THEME.accent;
            e.currentTarget.style.color = GREEN_THEME.text;
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = GREEN_THEME.neon;
            e.currentTarget.style.color = GREEN_THEME.bg;
          }}
        >
          <FaInfoCircle size={18} /> Detail Produk
        </Button>
      </Card.Body>
    </Card>
  );
}

ProdCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
    whatsappMessage: PropTypes.string,
  }).isRequired,
};