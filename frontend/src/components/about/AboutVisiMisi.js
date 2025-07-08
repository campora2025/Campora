
import { FONT, GREEN_THEME } from "../../utils/theme";

export default function AboutVisiMisi() {
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
        Visi & Misi
      </h4>
      
      {/* Visi */}
      <div style={{ marginBottom: 24 }}>
        <h5 style={{ color: GREEN_THEME.accent2, fontWeight: 600, fontSize: 18, marginBottom: 8 }}>
          Visi
        </h5>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: GREEN_THEME.textDim }}>
          Menjadi platform utama mahasiswa Indonesia dalam memenuhi kebutuhan KKN secara efisien, adil, dan terpercaya.
        </p>
      </div>

      {/* Misi */}
      <div>
        <h5 style={{ color: GREEN_THEME.accent2, fontWeight: 600, fontSize: 18, marginBottom: 12 }}>
          Misi
        </h5>
        <ul style={{ color: GREEN_THEME.textDim, fontSize: 16, lineHeight: 1.6, paddingLeft: 20 }}>
          <li style={{ marginBottom: 8 }}>
            Menyediakan akses cepat dan terintegrasi terhadap kebutuhan logistik KKN
          </li>
          <li style={{ marginBottom: 8 }}>
            Menjaga keadilan harga untuk mahasiswa, tanpa memaksakan kondisi finansial mereka
          </li>
          <li style={{ marginBottom: 8 }}>
            Membangun jaringan vendor terpercaya berbasis daerah
          </li>
          <li>
            Menjadi mitra kampus dalam mendukung pelaksanaan KKN yang optimal
          </li>
        </ul>
      </div>
    </div>
  );
}
