import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center overflow-x-hidden"
      style={{
        minHeight: "100vh",
        padding: "100px 16px 28px",
        fontFamily:
          "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        color: "#E6EAF2",
        background: "#000",
      }}
    >
      <main
        style={{
          width: "100%",
          maxWidth: "980px",
          background: "rgba(2, 6, 23, 0.68)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "20px",
          padding: "26px",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "18px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <small
              style={{
                color: "rgba(255,255,255,0.75)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 600,
                fontSize: "12px",
              }}
            >
              AmethIntel
            </small>

            <h1
              style={{
                fontSize: "clamp(22px, 3.2vw, 34px)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              <span
                style={{
                  color: "#E6EAF2",
                  textShadow:
                    "0 0 16px rgba(192,38,211,0.22), 0 0 32px rgba(255,91,77,0.12)",
                }}
              >
                Why the name “AmenthIntel”?
              </span>
            </h1>
          </div>

          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              textDecoration: "none",
              padding: "12px 16px",
              borderRadius: "999px",
              border: "1px solid rgba(192,38,211,0.6)",
              background: "rgba(192,38,211,0.16)",
              color: "#FFFFFF",
              fontWeight: 700,
              whiteSpace: "nowrap",
              transition:
                "transform 160ms ease, background 160ms ease, border-color 160ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.background = "rgba(192,38,211,0.24)";
              e.currentTarget.style.borderColor = "rgba(192,38,211,0.85)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(192,38,211,0.16)";
              e.currentTarget.style.borderColor = "rgba(192,38,211,0.6)";
            }}
          >
            <span aria-hidden="true">←</span>
            Back to Home
          </Link>
        </div>

        {/* Content */}
        <section style={{ marginTop: "10px" }}>
          <h2
            style={{
              fontSize: "20px",
              marginBottom: "12px",
              color: "#FFFFFF",
              fontWeight: 600,
            }}
          >
            Origins of AmenthIntel
          </h2>

          <div
            style={{
              color: "rgba(230,234,242,0.82)",
              fontSize: "15px",
              lineHeight: 1.85,
              textAlign: "justify",
            }}
          >
            <p style={{ marginBottom: "14px" }}>
              Amenth is for <strong style={{ color: "#FFF" }}>Amethyst</strong>{" "}
              and Intel is obviously for{" "}
              <strong style={{ color: "#FFF" }}>Intelligence</strong> leading to
              the hybrid name{" "}
              <strong style={{ color: "#FFF" }}>AmenthIntel</strong>.
            </p>

            <p style={{ marginBottom: "14px" }}>
              The amethyst stone was a rare and valuable in the ancient world.
              The stone was associated with royalty, luxury and the divine due
              to its purple color which was highly prized due to its rarity
              (this is why purple is still considered the “Royal” color).
            </p>

            <p style={{ marginBottom: "14px" }}>
              The very name amethyst comes from the ancient Greek word{" "}
              <em>amethystos</em> (ἀμέθυστος), which translates directly to{" "}
              <strong style={{ color: "#FFF" }}>“not intoxicated”</strong>.
              Greeks and Romans believed the stone possessed the power to
              prevent drunkenness, sometimes making their drinking vessels out
              of the stone to keep a clear mind while drinking at political or
              business meetings. Additionally, Egyptian soldiers occasionally
              wore amethyst amulets into battle, believing the stone would ward
              off deception, keep them calm under pressure, and prevent panic in
              the chaos of war.
            </p>

            <p style={{ marginBottom: "14px" }}>
              With this history in mind, we chose the name AmenthIntel to be
              your sober, clear minded guide to strategic information in the
              biopharma space. We endeavor to provide a clear, unbiased
              strategic landscape of existing and potential opportunities in the
              biopharmaceutical space.
            </p>

            <p style={{ marginBottom: 0 }}>
              <strong style={{ color: "#FFF" }}>
                Join with us to get better, concise and relevant information for
                your drug discovery strategy!
              </strong>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;