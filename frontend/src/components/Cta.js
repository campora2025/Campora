import { useEffect, useRef } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
        background: `linear-gradient(120deg, ${GREEN_THEME.bg} 80%, ${GREEN_THEME.surface} 100%)`,
        color: GREEN_THEME.text,
        fontFamily: FONT.family,
        padding: "56px 0 48px 0",
        borderBottom: `2px solid ${GREEN_THEME.border}`,
        boxShadow: `0 4px 32px ${GREEN_THEME.shadow}`,
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
        <circle cx="20%" cy="30%" r="120" fill={GREEN_THEME.hover} />
        <circle cx="80%" cy="70%" r="90" fill={GREEN_THEME.hover} />
        <rect x="60%" y="10%" width="120" height="120" rx="32" fill={GREEN_THEME.hover} />
      </svg>
      <Container style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <h2
          style={{
            fontWeight: FONT.headerWeight,
            fontSize: 28,
            marginBottom: 20,
            color: GREEN_THEME.text,
            letterSpacing: 1.2,
            textShadow: `0 1px 4px ${GREEN_THEME.shadow}`,
          }}
        >
          Siap untuk KKN yang Lebih Terorganisir?
        </h2>
        <p style={{
          fontSize: 18,
          color: GREEN_THEME.textDim,
          marginBottom: 20,
          maxWidth: 600,
          margin: "0 auto 20px auto"
        }}>
          Mulai persiapan KKN Anda dengan Campora. Semua kebutuhan tersedia dalam satu platform!
        </p>
        <div style={{ display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
          <Button
            style={{
              background: GREEN_THEME.accent,
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 28px",
              fontWeight: FONT.headerWeight,
              fontSize: 18,
              letterSpacing: 0.8,
              boxShadow: `0 2px 8px ${GREEN_THEME.shadow}`,
              transition: "background 0.2s, color 0.2s",
            }}
            onClick={() => navigate("/produk")}
            onMouseOver={e => {
              e.currentTarget.style.background = GREEN_THEME.neon;
              e.currentTarget.style.color = "#fff";
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = GREEN_THEME.accent;
              e.currentTarget.style.color = "#fff";
            }}
          >
            Lihat Paket KKN
          </Button>
          <Button
            style={{
              background: GREEN_THEME.surface,
              color: GREEN_THEME.accent,
              border: `2px solid ${GREEN_THEME.accent}`,
              borderRadius: 8,
              padding: "12px 28px",
              fontWeight: FONT.headerWeight,
              fontSize: 18,
              letterSpacing: 0.8,
              boxShadow: `0 2px 8px ${GREEN_THEME.shadow}`,
              transition: "background 0.2s, color 0.2s, border 0.2s",
            }}
            onClick={() => window.open("https://wa.me/6281234567890?text=Halo Campora! Saya ingin konsultasi untuk persiapan KKN.", "_blank")}
            onMouseOver={e => {
              e.currentTarget.style.background = GREEN_THEME.accent2;
              e.currentTarget.style.color = GREEN_THEME.bg;
              e.currentTarget.style.border = `2px solid ${GREEN_THEME.neon}`;
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = GREEN_THEME.surface;
              e.currentTarget.style.color = GREEN_THEME.accent;
              e.currentTarget.style.border = `2px solid ${GREEN_THEME.accent}`;
            }}
          >
            💬 Konsultasi via WA
          </Button>
        </div>
      </Container>
    </section>
  );
}