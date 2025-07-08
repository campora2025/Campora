import { FaGithub, FaGlobe, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GREEN_THEME } from "../../utils/theme";

export default function ContactSosial() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: 28,
      marginTop: 18,
      marginBottom: 12,
    }}>
      <a
        href="https://instagram.com/cdeviamart"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#E1306C", fontSize: 32 }}
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="https://github.com/cdeviamart"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: GREEN_THEME.text, fontSize: 32 }}
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/company/cdeviamart"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#0A66C2", fontSize: 32 }}
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://cdeviamart.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: GREEN_THEME.accent, fontSize: 32 }}
        aria-label="Website"
      >
        <FaGlobe />
      </a>
    </div>
  );
}