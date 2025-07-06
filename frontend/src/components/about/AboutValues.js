import { FaClipboardCheck, FaDollarSign, FaHandshake, FaTruck } from "react-icons/fa";

export default function AboutValues() {
  const values = [
    {
      icon: <FaClipboardCheck style={{ color: "#00bfae", fontSize: 28 }} />,
      title: "Kesiapan",
      desc: "Semua kebutuhan logistik KKN tersedia dalam satu tempat untuk kemudahan mahasiswa."
    },
    {
      icon: <FaHandshake style={{ color: "#FFC107", fontSize: 28 }} />,
      title: "Kepercayaan",
      desc: "Terhubung langsung dengan vendor lokal yang telah diverifikasi dan terpercaya."
    },
    {
      icon: <FaTruck style={{ color: "#FF5722", fontSize: 28 }} />,
      title: "Efisiensi",
      desc: "Proses pemesanan mudah via website dan WhatsApp dengan layanan yang cepat."
    },
    {
      icon: <FaDollarSign style={{ color: "#E1306C", fontSize: 28 }} />,
      title: "Aksesibilitas",
      desc: "Harga transparan dan lebih terjangkau dibanding vendor umum untuk mahasiswa."
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
        Nilai-nilai Inti Campora
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