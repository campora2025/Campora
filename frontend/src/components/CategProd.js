import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUserSecret, FaShirt } from "react-icons/fa6";
import { FaTshirt, FaRegStickyNote } from "react-icons/fa"; // FaCircle dihapus

// Warna dan font konsisten dengan Hero/Navbar
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

// Custom SVG untuk gelang: lingkaran outline, tengah kosong
function GelangIcon({ size = 38, color = CYBER.neon, stroke = 4 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 38" fill="none">
      <circle
        cx="19"
        cy="19"
        r={size / 2 - stroke}
        stroke={color}
        strokeWidth={stroke}
        fill="none"
      />
    </svg>
  );
}

const categories = [
  {
    name: "T-shirt",
    icon: <FaTshirt size={38} color={CYBER.accent} />,
    desc: "Kaos premium bertema coding & cyber.",
  },
  {
    name: "Hoodie",
    icon: <FaUserSecret size={38} color={CYBER.neon} />,
    desc: "Hoodie nyaman, cocok buat hacker & dev.",
  },
  {
    name: "Jaket",
    icon: <FaShirt size={38} color={CYBER.textDim} />,
    desc: "Jaket stylish untuk developer aktif.",
  },
  {
    name: "PDH/Kemeja",
    icon: <FaShirt size={38} color={CYBER.accent2} />,
    desc: "Kemeja PDH elegan, cocok untuk event & kerja.",
  },
  {
    name: "Stiker",
    icon: <FaRegStickyNote size={38} color={CYBER.accent2} />,
    desc: "Stiker laptop, gear, dan workspace kamu.",
  },
  {
    name: "Gelang",
    icon: <GelangIcon />,
    desc: "Gelang keren untuk developer.",
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
        background: `linear-gradient(120deg, ${CYBER.bg} 80%, ${CYBER.surface} 100%)`,
        color: CYBER.text,
        fontFamily: FONT.family,
        padding: "56px 0 36px 0",
        borderBottom: `2px solid ${CYBER.surface}`,
        boxShadow: `0 4px 32px ${CYBER.surface}33`,
      }}
    >
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, flexWrap: "wrap" }}>
          <h2
            style={{
              fontWeight: FONT.headerWeight,
              fontSize: 28,
              margin: 0,
              color: CYBER.text,
              letterSpacing: 1.2,
              textShadow: `0 1px 4px ${CYBER.surface}88`
            }}
          >
            Kategori Produk
          </h2>
        </div>
        <Row xs={1} md={3} className="g-4" style={{ justifyContent: "center" }}>
          {categories.map((cat, idx) => (
            <Col key={cat.name} style={{ display: "flex", justifyContent: "center" }}>
              <div
                ref={el => (cardRefs.current[idx] = el)}
                style={{
                  background: CYBER.surface,
                  borderRadius: 18,
                  boxShadow: `0 2px 12px ${CYBER.accent}22`,
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
                  border: `2px solid ${CYBER.accent2}22`,
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.04)";
                  e.currentTarget.style.boxShadow = `0 6px 24px ${CYBER.accent}44`;
                  e.currentTarget.style.border = `2px solid ${CYBER.neon}`;
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 2px 12px ${CYBER.accent}22`;
                  e.currentTarget.style.border = `2px solid ${CYBER.accent2}22`;
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
                  background: CYBER.bg,
                  boxShadow: `0 2px 8px ${CYBER.accent2}22`,
                  border: `2px solid ${CYBER.surface}`,
                }}>
                  {cat.icon}
                </div>
                <span
                  style={{
                    marginTop: 8,
                    fontWeight: FONT.headerWeight,
                    fontSize: 18,
                    color: CYBER.text,
                    letterSpacing: 0.8,
                    textShadow: `0 1px 4px ${CYBER.surface}66`
                  }}
                >
                  {cat.name}
                </span>
                <span
                  style={{
                    marginTop: 10,
                    color: CYBER.textDim,
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