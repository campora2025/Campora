
import { FONT, GREEN_THEME } from "../../utils/theme";

export default function AboutHead() {
  return (
    <div style={{
      textAlign: "center",
      marginTop: 24,
      marginBottom: 32,
    }}>
      <h2 style={{
        color: GREEN_THEME.accent,
        fontWeight: FONT.headerWeight,
        fontSize: 32,
        letterSpacing: 1.2,
        marginBottom: 10,
        textShadow: `0 2px 8px ${GREEN_THEME.shadow}`
      }}>
        Tentang Campora
      </h2>
      <p style={{
        color: GREEN_THEME.textDim,
        fontSize: 18,
        maxWidth: 600,
        margin: "0 auto"
      }}>
        Campora adalah platform turunan dari ekosistem CBraind yang secara khusus dirancang untuk mendukung kebutuhan mahasiswa yang akan menjalani pengabdian masyarakat seperti Kuliah Kerja Nyata (KKN). Di sini, mahasiswa bisa mendapatkan layanan dan produk penting yang dibutuhkan secara praktis dan terjangkau.
      </p>
    </div>
  );
}