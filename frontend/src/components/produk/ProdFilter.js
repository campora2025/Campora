import React from "react";
import PropTypes from "prop-types";
import { categories } from "../../data/categories";

// Style konsisten dengan CategProd.js
const CYBER = {
  surface: "#23242a",
  accent: "#FF5722",
  accent2: "#FFC107",
  neon: "#00bfae",
  text: "#E0E0E0",
  textDim: "#B0B0B0",
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
          background: selected === "" ? CYBER.accent : CYBER.surface,
          color: selected === "" ? "#fff" : CYBER.textDim,
          border: `2px solid ${CYBER.accent2}22`,
          borderRadius: 8,
          padding: "8px 20px",
          fontWeight: FONT.headerWeight,
          fontFamily: FONT.family,
          fontSize: 16,
          letterSpacing: 0.7,
          cursor: "pointer",
          boxShadow: selected === "" ? `0 2px 8px ${CYBER.accent2}22` : "none",
          transition: "all 0.18s",
        }}
        onMouseOver={e => {
          e.currentTarget.style.background = CYBER.neon;
          e.currentTarget.style.color = CYBER.surface;
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = selected === "" ? CYBER.accent : CYBER.surface;
          e.currentTarget.style.color = selected === "" ? "#fff" : CYBER.textDim;
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
            background: selected === cat.id ? CYBER.accent : CYBER.surface,
            color: selected === cat.id ? "#fff" : CYBER.textDim,
            border: `2px solid ${CYBER.accent2}22`,
            borderRadius: 8,
            padding: "8px 20px",
            fontWeight: FONT.headerWeight,
            fontFamily: FONT.family,
            fontSize: 16,
            letterSpacing: 0.7,
            cursor: "pointer",
            boxShadow: selected === cat.id ? `0 2px 8px ${CYBER.accent2}22` : "none",
            transition: "all 0.18s",
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = CYBER.neon;
            e.currentTarget.style.color = CYBER.surface;
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = selected === cat.id ? CYBER.accent : CYBER.surface;
            e.currentTarget.style.color = selected === cat.id ? "#fff" : CYBER.textDim;
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