import React, { useEffect, useRef } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FaInstagram, FaGithub } from "react-icons/fa";

// Warna cyber/informatika versi lebih soft
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

export default function MainNavbar() {
  const navRef = useRef();

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
        background: `linear-gradient(90deg, ${CYBER.bg} 90%, ${CYBER.surface} 100%)`,
        fontFamily: FONT.family,
        borderBottom: `1.5px solid ${CYBER.surface}`,
        boxShadow: `0 2px 16px ${CYBER.surface}88`,
        zIndex: 100,
        backdropFilter: "blur(2px)",
        letterSpacing: 1.1,
        opacity: 0, // initial for animation
        transform: "translateY(-80px)", // initial for animation
      }}
      variant="dark"
      sticky="top"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img
            src={"/images/logo.png"}
            alt="C-Devia Mart Logo"
            style={{
              width: 42,
              height: 42,
              borderRadius: 10,
              background: CYBER.surface,
              boxShadow: `0 2px 8px ${CYBER.accent}22`,
              border: `1.5px solid ${CYBER.accent}`,
              objectFit: "cover",
              marginRight: 6,
            }}
          />
          <span>
            <span style={{
              color: CYBER.text,
              fontWeight: FONT.headerWeight,
              fontSize: 20,
              textShadow: `0 1px 4px ${CYBER.surface}88`
            }}>
              C-Devia
            </span>
            <span style={{
              color: CYBER.accent,
              fontWeight: FONT.headerWeight,
              fontSize: 20,
              marginLeft: 4,
              textShadow: `0 1px 4px ${CYBER.surface}88`
            }}>
              Mart
            </span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" style={{ borderColor: CYBER.accent }} />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="mx-auto" style={{ gap: 18 }}>
            <Nav.Link href="/" style={{
              color: CYBER.text,
              fontWeight: FONT.headerWeight,
              textTransform: "uppercase",
              borderBottom: "2px solid transparent",
              letterSpacing: 1.2,
              fontSize: 15,
              transition: "color 0.2s, border-bottom 0.2s",
            }}>Home</Nav.Link>
            <Nav.Link href="/produk" style={{
              color: CYBER.text,
              fontWeight: FONT.headerWeight,
              textTransform: "uppercase",
              borderBottom: "2px solid transparent",
              letterSpacing: 1.2,
              fontSize: 15,
              transition: "color 0.2s, border-bottom 0.2s",
            }}>Produk</Nav.Link>
            <Nav.Link href="/tentang" style={{
              color: CYBER.text,
              fontWeight: FONT.headerWeight,
              textTransform: "uppercase",
              borderBottom: "2px solid transparent",
              letterSpacing: 1.2,
              fontSize: 15,
              transition: "color 0.2s, border-bottom 0.2s",
            }}>Tentang</Nav.Link>
            <Nav.Link href="/kontak" style={{
              color: CYBER.text,
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
              <FaInstagram size={22} color={CYBER.accent2} style={{ filter: "drop-shadow(0 0 2px #ffb30044)" }} />
            </a>
            <Button
              href="https://wa.me/6281234567890"
              target="_blank"
              style={{
                background: CYBER.accent,
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "8px 20px",
                fontWeight: FONT.headerWeight,
                fontSize: 15,
                marginLeft: 8,
                boxShadow: `0 2px 8px ${CYBER.accent}33`,
                letterSpacing: 1.2,
                textTransform: "uppercase",
                transition: "background 0.2s, box-shadow 0.2s, color 0.2s",
                outline: `1.5px solid ${CYBER.surface}`,
                textShadow: `0 0 4px ${CYBER.accent}33`,
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = CYBER.surface;
                e.currentTarget.style.color = CYBER.accent;
                e.currentTarget.style.boxShadow = `0 4px 16px ${CYBER.accent}44`;
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = CYBER.accent;
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.boxShadow = `0 2px 8px ${CYBER.accent}33`;
              }}
            >
              Order via WA
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}