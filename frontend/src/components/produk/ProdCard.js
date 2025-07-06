import PropTypes from "prop-types";
import { Badge, Button, Card } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { categories } from "../../data/categories";

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
        background: CYBER.surface,
        color: CYBER.text,
        border: `2px solid ${CYBER.accent2}22`,
        borderRadius: 18,
        boxShadow: `0 2px 12px ${CYBER.accent}22`,
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
        e.currentTarget.style.boxShadow = `0 6px 24px ${CYBER.accent}44`;
        e.currentTarget.style.border = `2px solid ${CYBER.neon}`;
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = `0 2px 12px ${CYBER.accent}22`;
        e.currentTarget.style.border = `2px solid ${CYBER.accent2}22`;
      }}
    >
      <div style={{
        width: "100%",
        height: 170,
        background: CYBER.bg,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderBottom: `2px solid ${CYBER.surface}`,
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
          background: CYBER.accent2,
          color: CYBER.bg,
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
          color: CYBER.text,
          letterSpacing: 0.8,
          textShadow: `0 1px 4px ${CYBER.surface}66`,
          textAlign: "center",
        }}>
          {product.name}
        </Card.Title>
        <Card.Text style={{
          color: CYBER.textDim,
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
            background: CYBER.bg,
            borderRadius: 8,
            border: `1px solid ${CYBER.accent2}33`
          }}>
            <div style={{
              fontSize: 12,
              color: CYBER.accent2,
              fontWeight: FONT.headerWeight,
              marginBottom: 4,
              textAlign: "center"
            }}>
              Termasuk:
            </div>
            <ul style={{
              color: CYBER.textDim,
              fontSize: 12,
              margin: 0,
              paddingLeft: 16,
              listStyle: "disc"
            }}>
              {product.includes.slice(0, 3).map((item, idx) => (
                <li key={idx} style={{ marginBottom: 2 }}>{item}</li>
              ))}
              {product.includes.length > 3 && (
                <li style={{ color: CYBER.accent, fontStyle: "italic" }}>
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
            color: CYBER.neon,
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
          color: CYBER.accent,
          margin: "8px 0 14px 0",
        }}>
          Rp{product.price.toLocaleString("id-ID")}
        </div>
        <Button
          style={{
            background: CYBER.neon,
            color: CYBER.bg,
            border: "none",
            borderRadius: 8,
            padding: "10px 22px",
            fontWeight: FONT.headerWeight,
            fontSize: 16,
            letterSpacing: 0.6,
            boxShadow: `0 2px 8px ${CYBER.accent2}22`,
            display: "flex",
            alignItems: "center",
            gap: 8,
            transition: "background 0.2s, color 0.2s",
          }}
          onClick={() => navigate(`/produk/${product.id}`)}
          onMouseOver={e => {
            e.currentTarget.style.background = CYBER.accent;
            e.currentTarget.style.color = CYBER.text;
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = CYBER.neon;
            e.currentTarget.style.color = CYBER.bg;
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