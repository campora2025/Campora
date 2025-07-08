import Footer from "../components/Footer";
import MainNavbar from "../components/Navbar";
import ProdList from "../components/produk/ProdList";
import { GREEN_THEME } from "../utils/theme";

export default function ProductPage() {
  return (
    <>
      <MainNavbar />
      <div style={{ minHeight: "80vh", background: GREEN_THEME.bg, padding: "36px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 12px" }}>
          <ProdList />
        </div>
      </div>
      <Footer />
    </>
  );
}