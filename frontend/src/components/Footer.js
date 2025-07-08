import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaInstagram } from "react-icons/fa";

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

export default function Footer() {
  return (
    <footer
      style={{
        background: GREEN_THEME.surface,
        color: GREEN_THEME.textDim,
        fontFamily: FONT.family,
        padding: "40px 0 18px 0",
        borderTop: `2px solid ${GREEN_THEME.border}`,
        boxShadow: `0 -4px 32px ${GREEN_THEME.shadow}`,
      }}
    >
      <Container>
        <Row className="align-items-center" style={{ marginBottom: 24 }}>
          <Col xs={12} md={4} style={{ textAlign: "center", marginBottom: 18 }}>
            {/* Logo mini */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontWeight: FONT.headerWeight,
                fontSize: 22,
                color: GREEN_THEME.accent,
                background: GREEN_THEME.hover,
                borderRadius: 10,
                padding: "8px 18px",
                boxShadow: `0 2px 8px ${GREEN_THEME.shadow}`,
                letterSpacing: 1.2,
              }}
            >
              <span style={{ fontWeight: 900, fontSize: 26, color: GREEN_THEME.neon }}>🏕️</span>
              <span style={{ color: GREEN_THEME.text, fontWeight: FONT.bodyWeight, fontSize: 18 }}>
                Campora
              </span>
            </div>
          </Col>
          <Col xs={12} md={4} style={{ textAlign: "center", marginBottom: 18 }}>
            {/* Navigasi */}
            <nav style={{ display: "flex", justifyContent: "center", gap: 24 }}>
              <a href="/" style={{ color: GREEN_THEME.textDim, textDecoration: "none", fontWeight: FONT.headerWeight, transition: "color 0.2s" }}
                onMouseOver={e => e.currentTarget.style.color = GREEN_THEME.accent}
                onMouseOut={e => e.currentTarget.style.color = GREEN_THEME.textDim}
              >Home</a>
              <a href="/produk" style={{ color: GREEN_THEME.textDim, textDecoration: "none", fontWeight: FONT.headerWeight, transition: "color 0.2s" }}
                onMouseOver={e => e.currentTarget.style.color = GREEN_THEME.accent}
                onMouseOut={e => e.currentTarget.style.color = GREEN_THEME.textDim}
              >Produk</a>
              <a href="/tentang" style={{ color: GREEN_THEME.textDim, textDecoration: "none", fontWeight: FONT.headerWeight, transition: "color 0.2s" }}
                onMouseOver={e => e.currentTarget.style.color = GREEN_THEME.accent}
                onMouseOut={e => e.currentTarget.style.color = GREEN_THEME.textDim}
              >Tentang</a>
              <a href="/faq" style={{ color: GREEN_THEME.textDim, textDecoration: "none", fontWeight: FONT.headerWeight, transition: "color 0.2s" }}
                onMouseOver={e => e.currentTarget.style.color = GREEN_THEME.accent}
                onMouseOut={e => e.currentTarget.style.color = GREEN_THEME.textDim}
              >FAQ</a>
              <a href="/kontak" style={{ color: GREEN_THEME.textDim, textDecoration: "none", fontWeight: FONT.headerWeight, transition: "color 0.2s" }}
                onMouseOver={e => e.currentTarget.style.color = GREEN_THEME.accent}
                onMouseOut={e => e.currentTarget.style.color = GREEN_THEME.textDim}
              >Kontak</a>
            </nav>
          </Col>
          <Col xs={12} md={4} style={{ textAlign: "center" }}>
            {/* Social Media */}
            <div style={{ display: "flex", justifyContent: "center", gap: 18 }}>
              <a href="https://www.instagram.com/campora.official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                style={{ transition: "transform 0.2s" }}
                onMouseOver={e => e.currentTarget.firstChild.style.color = GREEN_THEME.neon}
                onMouseOut={e => e.currentTarget.firstChild.style.color = GREEN_THEME.accent}
              >
                <FaInstagram size={26} color={GREEN_THEME.accent} />
              </a>
              <a href="https://github.com/cbraind" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                style={{ transition: "transform 0.2s" }}
                onMouseOver={e => e.currentTarget.firstChild.style.color = GREEN_THEME.neon}
                onMouseOut={e => e.currentTarget.firstChild.style.color = GREEN_THEME.accent}
              >
                <FaGithub size={26} color={GREEN_THEME.accent} />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} style={{ textAlign: "center", fontSize: 15, color: GREEN_THEME.textDim }}>
            <div style={{ marginBottom: 6 }}>
              Email: <a href="mailto:campora.support@gmail.com" style={{ color: GREEN_THEME.accent, textDecoration: "none" }}>campora.support@gmail.com</a> | WA: <a href="https://wa.me/6281234567890" style={{ color: GREEN_THEME.accent, textDecoration: "none" }}>+62 812-3456-7890</a>
            </div>
            <div style={{ fontSize: 13, marginTop: 4 }}>
              &copy; {new Date().getFullYear()} Campora by CBraind. All rights reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}