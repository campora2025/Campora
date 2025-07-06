import React from "react";

export default function AboutHead() {
  return (
    <div style={{
      textAlign: "center",
      marginTop: 24,
      marginBottom: 32,
    }}>
      <h2 style={{
        color: "#FFC107",
        fontWeight: 700,
        fontSize: 32,
        letterSpacing: 1.2,
        marginBottom: 10,
        textShadow: "0 2px 8px #23242a55"
      }}>
        Tentang C-Devia Mart
      </h2>
      <p style={{
        color: "#B0B0B0",
        fontSize: 18,
        maxWidth: 520,
        margin: "0 auto"
      }}>
        C-Devia Mart hadir untuk memenuhi kebutuhan identitas informatika. Berawal dari banyaknya permintaan teman-teman akan produk bertema IT, kami yang awalnya iseng dan gabut akhirnya memutuskan untuk membuka usaha ini. 
      </p>
    </div>
  );
}