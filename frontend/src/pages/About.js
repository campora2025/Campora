import AboutHead from "../components/about/AboutHead";
import AboutStory from "../components/about/AboutStory";
import AboutValues from "../components/about/AboutValues";
import AboutVisiMisi from "../components/about/AboutVisiMisi";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";
import MainNavbar from "../components/Navbar";

export default function About() {
  return (
    <div style={{ background: "#181A20", minHeight: "100vh" }}>
      <MainNavbar />
      <div style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "48px 16px 32px 16px",
      }}>
        <AboutHead />
        <AboutStory />
        <AboutVisiMisi />
        <AboutValues />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}