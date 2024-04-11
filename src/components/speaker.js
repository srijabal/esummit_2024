export default function Speaker({ title, subtitle, para, speakerImage }) {
  return (
    <>
      <div
        className="card2"
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
          borderRadius: "2rem",
          marginLeft:"2rem",
          marginBottom: "1rem"
        }}
      >
        <div
          style={{
            width: "30%",
            alignSelf: "flex-start",
            marginLeft: "2rem",
            flexDirection: "column",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "15rem",
            width: "15rem",
            
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: "2.5rem",
            }}
          ></div>
          <div style={{ height: "60%" }}>
            <h1
              style={{
                textAlign: "left",
                color: "black",
                marginBottom: "0.4rem",
                fontFamily: "sans-serif",
                fontSize: "1.9rem",
                fontWeight: "3rem",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                textAlign: "left",
                color: "black",

                fontSize: "0.8rem",
                fontWeight: "1rem",
                marginBottom: "3rem",
              }}
            >
              {subtitle}
            </p>
            <p
              style={{
                textAlign: "left",
                color: "black",
                marginTop:"3rem",
                fontSize: "0.8rem",
                fontWeight: "1rem",
              }}
            >
              {para}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "row" , justifyItems : "flex-start", width: "100%"}}>
            <a
              href="https://www.esummit.in/"
              style={{
                color: "white",
                fontWeight: "1rem",
                marginRight:"1rem",
                fontSize: "0.8rem",
              }}
            >
               <img
              src="./linkedin.svg"
              alt="E-Summit Logo"
              style={{ width: "2rem", height: "2rem", marginTop: "5rem",marginRight:"0.5rem"}}
            />
            </a>
          </div>
        </div>
        <img
        src={speakerImage}
        alt="E-Summit Logo"
        style={{ width: "18rem", height: "20rem",  borderEndEndRadius: "2rem", borderTopRightRadius: "2rem" }}
      />
      
      </div>
    </>
  );
}
