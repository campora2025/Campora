import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Warna & font konsisten dengan CategProd.js
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

// Dummy data produk
const products = [
  {
    id: 1,
    name: "Kaos Dev Keren",
    desc: "Kaos premium untuk developer.",
    img: "https://cdn.dribbble.com/userupload/10789918/file/original-2c6b5a6b5b7e2d2e3e3e3e3e3e3e3e3e.png?resize=400x0",
  },
  {
    id: 2,
    name: "Sticker Pack",
    desc: "Stiker lucu buat laptop kamu.",
    img: "https://cdn.dribbble.com/userupload/10789918/file/original-2c6b5a6b5b7e2d2e3e3e3e3e3e3e3e3e.png?resize=400x0",
  },
  {
    id: 3,
    name: "Tote Bag Dev",
    desc: "Tote bag stylish untuk ngoding di mana saja.",
    img: "https://cdn.dribbble.com/userupload/10789918/file/original-2c6b5a6b5b7e2d2e3e3e3e3e3e3e3e3e.png?resize=400x0",
  },
  {
    id: 4,
    name: "Mug Debugging",
    desc: "Mug keren biar debugging makin semangat.",
    img: "https://cdn.dribbble.com/userupload/10789918/file/original-2c6b5a6b5b7e2d2e3e3e3e3e3e3e3e3e.png?resize=400x0",
  },
  {
    id: 5,
    name: "Notebook Coding",
    desc: "Notebook eksklusif untuk catatan kode.",
    img: "https://cdn.dribbble.com/userupload/10789918/file/original-2c6b5a6b5b7e2d2e3e3e3e3e3e3e3e3e.png?resize=400x0",
  },
  {
    id: 6,
    name: "Lanyard Dev",
    desc: "Lanyard kece buat ID card kamu.",
    img: "https://cdn.dribbble.com/userupload/10789918/file/original-2c6b5a6b5b7e2d2e3e3e3e3e3e3e3e3e.png?resize=400x0",
  },
];

export default function ProdHigh() {
  const navigate = useNavigate();
  const sectionRef = useRef();
  const cardRefs = useRef([]);

  // Animasi masuk saat discroll ke area ini (bukan saat refresh)
  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 120) {
        // Section fade in
        sectionRef.current.style.transition = "opacity 0.7s cubic-bezier(.77,0,.18,1)";
        sectionRef.current.style.opacity = 1;
        // Card animasi stagger
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
    if (sectionRef.current) sectionRef.current.style.opacity = 0;
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
        padding: "56px 0 40px 0",
        borderBottom: `2px solid ${CYBER.surface}`,
        boxShadow: `0 4px 32px ${CYBER.surface}33`,
        opacity: 0, // for animation
        transition: "opacity 0.7s cubic-bezier(.77,0,.18,1)",
      }}
    >
      <Container>
        <h2
          style={{
            fontWeight: FONT.headerWeight,
            fontSize: 28,
            marginBottom: 32,
            color: CYBER.text,
            letterSpacing: 1.2,
            textShadow: `0 1px 4px ${CYBER.surface}88`,
            textAlign: "center",
          }}
        >
          Produk Unggulan
        </h2>
        <Row xs={1} sm={2} md={3} className="g-4" style={{ marginBottom: 32, justifyContent: "center" }}>
          {products.map((prod, idx) => (
            <Col key={prod.id} style={{ display: "flex", justifyContent: "center" }}>
              <Card
                ref={el => (cardRefs.current[idx] = el)}
                style={{
                  background: CYBER.surface,
                  color: CYBER.text,
                  border: `2px solid ${CYBER.accent2}22`,
                  borderRadius: 18,
                  boxShadow: `0 2px 12px ${CYBER.accent}22`,
                  transition: "transform 0.25s cubic-bezier(.25,.8,.25,1), box-shadow 0.2s, border 0.2s",
                  cursor: "pointer",
                  minWidth: 180,
                  maxWidth: 260,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  opacity: 0,
                  transform: "translateY(40px)",
                }}
                className="prod-card"
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
                  width: "100%",
                  height: 180,
                  background: CYBER.bg,
                  borderTopLeftRadius: 18,
                  borderTopRightRadius: 18,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  borderBottom: `2px solid ${CYBER.surface}`,
                }}>
                  <img
                    src={prod.img}
                    alt={prod.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <Card.Body style={{ width: "100%", padding: 18, display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Card.Title style={{
                    fontWeight: FONT.headerWeight,
                    fontSize: 18,
                    color: CYBER.text,
                    letterSpacing: 0.8,
                    textShadow: `0 1px 4px ${CYBER.surface}66`,
                    textAlign: "center",
                  }}>
                    {prod.name}
                  </Card.Title>
                  <Card.Text style={{
                    color: CYBER.textDim,
                    fontWeight: FONT.bodyWeight,
                    fontSize: 15,
                    textAlign: "center",
                    letterSpacing: 0.2,
                  }}>
                    {prod.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div style={{ textAlign: "center" }}>
          <Button
            style={{
              background: CYBER.accent,
              color: CYBER.text,
              border: "none",
              borderRadius: 8,
              padding: "12px 32px",
              fontWeight: FONT.headerWeight,
              fontSize: 18,
              letterSpacing: 0.8,
              boxShadow: `0 2px 8px ${CYBER.accent2}22`,
              transition: "background 0.2s",
            }}
            onClick={() => navigate("/produk")}
            onMouseOver={e => (e.currentTarget.style.background = CYBER.neon)}
            onMouseOut={e => (e.currentTarget.style.background = CYBER.accent)}
          >
            Lihat Semua Produk
          </Button>
        </div>
      </Container>
    </section>
  );
}