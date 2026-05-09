import { useState } from "react";

function PlatformButton({ label, href, color, accent }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "11px 22px",
        borderRadius: "50px",
        background: hovered ? accent : color,
        color: "#fff",
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 700,
        fontSize: "0.9rem",
        letterSpacing: "0.1em",
        textDecoration: "none",
        textTransform: "uppercase",
        transition: "all 0.22s ease",
        boxShadow: hovered
          ? `0 8px 28px ${color}88`
          : `0 3px 12px ${color}44`,
        transform: hovered ? "translateY(-2px) scale(1.04)" : "none",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </a>
  );
}

export default PlatformButton;
