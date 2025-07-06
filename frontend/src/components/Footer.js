import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";

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

export default function Footer() {
  return (
    <footer
      style={{
        background: CYBER.surface,
        color: CYBER.textDim,
        fontFamily: FONT.family,
        padding: "40px 0 18px 0",
        borderTop: `2px solid ${CYBER.accent2}22`,
        boxShadow: `0 -4px 32px ${CYBER.surface}33`,
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
                color: CYBER.accent,
                background: CYBER.bg,
                borderRadius: 10,
                padding: "8px 18px",
                boxShadow: `0 2px 8px ${CYBER.accent2}22`,
                letterSpacing: 1.2,
              }}
            >
              <span style={{ fontWeight: 900, fontSize: 26, color: CYBER.neon }}>MP</span>
              <span style={{ color: CYBER.text, fontWeight: FONT.bodyWeight, fontSize: 18 }}>
                MarketPlace
              </span>
            </div>
          </Col>
          <Col xs={12} md={4} style={{ textAlign: "center", marginBottom: 18 }}>
            {/* Navigasi */}
            <nav style={{ display: "flex", justifyContent: "center", gap: 24 }}>
              <a href="/" style={{ color: CYBER.textDim, textDecoration: "none", fontWeight: FONT.headerWeight, transition: "color 0.2s" }}
                onMouseOver={e => e.currentTarget.style.color = CYBER.accent}
                onMouseOut={e => e.currentTarget.style.color = CYBER.textDim}
              >Home</a>
              <a href="/produk" style={{ color: CYBER.textDim, textDecoration: "none", fontWeight: FONT.headerWeight, transition: "color 0.2s" }}
                onMouseOver={e => e.currentTarget.style.color = CYBER.accent}
                onMouseOut={e => e.currentTarget.style.color = CYBER.textDim}
              >Produk</a>
              <a href="/tentang" style={{ color: CYBER.textDim, textDecoration: "none", fontWeight: FONT.headerWeight, transition: "color 0.2s" }}
                onMouseOver={e => e.currentTarget.style.color = CYBER.accent}
                onMouseOut={e => e.currentTarget.style.color = CYBER.textDim}
              >Tentang</a>
              <a href="/kontak" style={{ color: CYBER.textDim, textDecoration: "none", fontWeight: FONT.headerWeight, transition: "color 0.2s" }}
                onMouseOver={e => e.currentTarget.style.color = CYBER.accent}
                onMouseOut={e => e.currentTarget.style.color = CYBER.textDim}
              >Kontak</a>
            </nav>
          </Col>
          <Col xs={12} md={4} style={{ textAlign: "center" }}>
            {/* Social Media */}
            <div style={{ display: "flex", justifyContent: "center", gap: 18 }}>
              <a href="https://www.instagram.com/developerarea25/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                style={{ transition: "transform 0.2s" }}
                onMouseOver={e => e.currentTarget.firstChild.style.color = CYBER.neon}
                onMouseOut={e => e.currentTarget.firstChild.style.color = CYBER.accent}
              >
                <FaInstagram size={26} color={CYBER.accent} />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} style={{ textAlign: "center", fontSize: 15, color: CYBER.textDim }}>
            <div style={{ marginBottom: 6 }}>
              Email: <a href="merchdevmarket@gmail.com" style={{ color: CYBER.accent, textDecoration: "none" }}>merchdevmarket@gmail.com</a> | WA: <a href="https://wa.me/6281234567890" style={{ color: CYBER.accent, textDecoration: "none" }}>+62 812-3456-7890</a>
            </div>
            <div style={{ fontSize: 13, marginTop: 4 }}>
              &copy; {new Date().getFullYear()} MarketPlace Dev. All rights reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}