import { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaBox, FaBullhorn, FaIdCard, FaTruck } from "react-icons/fa";

// Warna dan font konsisten dengan Hero/Navbar
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

const categories = [
  {
    name: "Paket KKN",
    icon: <FaBox size={38} color={GREEN_THEME.accent} />,
    desc: "Paket lengkap untuk kebutuhan KKN Anda.",
  },
  {
    name: "Transportasi",
    icon: <FaTruck size={38} color={GREEN_THEME.neon} />,
    desc: "Rental mobil & pickup untuk KKN.",
  },
  {
    name: "Banner & Print",
    icon: <FaBullhorn size={38} color={GREEN_THEME.accent2} />,
    desc: "Banner, spanduk, dan kebutuhan print.",
  },
  {
    name: "Merchandise",
    icon: <FaIdCard size={38} color="#E1306C" />,
    desc: "ID Card, T-Shirt, dan merchandise KKN.",
  },
];

export default function CategProd() {
  const sectionRef = useRef();
  const cardRefs = useRef([]);

  // Animasi muncul saat discroll ke area kategori (bukan saat refresh)
  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 120) {
        cardRefs.current.forEach((ref, i) => {
          if (ref && ref.style.opacity !== "1") {
            ref.style.transition = `opacity 0.7s ${0.1 + i * 0.13}s cubic-bezier(.77,0,.18,1), transform 0.7s ${0.1 + i * 0.13}s cubic-bezier(.77,0,.18,1)`;
            ref.style.opacity = 1;
            ref.style.transform = "translateY(0)";
          }
        });
      }
    }
    window.addEventListener("scroll", handleScroll);
    // Reset state on mount (tapi biar animasi hanya saat scroll, tidak langsung muncul)
    cardRefs.current.forEach(ref => {
      if (ref) {
        ref.style.opacity = 0;
        ref.style.transform = "translateY(40px)";
      }
    });
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
        padding: "56px 0 36px 0",
        borderBottom: `2px solid ${GREEN_THEME.border}`,
        boxShadow: `0 4px 32px ${GREEN_THEME.shadow}`,
      }}
    >
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, flexWrap: "wrap" }}>
          <h2
            style={{
              fontWeight: FONT.headerWeight,
              fontSize: 28,
              margin: 0,
              color: GREEN_THEME.text,
              letterSpacing: 1.2,
              textShadow: `0 1px 4px ${GREEN_THEME.shadow}`
            }}
          >
            Layanan Campora
          </h2>
        </div>
        <Row xs={1} md={3} className="g-4" style={{ justifyContent: "center" }}>
          {categories.map((cat, idx) => (
            <Col key={cat.name} style={{ display: "flex", justifyContent: "center" }}>
              <div
                ref={el => (cardRefs.current[idx] = el)}
                style={{
                  background: GREEN_THEME.surface,
                  borderRadius: 18,
                  boxShadow: `0 2px 12px ${GREEN_THEME.shadow}`,
                  padding: "36px 24px",
                  minWidth: 180,
                  maxWidth: 260,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  opacity: 0,
                  transform: "translateY(40px)",
                  transition: "opacity 0.7s, transform 0.7s",
                  cursor: "pointer",
                  border: `2px solid ${GREEN_THEME.border}`,
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.04)";
                  e.currentTarget.style.boxShadow = `0 6px 24px ${GREEN_THEME.shadow}`;
                  e.currentTarget.style.border = `2px solid ${GREEN_THEME.neon}`;
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 2px 12px ${GREEN_THEME.shadow}`;
                  e.currentTarget.style.border = `2px solid ${GREEN_THEME.border}`;
                }}
              >
                <div style={{
                  marginBottom: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: GREEN_THEME.hover,
                  boxShadow: `0 2px 8px ${GREEN_THEME.shadow}`,
                  border: `2px solid ${GREEN_THEME.border}`,
                }}>
                  {cat.icon}
                </div>
                <span
                  style={{
                    marginTop: 8,
                    fontWeight: FONT.headerWeight,
                    fontSize: 18,
                    color: GREEN_THEME.text,
                    letterSpacing: 0.8,
                    textShadow: `0 1px 4px ${GREEN_THEME.shadow}`
                  }}
                >
                  {cat.name}
                </span>
                <span
                  style={{
                    marginTop: 10,
                    color: GREEN_THEME.textDim,
                    fontWeight: FONT.bodyWeight,
                    fontSize: 15,
                    textAlign: "center",
                    letterSpacing: 0.2,
                  }}
                >
                  {cat.desc}
                </span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}