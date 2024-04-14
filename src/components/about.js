

export default function About() {
    return (
      <div className="About" style={{ display: "flex", alignItems: "center" }}>
        <div className="about-section" >
          <h1 style={{ color: "#0ac182", fontSize: "4rem", marginTop: "4rem" }}>About</h1>
          <p style={{ color: "white", fontSize: "1rem", marginTop: "2rem", marginBottom: "5rem",marginRight:"4rem" }}>
            Premier entrepreneurial fest fostering entrepreneurship through Startup Expo, VC Lounge, <br />
            Business Conclave, Networking, Mentoring, and more.
            Unites global students, entrepreneurs, and investors for a dynamic <br /> experience.
          </p>
        </div>
        <div className="about-image">
          <img src="about.svg" alt="E-Summit at IIT Roorkee" style={{ width: "90%",height:"30vh" }} />
        </div>
      </div>
    );
  }
  