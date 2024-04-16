export default function Cover() {
    return (
      <div
        style={{
          width: "100vw",
          height: "87vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src="./mainText.webp" alt="cover image" width="40%" height="auto" />
        <p style={{ color: "white", marginTop: "1rem" }}>
          The flagship event of the Entrepreneurship Cell, IIT Roorkee promoting
          entrepreneurship
        </p>
        <div style={{ display: "flex", flexDirection: "row", marginTop: "3rem" }}>
          <button
            style={{
              backgroundColor: "#45db9c",
              color: "#010101",
              padding: "0.8rem",
              borderRadius: "0.4rem",
              width: "10rem",
              marginRight: "1rem",
              fontWeight: "500",
              fontSize: "1rem",
            }}
          >
            Register
          </button>
          <button
            style={{
              backgroundColor: "#010101",
              color: "white",
              padding: "0.8rem",
              borderRadius: "0.4rem",
              width: "10rem",
              fontWeight: "500",
              fontSize: "1rem",
              border:"2px solid #45db9c",
              marginLeft:"1rem"
            }}
          >
            Tickets
          </button>
        </div>
      </div>
    );
  }