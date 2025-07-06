import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Hardcode warna dan font sesuai Navbar (cyber/informatika soft)
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
        background: `linear-gradient(120deg, ${CYBER.bg} 80%, ${CYBER.surface} 100%)`,
        color: CYBER.text,
        fontFamily: FONT.family,
        padding: "64px 0 48px 0",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: `2px solid ${CYBER.surface}`,
        boxShadow: `0 4px 32px ${CYBER.surface}55`,
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
                background: CYBER.surface,
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: 28,
                color: CYBER.accent,
                boxShadow: `0 2px 8px ${CYBER.accent}33`,
                border: `2px solid ${CYBER.accent}`,
                marginRight: 4,
              }}
            >
              <span style={{ fontFamily: FONT.family }}>{'>'}</span>
            </div>
            <span
              style={{
                fontWeight: FONT.bodyWeight,
                color: CYBER.accent2,
                fontSize: 18,
                letterSpacing: 1,
                textShadow: `0 1px 4px ${CYBER.surface}88`
              }}
            >
              C-Devia Mart
            </span>
          </div>
          {/* Headline */}
          <h1
            style={{
              fontWeight: FONT.headerWeight,
              fontSize: 40,
              margin: 0,
              color: CYBER.text,
              lineHeight: 1.1,
              textShadow: `0 2px 8px ${CYBER.surface}55`
            }}
          >
            Merch Developer Keren.<br />
            <span style={{ color: CYBER.accent, textShadow: `0 2px 8px ${CYBER.accent2}22` }}>
              Biar Coding Makin Gaya!
            </span>
          </h1>
          {/* Subheadline */}
          <p
            style={{
              color: CYBER.textDim,
              fontSize: 20,
              margin: "18px 0 32px 0",
              fontWeight: FONT.bodyWeight,
              letterSpacing: 0.5,
            }}
          >
            Kaos, hoodie, stiker, dan merch eksklusif untuk developer Indonesia. Tampil beda, tetap geek!
          </p>
          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 16 }}>
            <button
              style={{
                background: CYBER.accent,
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "12px 28px",
                fontWeight: FONT.headerWeight,
                fontSize: 18,
                cursor: "pointer",
                letterSpacing: 1.2,
                textTransform: "uppercase",
                boxShadow: `0 2px 8px ${CYBER.accent}33`,
                transition: "background 0.2s, color 0.2s",
                outline: `1.5px solid ${CYBER.surface}`,
                textShadow: `0 0 4px ${CYBER.accent}33`,
              }}
              onClick={() => navigate("/produk")}
              onMouseOver={e => {
                e.currentTarget.style.background = CYBER.surface;
                e.currentTarget.style.color = CYBER.accent;
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = CYBER.accent;
                e.currentTarget.style.color = "#fff";
              }}
            >
              Lihat Produk
            </button>
            <button
              style={{
                background: CYBER.surface,
                color: CYBER.text,
                border: `2px solid ${CYBER.accent}`,
                borderRadius: 8,
                padding: "12px 24px",
                fontWeight: FONT.headerWeight,
                fontSize: 18,
                cursor: "pointer",
                letterSpacing: 1.2,
                textTransform: "uppercase",
                boxShadow: `0 2px 8px ${CYBER.accent}22`,
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = CYBER.accent;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = CYBER.surface;
                e.currentTarget.style.color = CYBER.text;
              }}
            >
              Order via WA
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
              background: CYBER.surface,
              borderRadius: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 4px 24px ${CYBER.accent}22`,
              position: "relative",
              overflow: "hidden",
              border: `2px solid ${CYBER.accent2}44`,
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
                boxShadow: `0 2px 12px ${CYBER.accent2}33`,
                filter: "brightness(0.95) contrast(1.05)",
              }}
            />
            {/* Cyber grid overlay */}
            <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
              <rect x="0" y="0" width="100%" height="100%" fill="none" stroke={CYBER.neon} strokeDasharray="8 8" strokeWidth="1" opacity="0.13" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}