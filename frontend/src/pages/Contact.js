import React from "react";
import MainNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHead from "../components/contact/ContactHead";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import ContactSosial from "../components/contact/ContactSosial";

export default function Contact() {
  return (
    <div style={{ background: "#181A20", minHeight: "100vh" }}>
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