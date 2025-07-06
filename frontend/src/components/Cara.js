import { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaCheckCircle, FaSearch, FaWhatsapp } from "react-icons/fa";

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

const steps = [
  {
    icon: <FaSearch size={32} color={CYBER.accent} />,
    title: "Pilih Paket",
    desc: "Telusuri paket KKN dan layanan yang sesuai kebutuhan Anda.",
  },
  {
    icon: <FaWhatsapp size={32} color={CYBER.accent} />,
    title: "Konsultasi via WA",
    desc: "Klik tombol WhatsApp untuk konsultasi detail dengan tim kami.",
  },
  {
    icon: <FaCheckCircle size={32} color={CYBER.accent} />,
    title: "Konfirmasi & Bayar",
    desc: "Konfirmasi pesanan dan lakukan pembayaran sesuai kesepakatan.",
  },
];

const waTemplate = `Halo Campora! Saya ingin konsultasi untuk:
- Jenis KKN: [Individual/Kelompok]
- Lokasi KKN: [Nama Daerah]
- Tanggal: [Tanggal mulai KKN]
- Jumlah peserta: [Jumlah orang]
- Kebutuhan: [Paket/layanan yang diinginkan]

Mohon info detail dan harga. Terima kasih!`;

export default function Cara() {
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
            marginBottom: 28,
            textAlign: "center",
            color: CYBER.text,
            letterSpacing: 1.2,
            textShadow: `0 1px 4px ${CYBER.surface}88`,
          }}
        >
          Cara Pemesanan
        </h2>
        <Row xs={1} md={3} className="g-4" style={{ maxWidth: 900, margin: "0 auto 32px auto" }}>
          {steps.map((step, idx) => (
            <Col key={step.title}>
              <div
                ref={el => (cardRefs.current[idx] = el)}
                style={{
                  background: CYBER.surface,
                  borderRadius: 18,
                  boxShadow: `0 2px 12px ${CYBER.accent}22`,
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
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
                {step.icon}
                <div style={{
                  fontWeight: FONT.headerWeight,
                  fontSize: 18,
                  margin: "16px 0 6px 0",
                  textAlign: "center",
                  color: CYBER.text,
                  letterSpacing: 0.8,
                  textShadow: `0 1px 4px ${CYBER.surface}66`
                }}>
                  {step.title}
                </div>
                <div style={{
                  color: CYBER.textDim,
                  fontWeight: FONT.bodyWeight,
                  fontSize: 15,
                  textAlign: "center",
                  letterSpacing: 0.2,
                }}>
                  {step.desc}
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <div
            style={{
              background: CYBER.surface,
              borderRadius: 14,
              padding: "18px 20px",
              boxShadow: `0 2px 12px ${CYBER.accent}22`,
              color: CYBER.textDim,
              fontFamily: "monospace",
              fontSize: 15,
              whiteSpace: "pre-line",
              marginTop: 12,
              border: `2px solid ${CYBER.accent2}22`,
            }}
          >
            <b style={{ color: CYBER.text }}>Contoh format chat WhatsApp:</b>
            <br />
            {waTemplate}
          </div>
        </div>
      </Container>
    </section>
  );
}