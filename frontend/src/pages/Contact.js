import Footer from "../components/Footer";
import MainNavbar from "../components/Navbar";
import ContactForm from "../components/contact/ContactForm";
import ContactHead from "../components/contact/ContactHead";
import ContactInfo from "../components/contact/ContactInfo";
import ContactSosial from "../components/contact/ContactSosial";
import { GREEN_THEME } from "../utils/theme";

export default function Contact() {
  return (
    <div style={{ background: GREEN_THEME.bg, minHeight: "100vh" }}>
      <MainNavbar />
      <div style={{
        maxWidth: 700,
        margin: "0 auto",
        padding: "48px 16px 32px 16px",
      }}>
        <ContactHead />
        <ContactSosial />
        <ContactInfo />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}