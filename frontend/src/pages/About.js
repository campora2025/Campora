import React from "react";
import MainNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHead from "../components/about/AboutHead";
import AboutStory from "../components/about/AboutStory";
import AboutValues from "../components/about/AboutValues";

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
        <AboutValues />
      </div>
      <Footer />
    </div>
  );
}