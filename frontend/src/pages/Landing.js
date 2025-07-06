import Alasan from "../components/Alasan";
import Cara from "../components/Cara";
import CategProd from "../components/CategProd";
import Cta from "../components/Cta";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MainNavbar from "../components/Navbar";
import ProdHigh from "../components/ProdHigh";

export default function Landing() {
  return (
    <>
      <MainNavbar />
      <Hero />
      <CategProd />
      <ProdHigh />
      <Alasan />
      <Cara />
      <Cta />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}