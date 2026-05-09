function HamburgerIcon() {
  return (
    <div
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      {[0, 1, 2].map(i => (
        <div
          key={i}
          style={{
            width: i === 1 ? "18px" : "24px",
            height: "2.5px",
            background: "#fff",
            borderRadius: "2px",
          }}
        />
      ))}
    </div>
  );
}

export default HamburgerIcon;
