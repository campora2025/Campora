import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Tema hijau light mode yang fresh dan modern
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

export default function Hero() {
  const sectionRef = useRef();
  const leftRef = useRef();
  const rightRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    // Reset style for SSR/refresh
    if (leftRef.current && rightRef.current && sectionRef.current) {
      leftRef.current.style.opacity = 0;
      leftRef.current.style.transform = "translateY(40px)";
      rightRef.current.style.opacity = 0;
      rightRef.current.style.transform = "scale(0.95)";
      sectionRef.current.style.opacity = 0;
    }

    setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.style.transition = "opacity 0.7s cubic-bezier(.77,0,.18,1)";
        sectionRef.current.style.opacity = 1;
      }
    }, 80);

    setTimeout(() => {
      if (leftRef.current) {
        leftRef.current.style.transition = "opacity 0.7s cubic-bezier(.77,0,.18,1), transform 0.7s cubic-bezier(.77,0,.18,1)";
        leftRef.current.style.opacity = 1;
        leftRef.current.style.transform = "translateY(0)";
      }
      if (rightRef.current) {
        rightRef.current.style.transition = "opacity 0.8s cubic-bezier(.77,0,.18,1), transform 0.8s cubic-bezier(.77,0,.18,1)";
        rightRef.current.style.opacity = 1;
        rightRef.current.style.transform = "scale(1)";
      }
    }, 250);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: `linear-gradient(120deg, ${GREEN_THEME.bg} 80%, ${GREEN_THEME.surface} 100%)`,
        color: GREEN_THEME.text,
        fontFamily: FONT.family,
        padding: "64px 0 48px 0",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: `2px solid ${GREEN_THEME.border}`,
        boxShadow: `0 4px 32px ${GREEN_THEME.shadow}`,
        opacity: 0, // initial for animation
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "48px",
          maxWidth: "1100px",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Kiri: Text */}
        <div ref={leftRef} style={{ flex: "1 1 350px", minWidth: 320, opacity: 0, transform: "translateY(40px)" }}>
          {/* Logo + Slogan */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
            <div
              style={{
                width: 48,
                height: 48,
                background: GREEN_THEME.surface,
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: 28,
                color: GREEN_THEME.accent,
                boxShadow: `0 2px 8px ${GREEN_THEME.shadow}`,
                border: `2px solid ${GREEN_THEME.accent}`,
                marginRight: 4,
              }}
            >
              <span style={{ fontFamily: FONT.family }}>🏕️</span>
            </div>
            <span
              style={{
                fontWeight: FONT.bodyWeight,
                color: GREEN_THEME.accent2,
                fontSize: 18,
                letterSpacing: 1,
                textShadow: `0 1px 4px ${GREEN_THEME.shadow}`
              }}
            >
              Campora
            </span>
          </div>
          {/* Headline */}
          <h1
            style={{
              fontWeight: FONT.headerWeight,
              fontSize: 40,
              margin: 0,
              color: GREEN_THEME.text,
              lineHeight: 1.1,
              textShadow: `0 2px 8px ${GREEN_THEME.shadow}`
            }}
          >
            Terjun Lebih Siap,<br />
            <span style={{ color: GREEN_THEME.accent, textShadow: `0 2px 8px ${GREEN_THEME.accent2}22` }}>
              Bersama Campora!
            </span>
          </h1>
          {/* Subheadline */}
          <p
            style={{
              color: GREEN_THEME.textDim,
              fontSize: 20,
              margin: "18px 0 32px 0",
              fontWeight: FONT.bodyWeight,
              letterSpacing: 0.5,
            }}
          >
            Platform lengkap untuk kebutuhan KKN Anda. Hemat, terpercaya, dan praktis - semua tersedia dalam satu tempat!
          </p>
          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 16 }}>
            <button
              style={{
                background: GREEN_THEME.accent,
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "12px 28px",
                fontWeight: FONT.headerWeight,
                fontSize: 18,
                cursor: "pointer",
                letterSpacing: 1.2,
                textTransform: "uppercase",
                boxShadow: `0 2px 8px ${GREEN_THEME.shadow}`,
                transition: "background 0.2s, color 0.2s",
                outline: `1.5px solid ${GREEN_THEME.border}`,
                textShadow: `0 0 4px ${GREEN_THEME.shadow}`,
              }}
              onClick={() => navigate("/produk")}
              onMouseOver={e => {
                e.currentTarget.style.background = GREEN_THEME.hover;
                e.currentTarget.style.color = GREEN_THEME.accent;
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = GREEN_THEME.accent;
                e.currentTarget.style.color = "#fff";
              }}
            >
              Lihat Paket
            </button>
            <button
              style={{
                background: GREEN_THEME.surface,
                color: GREEN_THEME.text,
                border: `2px solid ${GREEN_THEME.accent}`,
                borderRadius: 8,
                padding: "12px 24px",
                fontWeight: FONT.headerWeight,
                fontSize: 18,
                cursor: "pointer",
                letterSpacing: 1.2,
                textTransform: "uppercase",
                boxShadow: `0 2px 8px ${GREEN_THEME.shadow}`,
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = GREEN_THEME.accent;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = GREEN_THEME.surface;
                e.currentTarget.style.color = GREEN_THEME.text;
              }}
            >
              Pesan via WA
            </button>
          </div>
        </div>
        {/* Kanan: Ilustrasi */}
        <div ref={rightRef} style={{
          flex: "1 1 350px",
          minWidth: 320,
          display: "flex",
          justifyContent: "center",
          opacity: 0,
          transform: "scale(0.95)"
        }}>
          <div
            style={{
              width: 300,
              height: 300,
              background: GREEN_THEME.surface,
              borderRadius: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 4px 24px ${GREEN_THEME.shadow}`,
              position: "relative",
              overflow: "hidden",
              border: `2px solid ${GREEN_THEME.accent2}44`,
            }}
          >
            {/* Ganti dengan gambar/ilustrasi asli */}
            <img
              src="https://cdn.dribbble.com/userupload/10789918/file/original-2c6b5a6b5b7e2d2e3e3e3e3e3e3e3e3e.png?resize=400x0"
              alt="Mockup Kaos & Stiker"
              style={{
                width: "90%",
                height: "auto",
                objectFit: "contain",
                borderRadius: 18,
                boxShadow: `0 2px 12px ${GREEN_THEME.shadow}`,
                filter: "brightness(0.95) contrast(1.05)",
              }}
            />
            {/* Green grid overlay */}
            <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
              <rect x="0" y="0" width="100%" height="100%" fill="none" stroke={GREEN_THEME.neon} strokeDasharray="8 8" strokeWidth="1" opacity="0.13" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}