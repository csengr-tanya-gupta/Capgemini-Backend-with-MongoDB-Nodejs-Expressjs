import NavButton from "./NavButton";
import ShopNowButton from "./ShopNowButton";
import PlatformButton from "./PlatformButton";
import FloatingShape from "./FloatingShape";
import HamburgerIcon from "./HamburgerIcon";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Shop", href: "https://www.amazon.com" },
  { label: "Sale", href: "https://www.ebay.com" },
  { label: "Login", href: "#" },
];

const platforms = [
  { label: "Amazon", href: "https://www.amazon.com/deals", color: "#FF9900", accent: "#e68a00" },
  { label: "eBay", href: "https://www.ebay.com/deals", color: "#e53238", accent: "#c0272d" },
  { label: "Etsy", href: "https://www.etsy.com/sale", color: "#F56400", accent: "#d45700" },
  { label: "Zalando", href: "https://www.zalando.com", color: "#FF6900", accent: "#e05e00" },
  { label: "ASOS", href: "https://www.asos.com/sale", color: "#2d2d2d", accent: "#111" },
  { label: "Shein", href: "https://www.shein.com", color: "#bb4ad6", accent: "#9e3db8" },
];

function SuperSaleLanding() {
  return (
    <div
      style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        minHeight: "100vh",
        background: "#f0f0f0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "40px 20px 60px",
      }}
    >
      <style>{`
        @keyframes floatUp {
          0%   { opacity:0; transform: translateY(30px); }
          100% { opacity:1; transform: translateY(0); }
        }
        @keyframes blobPulse {
          0%,100% { transform: scale(1) rotate(0deg); }
          50%     { transform: scale(1.03) rotate(1deg); }
        }
      `}</style>

      {/* Card wrapper */}
      <div
        style={{
          width: "100%",
          maxWidth: "960px",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0,0,0,0.18)",
          position: "relative",
          background: "#fca5a5",
          animation: "floatUp 0.6s ease both",
        }}
      >
        {/* Background blobs */}
        <div style={{
          position: "absolute", top: "-60px", right: "-60px",
          width: "320px", height: "320px", borderRadius: "50%",
          background: "linear-gradient(135deg,#f59e0b,#fbbf24)",
          animation: "blobPulse 6s ease-in-out infinite",
          zIndex: 0,
        }} />
        <div style={{
          position: "absolute", bottom: "-80px", left: "-60px",
          width: "340px", height: "260px", borderRadius: "60% 40% 70% 30%",
          background: "linear-gradient(135deg,#ec4899,#f43f5e)",
          animation: "blobPulse 7s ease-in-out infinite reverse",
          zIndex: 0,
        }} />
        <div style={{
          position: "absolute", top: "80px", left: "50%",
          transform: "translateX(-30%)",
          width: "500px", height: "420px", borderRadius: "50%",
          background: "rgba(255,182,193,0.5)",
          zIndex: 0,
        }} />

        {/* Floating Decorations */}
        <FloatingShape type="star4" style={{ top: "80px", right: "310px", fontSize: "28px", zIndex: 2 }} />
        <FloatingShape type="star4" style={{ top: "160px", right: "140px", fontSize: "16px", zIndex: 2 }} />
        <FloatingShape type="star4" style={{ bottom: "160px", left: "290px", fontSize: "18px", zIndex: 2 }} />
        <FloatingShape type="circle" style={{ top: "90px", right: "80px", size: "36px", zIndex: 2 }} />
        <FloatingShape type="circle" style={{ bottom: "100px", right: "120px", size: "28px", zIndex: 2 }} />
        <FloatingShape type="diamond" style={{ bottom: "90px", right: "60px", size: "28px", zIndex: 2 }} />
        <FloatingShape type="pill" style={{ top: "210px", left: "220px", width: "80px", height: "16px", rotate: "-30deg", zIndex: 2 }} />
        <FloatingShape type="pill" style={{ top: "240px", left: "240px", width: "60px", height: "14px", rotate: "20deg", zIndex: 2 }} />

        {/* Navbar */}
        <nav style={{
          position: "relative", zIndex: 10,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "22px 36px",
          background: "rgba(0,0,0,0.04)",
        }}>
          <span style={{
            color: "#fff", fontWeight: 900, fontSize: "1.2rem",
            letterSpacing: "0.05em", textShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}>
            LOGO HERE
          </span>
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            {navLinks.map(link => (
              <NavButton key={link.label} label={link.label} href={link.href} />
            ))}
            <HamburgerIcon />
          </div>
        </nav>

        {/* Hero Content */}
        <div style={{
          position: "relative", zIndex: 5,
          display: "flex", alignItems: "center",
          padding: "20px 48px 60px",
          minHeight: "420px",
          gap: "24px",
        }}>
          <div style={{ flex: "0 0 auto", maxWidth: "380px" }}>
            <p style={{
              color: "#fff", fontWeight: 700, fontSize: "1.15rem",
              letterSpacing: "0.12em", textTransform: "uppercase",
              margin: "0 0 4px",
              textShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}>
              Final Season
            </p>
            <h1 style={{
              color: "#fff", fontWeight: 900, lineHeight: 0.92,
              fontSize: "clamp(72px,9vw,108px)",
              margin: "0 0 20px",
              textShadow: "0 4px 20px rgba(0,0,0,0.12)",
              letterSpacing: "-0.01em",
              fontStyle: "italic",
            }}>
              SUPER<br />SALE
            </h1>
            <p style={{
              color: "rgba(255,255,255,0.9)", fontSize: "0.9rem",
              lineHeight: 1.55, maxWidth: "300px", margin: 0,
            }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod.
            </p>
            <ShopNowButton href="https://www.amazon.com/deals" />
          </div>

          {/* Right: model image placeholder */}
          <div style={{
            flex: 1, display: "flex", justifyContent: "center",
            alignItems: "flex-end", position: "relative",
            minHeight: "360px",
          }}>
            <div style={{
              position: "absolute",
              width: "340px", height: "340px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.18)",
              top: "50%", left: "50%",
              transform: "translate(-50%,-45%)",
            }} />
            <div style={{
              width: "240px", height: "340px",
              background: "rgba(255,255,255,0.15)",
              borderRadius: "50% 50% 0 0 / 40% 40% 0 0",
              display: "flex", alignItems: "center", justifyContent: "center",
              backdropFilter: "blur(2px)",
              border: "1.5px solid rgba(255,255,255,0.3)",
              flexDirection: "column", gap: "12px",
            }}>
              <span style={{ fontSize: "48px" }}>🛍️</span>
              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.8rem", letterSpacing: "0.1em" }}>
                MODEL IMAGE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Buttons Section */}
      <div style={{
        marginTop: "44px",
        width: "100%", maxWidth: "960px",
        animation: "floatUp 0.6s 0.2s ease both",
        opacity: 0,
        animationFillMode: "forwards",
      }}>
        <p style={{
          textAlign: "center",
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: "1rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#888",
          marginBottom: "20px",
        }}>
          Shop On Your Favourite Platform
        </p>
        <div style={{
          display: "flex", flexWrap: "wrap",
          gap: "14px", justifyContent: "center",
        }}>
          {platforms.map(p => (
            <PlatformButton
              key={p.label}
              label={p.label}
              href={p.href}
              color={p.color}
              accent={p.accent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SuperSaleLanding;
