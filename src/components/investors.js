export default function Investors() {
    return (
      <div className="Investors" style={{ flexDirection: "column" }}>
        <h1 style={{ color: "#0ac182", fontSize: "4rem", marginTop: "4rem" }}>Investors</h1>
        <p style={{ color: "white", fontSize: "1rem", marginTop: "1.5rem", marginBottom: "5rem", marginRight: "4rem" }}>
          Challenge your limits with events full of uncertainties
        </p>
        <div className="image-gallery" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5rem" }}>
          <img src="inflect.webp" alt="Image 1" style={{ width: "20%", height: "15vh", marginRight: "10px" }} />
          <img src="nirman.webp" alt="Image 2" style={{ width: "20%", height: "15vh", marginRight: "10px" }} />
          <img src="titan.webp" alt="Image 3" style={{ width: "20%", height: "15vh", marginRight: "10px" }} />
          <img src="huddle.webp" alt="Image 4" style={{ width: "20%", height: "15vh", marginRight: "10px" }} />
          <img src="venture.webp" alt="Image 5" style={{ width: "25%", height: "15vh", marginRight: "10px" }} />
        </div>
        <hr style={{ width: "100%", borderTop: "0.02rem solid #0ac182", marginBottom: "1rem",marginTop:"6rem" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" ,marginTop:"5rem"}}>
          <h2 style={{ color: "#0ac182", fontSize: "4rem", marginTop: "1rem" }}>Grab your tickets now!</h2>
          <button
            style={{
              backgroundColor: "#ffffff",
              color:"black",
              padding: "1rem",
              borderRadius: "5rem",
              width:"10rem"
            }}
          >
            GET TICKETS 

          </button>
        </div>
        <p style={{ color: "white", fontSize: "1rem", marginTop: "1.5rem", marginBottom: "5rem", marginRight: "4rem" }}>
          The North India’s Biggest Entrepreneurship Summit awaits you!
        </p>
        <hr style={{ width: "100%", borderTop: "0.02rem solid #0ac182",marginTop:"1rem" }} />

      </div>
    );
  }
  