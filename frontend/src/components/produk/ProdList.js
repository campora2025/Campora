import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { products } from "../../data/products";
import ProdCard from "./ProdCard";
import ProdFilter from "./ProdFilter";

// Style konsisten dengan tema hijau light mode
const GREEN_THEME = {
  textDim: "#4a7068",
  text: "#1a4d40",
};

export default function ProdList() {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter produk berdasarkan kategori yang dipilih
  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  return (
    <div>
      <h2
        style={{
          fontWeight: 700,
          fontSize: 26,
          color: GREEN_THEME.text,
          letterSpacing: 1.1,
          marginBottom: 18,
          textAlign: "center",
        }}
      >
        Semua Produk
      </h2>
      <ProdFilter
        selected={selectedCategory}
        onChange={setSelectedCategory}
      />
      {filteredProducts.length === 0 ? (
        <div style={{ color: GREEN_THEME.textDim, textAlign: "center", margin: "48px 0" }}>
          Tidak ada produk pada kategori ini.
        </div>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4" style={{ justifyContent: "center" }}>
          {filteredProducts.map(product => (
            <Col key={product.id} style={{ display: "flex", justifyContent: "center" }}>
              <ProdCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}