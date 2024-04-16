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
        <div style={{ marginLeft: "3rem" }}>
          <img src="logo.svg" alt="E-Summit Logo" />
        </div>
        <div style={{ marginRight: "3rem" }}>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "3rem",
            }}
          >
            Home
          </a>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "3rem",
            }}
          >
            Speakers
          </a>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "3rem",
            }}
          >
            Partners
          </a>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "3rem",
            }}
          >
            Events
          </a>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "3rem",
            }}
          >
            Tickets
          </a>

          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "3rem",
            }}
          >
            HiRes
          </a>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "3rem",
            }}
          >
            Agenda
          </a>
        </div>

        <div
          style={{ display: "flex", flexDirection: "row", marginRight: "3rem" }}
        >
          
           <button
            style={{
              backgroundColor: "#010101",
              color: "white",
              padding: "0.8rem",
              borderRadius: "0.4rem",
              width: "6.5rem",
              height:"3rem",
              fontWeight: "500",
              fontSize: "1rem",
              border:"2px solid #45db9c",
              marginLeft:"1rem",
              marginRight:"1.5rem"
            }}
          >
            Login
          </button>
          <button
            style={{
              backgroundColor: "#45db9c",
              color: "#010101",
              padding: "0.8rem",
              borderRadius: "0.4rem",
              width: "6.5rem",
              height:"3rem",
              marginRight: "1rem",
              fontWeight: "500",
              fontSize: "1rem",
            }}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}
