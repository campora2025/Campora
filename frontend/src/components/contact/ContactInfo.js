import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { FONT, GREEN_THEME } from "../../utils/theme";

export default function ContactInfo() {
  const infoItems = [
    { icon: FaPhone, label: "Telepon", value: "+62 123 456 7890" },
    { icon: FaEnvelope, label: "Email", value: "info@campora.com" },
    { icon: FaMapMarkerAlt, label: "Alamat", value: "Jakarta, Indonesia" }
  ];

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 20,
      justifyContent: "center",
      marginBottom: 32,
    }}>
      {infoItems.map((item, idx) => (
        <div key={idx} style={{
          background: GREEN_THEME.surface,
          padding: "20px 24px",
          borderRadius: 12,
          textAlign: "center",
          minWidth: 200,
          border: `1px solid ${GREEN_THEME.border}`,
          boxShadow: `0 2px 8px ${GREEN_THEME.shadow}`
        }}>
          <item.icon size={24} style={{ color: GREEN_THEME.accent, marginBottom: 8 }} />
          <div style={{ color: GREEN_THEME.textDim, fontSize: 14 }}>{item.label}</div>
          <div style={{ color: GREEN_THEME.text, fontWeight: FONT.headerWeight }}>{item.value}</div>
        </div>
      ))}
    </div>
  );
}