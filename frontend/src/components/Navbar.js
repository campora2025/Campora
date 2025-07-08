import { useEffect, useRef, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import WhatsAppAdminModal from "./WhatsAppAdminModal";

// Warna hijau light mode theme
const GREEN_THEME = {
  bg: "#ffffff",
  surface: "#f8fffe",
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

export default function MainNavbar() {
  const navRef = useRef();
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    setShowWhatsAppModal(true);
  };

  useEffect(() => {
    if (navRef.current) {
      navRef.current.style.transform = "translateY(-80px)";
      navRef.current.style.opacity = 0;
      navRef.current.style.transition = "transform 0.7s cubic-bezier(.77,0,.18,1), opacity 0.7s cubic-bezier(.77,0,.18,1)";
      setTimeout(() => {
        navRef.current.style.transform = "translateY(0)";
        navRef.current.style.opacity = 1;
      }, 120);
    }
  }, []);

  return (
    <Navbar
      ref={navRef}
      expand="md"
      style={{
        background: `linear-gradient(90deg, ${GREEN_THEME.bg} 90%, ${GREEN_THEME.surface} 100%)`,
        fontFamily: FONT.family,
        borderBottom: `1.5px solid ${GREEN_THEME.border}`,
        boxShadow: `0 2px 16px ${GREEN_THEME.shadow}`,
        zIndex: 100,
        backdropFilter: "blur(2px)",
        letterSpacing: 1.1,
        opacity: 0, // initial for animation
        transform: "translateY(-80px)", // initial for animation
      }}
      variant="light"
      sticky="top"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img
            src={"/logo/Logo.png"}
            alt="Campora Logo"
            style={{
              width: 42,
              height: 42,
              borderRadius: 10,
              background: GREEN_THEME.surface,
              boxShadow: `0 2px 8px ${GREEN_THEME.shadow}`,
              border: `1.5px solid ${GREEN_THEME.accent}`,
              objectFit: "cover",
              marginRight: 6,
            }}
          />
          <span>
            <span style={{
              color: GREEN_THEME.text,
              fontWeight: FONT.headerWeight,
              fontSize: 20,
              textShadow: `0 1px 4px ${GREEN_THEME.shadow}`
            }}>
              Cam
            </span>
            <span style={{
              color: GREEN_THEME.accent,
              fontWeight: FONT.headerWeight,
              fontSize: 20,
              marginLeft: 0,
              textShadow: `0 1px 4px ${GREEN_THEME.shadow}`
            }}>
              pora
            </span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" style={{ borderColor: GREEN_THEME.accent }} />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="mx-auto" style={{ gap: 18 }}>
            <Nav.Link href="/" style={{
              color: GREEN_THEME.text,
              fontWeight: FONT.headerWeight,
              textTransform: "uppercase",
              borderBottom: "2px solid transparent",
              letterSpacing: 1.2,
              fontSize: 15,
              transition: "color 0.2s, border-bottom 0.2s",
            }}>Home</Nav.Link>
            <Nav.Link href="/produk" style={{
              color: GREEN_THEME.text,
              fontWeight: FONT.headerWeight,
              textTransform: "uppercase",
              borderBottom: "2px solid transparent",
              letterSpacing: 1.2,
              fontSize: 15,
              transition: "color 0.2s, border-bottom 0.2s",
            }}>Produk</Nav.Link>
            <Nav.Link href="/tentang" style={{
              color: GREEN_THEME.text,
              fontWeight: FONT.headerWeight,
              textTransform: "uppercase",
              borderBottom: "2px solid transparent",
              letterSpacing: 1.2,
              fontSize: 15,
              transition: "color 0.2s, border-bottom 0.2s",
            }}>Tentang</Nav.Link>
            <Nav.Link href="/faq" style={{
              color: GREEN_THEME.text,
              fontWeight: FONT.headerWeight,
              textTransform: "uppercase",
              borderBottom: "2px solid transparent",
              letterSpacing: 1.2,
              fontSize: 15,
              transition: "color 0.2s, border-bottom 0.2s",
            }}>FAQ</Nav.Link>
            <Nav.Link href="/kontak" style={{
              color: GREEN_THEME.text,
              fontWeight: FONT.headerWeight,
              textTransform: "uppercase",
              borderBottom: "2px solid transparent",
              letterSpacing: 1.2,
              fontSize: 15,
              transition: "color 0.2s, border-bottom 0.2s",
            }}>Kontak</Nav.Link>
          </Nav>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <a href="https://www.instagram.com/developerarea25/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={22} color={GREEN_THEME.accent2} style={{ filter: "drop-shadow(0 0 2px #27ae6044)" }} />
            </a>
            <Button
              onClick={handleWhatsAppClick}
              style={{
                background: GREEN_THEME.accent,
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "8px 20px",
                fontWeight: FONT.headerWeight,
                fontSize: 15,
                marginLeft: 8,
                boxShadow: `0 2px 8px ${GREEN_THEME.shadow}`,
                letterSpacing: 1.2,
                textTransform: "uppercase",
                transition: "background 0.2s, box-shadow 0.2s, color 0.2s",
                outline: `1.5px solid ${GREEN_THEME.border}`,
                textShadow: `0 0 4px ${GREEN_THEME.shadow}`,
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = GREEN_THEME.hover;
                e.currentTarget.style.color = GREEN_THEME.accent;
                e.currentTarget.style.boxShadow = `0 4px 16px ${GREEN_THEME.shadow}`;
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = GREEN_THEME.accent;
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.boxShadow = `0 2px 8px ${GREEN_THEME.shadow}`;
              }}
            >
              Order via WA
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
      
      {/* WhatsApp Admin Modal */}
      <WhatsAppAdminModal 
        show={showWhatsAppModal} 
        handleClose={() => setShowWhatsAppModal(false)} 
      />
    </Navbar>
  );
}