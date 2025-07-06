import React from "react";
import { FaCode, FaUsers, FaStar, FaLightbulb } from "react-icons/fa";

export default function AboutValues() {
  const values = [
    {
      icon: <FaCode style={{ color: "#00bfae", fontSize: 28 }} />,
      title: "Identitas Informatika",
      desc: "Produk kami dirancang khusus untuk komunitas IT, developer, dan mahasiswa informatika."
    },
    {
      icon: <FaStar style={{ color: "#FFC107", fontSize: 28 }} />,
      title: "Kualitas Terbaik",
      desc: "Kami selalu mengutamakan bahan dan hasil cetak yang berkualitas untuk kenyamanan dan kepuasan pelanggan."
    },
    {
      icon: <FaUsers style={{ color: "#FF5722", fontSize: 28 }} />,
      title: "Komunitas & Kolaborasi",
      desc: "Kami terbuka untuk kolaborasi dan mendukung semangat komunitas teknologi di Indonesia."
    },
    {
      icon: <FaLightbulb style={{ color: "#E1306C", fontSize: 28 }} />,
      title: "Desain Unik & Kreatif",
      desc: "Setiap produk dibuat dengan ide-ide kreatif yang fresh dan relate dengan dunia IT."
    }
  ];

  return (
    <div style={{
      background: "#23242a",
      borderRadius: 14,
      padding: 28,
      margin: "0 auto 32px auto",
      maxWidth: 700,
      color: "#E0E0E0",
      boxShadow: "0 2px 12px #FFC10722"
    }}>
      <h4 style={{ color: "#FFC107", fontWeight: 700, marginBottom: 18 }}>
        Nilai & Keunggulan Kami
      </h4>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 24,
        justifyContent: "center"
      }}>
        {values.map((val, idx) => (
          <div key={idx} style={{
            flex: "1 1 220px",
            minWidth: 200,
            maxWidth: 260,
            background: "#181A20",
            borderRadius: 10,
            padding: 18,
            marginBottom: 8,
            textAlign: "center",
            boxShadow: "0 1px 8px #FFC10711"
          }}>
            <div style={{ marginBottom: 10 }}>{val.icon}</div>
            <div style={{ fontWeight: 700, fontSize: 18, color: "#FFC107", marginBottom: 6 }}>
              {val.title}
            </div>
            <div style={{ color: "#B0B0B0", fontSize: 15 }}>
              {val.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}