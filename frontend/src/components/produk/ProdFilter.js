import PropTypes from "prop-types";
import { categories } from "../../data/categories";

// Style konsisten dengan tema hijau light mode
const GREEN_THEME = {
  surface: "#ffffff",
  accent: "#16a085",
  accent2: "#27ae60",
  neon: "#2ecc71",
  text: "#1a4d40",
  textDim: "#4a7068",
  border: "#e8f6f3",
  hover: "#d5f4ef",
  shadow: "rgba(22, 160, 133, 0.1)",
};
const FONT = {
  family: "'Fira Mono', 'JetBrains Mono', 'Roboto Mono', 'Consolas', monospace",
  headerWeight: 700,
};

export default function ProdFilter({ selected, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 14,
        flexWrap: "wrap",
        marginBottom: 28,
        justifyContent: "center",
      }}
    >
      <button
        type="button"
        onClick={() => onChange("")}
        style={{
          background: selected === "" ? GREEN_THEME.accent : GREEN_THEME.surface,
          color: selected === "" ? "#fff" : GREEN_THEME.textDim,
          border: `2px solid ${GREEN_THEME.accent2}22`,
          borderRadius: 8,
          padding: "8px 20px",
          fontWeight: FONT.headerWeight,
          fontFamily: FONT.family,
          fontSize: 16,
          letterSpacing: 0.7,
          cursor: "pointer",
          boxShadow: selected === "" ? `0 2px 8px ${GREEN_THEME.accent2}22` : "none",
          transition: "all 0.18s",
        }}
        onMouseOver={e => {
          e.currentTarget.style.background = GREEN_THEME.neon;
          e.currentTarget.style.color = GREEN_THEME.surface;
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = selected === "" ? GREEN_THEME.accent : GREEN_THEME.surface;
          e.currentTarget.style.color = selected === "" ? "#fff" : GREEN_THEME.textDim;
        }}
      >
        Semua
      </button>
      {categories.map(cat => (
        <button
          key={cat.id}
          type="button"
          onClick={() => onChange(cat.id)}
          style={{
            background: selected === cat.id ? GREEN_THEME.accent : GREEN_THEME.surface,
            color: selected === cat.id ? "#fff" : GREEN_THEME.textDim,
            border: `2px solid ${GREEN_THEME.accent2}22`,
            borderRadius: 8,
            padding: "8px 20px",
            fontWeight: FONT.headerWeight,
            fontFamily: FONT.family,
            fontSize: 16,
            letterSpacing: 0.7,
            cursor: "pointer",
            boxShadow: selected === cat.id ? `0 2px 8px ${GREEN_THEME.accent2}22` : "none",
            transition: "all 0.18s",
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = GREEN_THEME.neon;
            e.currentTarget.style.color = GREEN_THEME.surface;
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = selected === cat.id ? GREEN_THEME.accent : GREEN_THEME.surface;
            e.currentTarget.style.color = selected === cat.id ? "#fff" : GREEN_THEME.textDim;
          }}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}

ProdFilter.propTypes = {
  selected: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};