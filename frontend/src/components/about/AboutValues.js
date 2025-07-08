import { FaClipboardCheck, FaDollarSign, FaHandshake, FaTruck } from "react-icons/fa";
import { FONT, GREEN_THEME } from "../../utils/theme";

export default function AboutValues() {
  const values = [
    {
      icon: <FaClipboardCheck style={{ color: GREEN_THEME.accent, fontSize: 28 }} />,
      title: "Kesiapan",
      desc: "Semua kebutuhan logistik KKN tersedia dalam satu tempat untuk kemudahan mahasiswa."
    },
    {
      icon: <FaHandshake style={{ color: GREEN_THEME.accent2, fontSize: 28 }} />,
      title: "Kepercayaan",
      desc: "Terhubung langsung dengan vendor lokal yang telah diverifikasi dan terpercaya."
    },
    {
      icon: <FaTruck style={{ color: GREEN_THEME.neon, fontSize: 28 }} />,
      title: "Efisiensi",
      desc: "Proses pemesanan mudah via website dan WhatsApp dengan layanan yang cepat."
    },
    {
      icon: <FaDollarSign style={{ color: GREEN_THEME.accent, fontSize: 28 }} />,
      title: "Aksesibilitas",
      desc: "Harga transparan dan lebih terjangkau dibanding vendor umum untuk mahasiswa."
    }
  ];

  return (
    <div style={{
      background: GREEN_THEME.surface,
      borderRadius: 14,
      padding: 28,
      margin: "0 auto 32px auto",
      maxWidth: 700,
      color: GREEN_THEME.text,
      boxShadow: `0 2px 12px ${GREEN_THEME.shadow}`,
      border: `1px solid ${GREEN_THEME.border}`
    }}>
      <h4 style={{ color: GREEN_THEME.accent, fontWeight: FONT.headerWeight, marginBottom: 18 }}>
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
            background: GREEN_THEME.bg,
            borderRadius: 10,
            padding: 18,
            marginBottom: 8,
            textAlign: "center",
            boxShadow: `0 1px 8px ${GREEN_THEME.shadow}`,
            border: `1px solid ${GREEN_THEME.border}`
          }}>
            <div style={{ marginBottom: 10 }}>{val.icon}</div>
            <div style={{ fontWeight: FONT.headerWeight, fontSize: 18, color: GREEN_THEME.accent, marginBottom: 6 }}>
              {val.title}
            </div>
            <div style={{ color: GREEN_THEME.textDim, fontSize: 15 }}>
              {val.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}