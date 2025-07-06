import React from "react";
import MainNavbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategProd from "../components/CategProd";
import ProdHigh from "../components/ProdHigh";
import Alasan from "../components/Alasan";
import Cara from "../components/Cara";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

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
    </>
  );
}