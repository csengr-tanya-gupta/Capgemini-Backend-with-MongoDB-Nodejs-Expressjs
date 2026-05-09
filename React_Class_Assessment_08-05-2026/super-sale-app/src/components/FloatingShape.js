function FloatingShape({ type, style }) {
  if (type === "circle") {
    return (
      <div
        style={{
          width: style.size,
          height: style.size,
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.7)",
          position: "absolute",
          ...style,
        }}
      />
    );
  }
  if (type === "star4") {
    return (
      <div
        style={{
          position: "absolute",
          color: "rgba(255,255,255,0.9)",
          fontSize: style.fontSize,
          ...style,
        }}
      >
        ✦
      </div>
    );
  }
  if (type === "diamond") {
    return (
      <div
        style={{
          width: style.size,
          height: style.size,
          border: "2px solid rgba(255,255,255,0.7)",
          transform: "rotate(45deg)",
          position: "absolute",
          ...style,
        }}
      />
    );
  }
  if (type === "pill") {
    return (
      <div
        style={{
          width: style.width,
          height: style.height,
          borderRadius: "50px",
          background: "rgba(255,255,255,0.18)",
          position: "absolute",
          transform: style.rotate ? `rotate(${style.rotate})` : "none",
          ...style,
        }}
      />
    );
  }
  return null;
}

export default FloatingShape;
