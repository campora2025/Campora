import { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaClock, FaDollarSign, FaHandshake, FaShieldAlt } from "react-icons/fa";

// Hardcode warna & font agar konsisten dengan CategProd.js/Hero.js
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

const reasons = [
  {
    icon: <FaDollarSign size={32} color={CYBER.accent} />,
    title: "Hemat & Terjangkau",
    desc: "Harga transparan dan lebih terjangkau dibanding vendor umum untuk mahasiswa.",
  },
  {
    icon: <FaHandshake size={32} color={CYBER.accent} />,
    title: "Terpercaya",
    desc: "Terhubung langsung dengan vendor lokal yang telah diverifikasi dan terpercaya.",
  },
  {
    icon: <FaClock size={32} color={CYBER.accent} />,
    title: "Praktis & Efisien",
    desc: "Proses pemesanan mudah via website dan WhatsApp dengan layanan yang cepat.",
  },
  {
    icon: <FaShieldAlt size={32} color={CYBER.accent} />,
    title: "Garansi Kualitas",
    desc: "Semua produk bergaransi dengan standar kualitas terbaik untuk KKN Anda.",
  },
];

export default function Alasan() {
  const sectionRef = useRef();
  const cardRefs = useRef([]);

  // Animasi masuk saat discroll ke area ini (bukan saat refresh)
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
    // Reset state on mount (biar animasi hanya saat scroll)
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
        <h2
          style={{
            fontWeight: FONT.headerWeight,
            fontSize: 28,
            marginBottom: 32,
            textAlign: "center",
            color: CYBER.text,
            letterSpacing: 1.2,
            textShadow: `0 1px 4px ${CYBER.surface}88`,
          }}
        >
          Kenapa Pilih Campora?
        </h2>
        <Row xs={1} md={2} className="g-4" style={{ maxWidth: 900, margin: "0 auto" }}>
          {reasons.map((item, idx) => (
            <Col key={item.title}>
              <div
                ref={el => (cardRefs.current[idx] = el)}
                style={{
                  background: CYBER.surface,
                  borderRadius: 18,
                  boxShadow: `0 2px 12px ${CYBER.accent}22`,
                  padding: "32px 24px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 18,
                  height: "100%",
                  transition: "transform 0.18s, box-shadow 0.18s, border 0.18s",
                  border: `2px solid ${CYBER.accent2}22`,
                  cursor: "pointer",
                  opacity: 0,
                  transform: "translateY(40px)",
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
                  minWidth: 48,
                  minHeight: 48,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: CYBER.bg,
                  borderRadius: 14,
                  boxShadow: `0 2px 8px ${CYBER.accent2}22`,
                  border: `2px solid ${CYBER.surface}`,
                  marginRight: 8,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{
                    fontWeight: FONT.headerWeight,
                    fontSize: 18,
                    marginBottom: 6,
                    color: CYBER.text,
                    letterSpacing: 0.8,
                    textShadow: `0 1px 4px ${CYBER.surface}66`
                  }}>
                    {item.title}
                  </div>
                  <div style={{
                    color: CYBER.textDim,
                    fontWeight: FONT.bodyWeight,
                    fontSize: 15,
                    letterSpacing: 0.2,
                  }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}