
import { FONT, GREEN_THEME } from "../../utils/theme";

export default function AboutStory() {
  return (
    <div style={{
      background: GREEN_THEME.surface,
      borderRadius: 14,
      padding: 28,
      margin: "0 auto 32px auto",
      maxWidth: 650,
      color: GREEN_THEME.text,
      boxShadow: `0 2px 12px ${GREEN_THEME.shadow}`,
      border: `1px solid ${GREEN_THEME.border}`
    }}>
      <h4 style={{ color: GREEN_THEME.accent, fontWeight: FONT.headerWeight, marginBottom: 14 }}>
        Filosofi Brand
      </h4>
      <p style={{ fontSize: 17, lineHeight: 1.7, color: GREEN_THEME.textDim }}>
        <strong style={{ color: GREEN_THEME.accent }}>Campora</strong> hadir sebagai mitra persiapan pengabdian mahasiswa yang menjunjung efisiensi, keadilan harga, dan semangat inovasi. Nama Campora sendiri merupakan singkatan dari <strong>Creative Mission Platform for Outreach and Readiness Assistance</strong>.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.7, color: GREEN_THEME.textDim }}>
        Kami percaya bahwa setiap mahasiswa berhak mendapatkan layanan persiapan KKN yang mudah, terjangkau, dan terpercaya. Melalui platform ini, kami menyediakan semua kebutuhan logistik KKN dalam satu tempat dengan harga transparan dan proses yang efisien.
      </p>
    </div>
  );
}