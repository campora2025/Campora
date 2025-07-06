import React from "react";

export default function ContactHead() {
  return (
    <div style={{
      textAlign: "center",
      marginBottom: 32,
      marginTop: 12,
    }}>
      <h2 style={{
        color: "#FFC107",
        fontWeight: 700,
        fontSize: 32,
        letterSpacing: 1.2,
        marginBottom: 10,
        textShadow: "0 2px 8px #23242a55"
      }}>
        Hubungi Kami
      </h2>
      <p style={{
        color: "#B0B0B0",
        fontSize: 18,
        maxWidth: 520,
        margin: "0 auto"
      }}>
        Ada pertanyaan, kritik, saran, atau ingin kerja sama? Silakan hubungi kami melalui form di bawah atau kontak langsung via WhatsApp & email.
      </p>
    </div>
  );
}