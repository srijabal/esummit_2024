export default function Header() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#00000",
          position: "fixed",
          top: 0,
          width: "100vw",
          height: "5rem",
          color: "white",
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div style={{ marginLeft: "2rem" }}>
          <img src="logo.svg" alt="E-Summit Logo" />
        </div>
        <div style={{ marginRight: "2rem" }}>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "2rem",
            }}
          >
            Home
          </a>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "2rem",
            }}
          >
            About
          </a>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "2rem",
            }}
          >
            Events
          </a>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "2rem",
            }}
          >
            Sponsors
          </a>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "2rem",
            }}
          >
            Contact
          </a>
        </div>

        <div
          style={{ display: "flex", flexDirection: "row", marginRight: "2rem" }}
        >
          <button
            style={{
              borderColor: "#0ac182",
              border: "4",
              padding: "1rem",
              borderRadius: "1rem",
            }}
          >
            Login
          </button>
          <button
            style={{
              marginLeft: "1rem",
              backgroundColor: "#0ac182",
              padding: "1rem",
              borderRadius: "1rem",
            }}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}
