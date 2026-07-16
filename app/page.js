export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#f4fbff",
      color: "#003B5C",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "40px"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
        Coastal Bin Concierge
      </h1>

      <h2 style={{ color: "#0B7FAB", marginBottom: "30px" }}>
        Proudly Serving San Clemente
      </h2>

      <p style={{ maxWidth: "700px", fontSize: "1.2rem", lineHeight: "1.8" }}>
        Never miss trash day again. We roll your bins out before collection
        and return them after pickup, giving you one less thing to worry about.
      </p>

      <button
        style={{
          marginTop: "40px",
          padding: "16px 36px",
          fontSize: "18px",
          background: "#0B7FAB",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Get Started
      </button>
    </main>
  );
}
