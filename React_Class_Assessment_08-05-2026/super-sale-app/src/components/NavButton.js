function NavButton({ label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#fff",
        fontWeight: 700,
        fontSize: "0.95rem",
        textDecoration: "none",
        letterSpacing: "0.04em",
        padding: "6px 4px",
        position: "relative",
        transition: "opacity 0.2s",
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
    >
      {label}
    </a>
  );
}

export default NavButton;
