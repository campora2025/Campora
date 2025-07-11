import { useState } from "react";
import Footer from "../components/Footer";
import MainNavbar from "../components/Navbar";

const GREEN_THEME = {
  bg: "#f8fffe",
  surface: "#ffffff",
  accent: "#16a085",
  accent2: "#27ae60",
  text: "#1a4d40",
  textDim: "#4a7068",
  neon: "#2ecc71",
  border: "#e8f6f3",
  hover: "#d5f4ef",
  shadow: "rgba(22, 160, 133, 0.1)",
};

const faqs = [
  {
    id: 1,
    question: "Bagaimana cara memesan paket KKN di Campora?",
    answer: "Anda bisa memesan melalui website dengan memilih paket yang diinginkan, kemudian klik tombol 'Pesan via WhatsApp'. Tim kami akan langsung menghubungi Anda untuk konfirmasi detail."
  },
  {
    id: 2,
    question: "Apa saja yang termasuk dalam Paket KKN Basic?",
    answer: "Paket KKN Basic mencakup: Transportasi mobil (3 hari), Banner 2x1 meter, ID Card 10 pcs, dan gratis ongkir untuk radius 50km."
  },
  {
    id: 3,
    question: "Berapa lama waktu pembuatan banner dan merchandise?",
    answer: "Banner membutuhkan waktu 2-3 hari kerja, sedangkan merchandise seperti T-Shirt dan ID Card membutuhkan 3-5 hari kerja setelah design disetujui."
  },
  {
    id: 4,
    question: "Apakah bisa request design khusus?",
    answer: "Ya, tentu saja! Kami menyediakan layanan design custom gratis untuk semua produk. Tim design kami akan membantu mewujudkan konsep visual yang Anda inginkan."
  },
  {
    id: 5,
    question: "Bagaimana sistem pembayaran di Campora?",
    answer: "Pembayaran bisa dilakukan melalui transfer bank, e-wallet, atau cash. Untuk paket besar, kami menyediakan sistem pembayaran bertahap dengan DP 50%."
  },
  {
    id: 6,
    question: "Apakah ada jaminan garansi untuk produk yang dipesan?",
    answer: "Ya, kami memberikan garansi kualitas untuk semua produk. Jika ada kerusakan akibat kesalahan produksi, kami akan menggantinya tanpa biaya tambahan."
  },
  {
    id: 7,
    question: "Bagaimana cara menghitung ongkos kirim?",
    answer: "Ongkir dihitung berdasarkan jarak dan jenis produk. Untuk paket KKN, gratis ongkir sesuai radius masing-masing paket. Silakan konsultasi via WhatsApp untuk detail ongkir."
  },
  {
    id: 8,
    question: "Apakah Campora melayani di seluruh Indonesia?",
    answer: "Saat ini kami fokus melayani wilayah Jawa dan sekitarnya. Namun untuk order dalam jumlah besar, kami bisa melayani ke seluruh Indonesia dengan koordinasi khusus."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div style={{ background: GREEN_THEME.bg, minHeight: "100vh" }}>
      <MainNavbar />
      <div style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "48px 16px 32px 16px",
      }}>
        {/* Header */}
        <div style={{
          textAlign: "center",
          marginTop: 24,
          marginBottom: 32,
        }}>
          <h2 style={{
            color: GREEN_THEME.accent2,
            fontWeight: 700,
            fontSize: 32,
            letterSpacing: 1.2,
            marginBottom: 10,
            textShadow: `0 2px 8px ${GREEN_THEME.shadow}`
          }}>
            FAQ - Pertanyaan Umum
          </h2>
          <p style={{
            color: GREEN_THEME.textDim,
            fontSize: 18,
            maxWidth: 600,
            margin: "0 auto"
          }}>
            Temukan jawaban untuk pertanyaan yang sering diajukan seputar layanan Campora
          </p>
        </div>

        {/* FAQ Items */}
        <div style={{ marginTop: 32 }}>
          {faqs.map((faq) => (
            <div key={faq.id} style={{
              background: GREEN_THEME.surface,
              borderRadius: 12,
              marginBottom: 16,
              overflow: "hidden",
              boxShadow: `0 2px 12px ${GREEN_THEME.shadow}`
            }}>
              <button
                onClick={() => toggleItem(faq.id)}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  color: GREEN_THEME.text,
                  padding: "20px 24px",
                  textAlign: "left",
                  cursor: "pointer",
                  fontSize: 16,
                  fontWeight: 600,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "background 0.2s"
                }}
                onMouseOver={e => e.currentTarget.style.background = GREEN_THEME.hover}
                onMouseOut={e => e.currentTarget.style.background = "transparent"}
              >
                <span>{faq.question}</span>
                <span style={{
                  color: GREEN_THEME.accent,
                  fontSize: 20,
                  transform: openItems.has(faq.id) ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.3s"
                }}>
                  +
                </span>
              </button>
              
              {openItems.has(faq.id) && (
                <div style={{
                  padding: "0 24px 20px 24px",
                  color: GREEN_THEME.textDim,
                  fontSize: 15,
                  lineHeight: 1.6,
                  borderTop: `1px solid ${GREEN_THEME.border}`,
                  background: GREEN_THEME.hover
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div style={{
          background: GREEN_THEME.surface,
          borderRadius: 14,
          padding: 28,
          margin: "32px auto 0 auto",
          textAlign: "center",
          boxShadow: `0 2px 12px ${GREEN_THEME.shadow}`
        }}>
          <h4 style={{ color: GREEN_THEME.accent, fontWeight: 700, marginBottom: 14 }}>
            Tidak Menemukan Jawaban?
          </h4>
          <p style={{ fontSize: 16, color: GREEN_THEME.textDim, marginBottom: 20 }}>
            Tim customer service kami siap membantu Anda 24/7
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo Campora, saya ingin bertanya tentang layanan KKN"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: GREEN_THEME.accent,
              color: "#fff",
              textDecoration: "none",
              padding: "12px 24px",
              borderRadius: 8,
              fontWeight: 600,
              display: "inline-block",
              transition: "background 0.2s"
            }}
            onMouseOver={e => e.currentTarget.style.background = GREEN_THEME.accent2}
            onMouseOut={e => e.currentTarget.style.background = GREEN_THEME.accent}
          >
            💬 Chat via WhatsApp
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
