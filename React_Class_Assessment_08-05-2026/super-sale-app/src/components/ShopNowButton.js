import { useState } from "react";

function ShopNowButton({ href }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-block",
        marginTop: "28px",
        padding: "14px 38px",
        border: "2.5px solid #fff",
        color: hovered ? "#ff4e8b" : "#fff",
        background: hovered ? "#fff" : "transparent",
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 700,
        fontSize: "1rem",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        textDecoration: "none",
        borderRadius: "3px",
        transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
        cursor: "pointer",
        boxShadow: hovered ? "0 6px 24px rgba(255,78,139,0.25)" : "none",
      }}
    >
      Shop Now
    </a>
  );
}

export default ShopNowButton;
