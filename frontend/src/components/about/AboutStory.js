import React from "react";

export default function AboutStory() {
  return (
    <div style={{
      background: "#23242a",
      borderRadius: 14,
      padding: 28,
      margin: "0 auto 32px auto",
      maxWidth: 650,
      color: "#E0E0E0",
      boxShadow: "0 2px 12px #FFC10722"
    }}>
      <h4 style={{ color: "#FF5722", fontWeight: 700, marginBottom: 14 }}>
        Cerita Kami
      </h4>
      <p style={{ fontSize: 17, lineHeight: 1.7, color: "#B0B0B0" }}>
        Awalnya, kami hanya iseng dan gabut, namun melihat banyaknya permintaan dari teman-teman dan komunitas akan produk-produk identitas informatika seperti kaos, hoodie, gelang, dan stiker, akhirnya kami memutuskan untuk membuka C-Devia Mart.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.7, color: "#B0B0B0" }}>
        Kami percaya bahwa identitas informatika bukan sekadar gaya, tapi juga bentuk kebanggaan dan semangat dalam dunia teknologi. Setiap produk kami dibuat dengan desain unik dan kualitas terbaik untuk para developer, mahasiswa, dan pecinta IT.
      </p>
    </div>
  );
}