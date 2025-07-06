import React, { useRef, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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

export default function Cta() {
  const navigate = useNavigate();
  const sectionRef = useRef();

  // Animasi masuk saat discroll ke area ini (bukan saat refresh)
  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 120) {
        sectionRef.current.style.transition = "opacity 0.7s cubic-bezier(.77,0,.18,1), transform 0.7s cubic-bezier(.77,0,.18,1)";
        sectionRef.current.style.opacity = 1;
        sectionRef.current.style.transform = "translateY(0)";
      }
    }
    window.addEventListener("scroll", handleScroll);
    // Reset state on mount (biar animasi hanya saat scroll)
    if (sectionRef.current) {
      sectionRef.current.style.opacity = 0;
      sectionRef.current.style.transform = "translateY(40px)";
    }
    // Jalankan sekali untuk kasus user sudah scroll ke bawah
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: `linear-gradient(120deg, ${CYBER.bg} 80%, ${CYBER.surface} 100%)`,
        color: CYBER.text,
        fontFamily: FONT.family,
        padding: "56px 0 48px 0",
        borderBottom: `2px solid ${CYBER.surface}`,
        boxShadow: `0 4px 32px ${CYBER.surface}33`,
        position: "relative",
        overflow: "hidden",
        opacity: 0, // for animation
        transform: "translateY(40px)", // for animation
      }}
    >
      {/* Background visual: SVG pattern */}
      <svg
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0.08,
          zIndex: 0,
        }}
      >
        <circle cx="20%" cy="30%" r="120" fill={CYBER.surface} />
        <circle cx="80%" cy="70%" r="90" fill={CYBER.surface} />
        <rect x="60%" y="10%" width="120" height="120" rx="32" fill={CYBER.surface} />
      </svg>
      <Container style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <h2
          style={{
            fontWeight: FONT.headerWeight,
            fontSize: 28,
            marginBottom: 20,
            color: CYBER.text,
            letterSpacing: 1.2,
            textShadow: `0 1px 4px ${CYBER.surface}88`,
          }}
        >
          Mulai belanja produk developer sekarang!
        </h2>
        <div style={{ display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
          <Button
            style={{
              background: CYBER.accent,
              color: CYBER.text,
              border: "none",
              borderRadius: 8,
              padding: "12px 28px",
              fontWeight: FONT.headerWeight,
              fontSize: 18,
              letterSpacing: 0.8,
              boxShadow: `0 2px 8px ${CYBER.accent2}22`,
              transition: "background 0.2s, color 0.2s",
            }}
            onClick={() => navigate("/produk")}
            onMouseOver={e => {
              e.currentTarget.style.background = CYBER.neon;
              e.currentTarget.style.color = CYBER.bg;
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = CYBER.accent;
              e.currentTarget.style.color = CYBER.text;
            }}
          >
            Lihat Produk
          </Button>
          <Button
            style={{
              background: CYBER.surface,
              color: CYBER.accent,
              border: `2px solid ${CYBER.accent}`,
              borderRadius: 8,
              padding: "12px 28px",
              fontWeight: FONT.headerWeight,
              fontSize: 18,
              letterSpacing: 0.8,
              boxShadow: `0 2px 8px ${CYBER.accent2}22`,
              transition: "background 0.2s, color 0.2s, border 0.2s",
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = CYBER.accent2;
              e.currentTarget.style.color = CYBER.bg;
              e.currentTarget.style.border = `2px solid ${CYBER.neon}`;
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = CYBER.surface;
              e.currentTarget.style.color = CYBER.accent;
              e.currentTarget.style.border = `2px solid ${CYBER.accent}`;
            }}
          >
            Hubungi Kami
          </Button>
        </div>
      </Container>
    </section>
  );
}