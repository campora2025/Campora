import { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaCheckCircle, FaSearch, FaWhatsapp } from "react-icons/fa";

// Style konsisten dengan CategProd.js
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

const steps = [
  {
    icon: <FaSearch size={32} color={GREEN_THEME.accent} />,
    title: "Pilih Paket",
    desc: "Telusuri paket KKN dan layanan yang sesuai kebutuhan Anda.",
  },
  {
    icon: <FaWhatsapp size={32} color={GREEN_THEME.accent} />,
    title: "Hitung Biaya Pickup",
    desc: "Gunakan kalkulator pickup otomatis untuk estimasi biaya transportasi berdasarkan jarak.",
  },
  {
    icon: <span style={{color: GREEN_THEME.accent, fontSize: '32px'}}>🎫</span>,
    title: "Kode Referral (Opsional)",
    desc: "Masukkan kode referral affiliate untuk mendapat layanan langsung dari mitra terpilih.",
  },
  {
    icon: <FaCheckCircle size={32} color={GREEN_THEME.accent} />,
    title: "Konsultasi & Pesan",
    desc: "Hubungi WhatsApp untuk konsultasi detail dan konfirmasi pesanan Anda.",
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
        background: `linear-gradient(120deg, ${GREEN_THEME.bg} 80%, ${GREEN_THEME.surface} 100%)`,
        color: GREEN_THEME.text,
        fontFamily: FONT.family,
        padding: "56px 0 36px 0",
        borderBottom: `2px solid ${GREEN_THEME.border}`,
        boxShadow: `0 4px 32px ${GREEN_THEME.shadow}`,
      }}
    >
      <Container>
        <h2
          style={{
            fontWeight: FONT.headerWeight,
            fontSize: 28,
            marginBottom: 28,
            textAlign: "center",
            color: GREEN_THEME.text,
            letterSpacing: 1.2,
            textShadow: `0 1px 4px ${GREEN_THEME.shadow}`,
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
                  background: GREEN_THEME.surface,
                  borderRadius: 18,
                  boxShadow: `0 2px 12px ${GREEN_THEME.shadow}`,
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                  transition: "transform 0.18s, box-shadow 0.18s, border 0.18s",
                  border: `2px solid ${GREEN_THEME.border}`,
                  cursor: "pointer",
                  opacity: 0,
                  transform: "translateY(40px)",
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
                {step.icon}
                <div style={{
                  fontWeight: FONT.headerWeight,
                  fontSize: 18,
                  margin: "16px 0 6px 0",
                  textAlign: "center",
                  color: GREEN_THEME.text,
                  letterSpacing: 0.8,
                  textShadow: `0 1px 4px ${GREEN_THEME.shadow}`
                }}>
                  {step.title}
                </div>
                <div style={{
                  color: GREEN_THEME.textDim,
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
              background: GREEN_THEME.surface,
              borderRadius: 14,
              padding: "18px 20px",
              boxShadow: `0 2px 12px ${GREEN_THEME.shadow}`,
              color: GREEN_THEME.textDim,
              fontFamily: "monospace",
              fontSize: 15,
              whiteSpace: "pre-line",
              marginTop: 12,
              border: `2px solid ${GREEN_THEME.border}`,
            }}
          >
            <b style={{ color: GREEN_THEME.text }}>Contoh format chat WhatsApp:</b>
            <br />
            {waTemplate}
          </div>
        </div>
      </Container>
    </section>
  );
}