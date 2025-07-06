import { FaWhatsapp } from "react-icons/fa";

const CYBER = {
  accent: "#FF5722",
  neon: "#00bfae",
};

export default function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    const message = "Halo Campora! Saya ingin konsultasi untuk persiapan KKN.";
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      onClick={handleWhatsAppClick}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        width: "60px",
        height: "60px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 1000,
        boxShadow: "0 4px 16px rgba(37, 211, 102, 0.3)",
        transition: "all 0.3s ease",
        animation: "pulse 2s infinite"
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(37, 211, 102, 0.4)";
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(37, 211, 102, 0.3)";
      }}
    >
      <FaWhatsapp size={28} color="white" />
      
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </div>
  );
}
