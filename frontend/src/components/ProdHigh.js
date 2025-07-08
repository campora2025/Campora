import { useEffect, useRef } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Warna & font konsisten dengan tema hijau light mode
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
        background: `linear-gradient(120deg, ${GREEN_THEME.bg} 80%, ${GREEN_THEME.surface} 100%)`,
        color: GREEN_THEME.text,
        fontFamily: FONT.family,
        padding: "56px 0 40px 0",
        borderBottom: `2px solid ${GREEN_THEME.border}`,
        boxShadow: `0 4px 32px ${GREEN_THEME.shadow}`,
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
            color: GREEN_THEME.text,
            letterSpacing: 1.2,
            textShadow: `0 1px 4px ${GREEN_THEME.shadow}`,
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
                  background: GREEN_THEME.surface,
                  color: GREEN_THEME.text,
                  border: `2px solid ${GREEN_THEME.border}`,
                  borderRadius: 18,
                  boxShadow: `0 2px 12px ${GREEN_THEME.shadow}`,
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
                  width: "100%",
                  height: 180,
                  background: GREEN_THEME.hover,
                  borderTopLeftRadius: 18,
                  borderTopRightRadius: 18,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  borderBottom: `2px solid ${GREEN_THEME.border}`,
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
                    color: GREEN_THEME.text,
                    letterSpacing: 0.8,
                    textShadow: `0 1px 4px ${GREEN_THEME.shadow}`,
                    textAlign: "center",
                  }}>
                    {prod.name}
                  </Card.Title>
                  <Card.Text style={{
                    color: GREEN_THEME.textDim,
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
              background: GREEN_THEME.accent,
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 32px",
              fontWeight: FONT.headerWeight,
              fontSize: 18,
              letterSpacing: 0.8,
              boxShadow: `0 2px 8px ${GREEN_THEME.accent2}22`,
              transition: "background 0.2s",
            }}
            onClick={() => navigate("/produk")}
            onMouseOver={e => (e.currentTarget.style.background = GREEN_THEME.neon)}
            onMouseOut={e => (e.currentTarget.style.background = GREEN_THEME.accent)}
          >
            Lihat Semua Produk
          </Button>
        </div>
      </Container>
    </section>
  );
}