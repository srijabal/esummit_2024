import { FaArrowRight } from "react-icons/fa"; 
export default function Check({logo1, head, sub,image}) {
  
  return (
    <>
      <div className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage: `url(${image})`,
          backgroundSize: "fit",
          backgroundRepeat: "no-repeat",
          height: "27.25rem",
          width: "40rem",
          marginLeft:"2rem",
         
          
          
        }}
      >
        <div
          style={{ width: "30%", alignSelf: "flex-start", marginLeft: "2rem" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: "2.5rem",
            }}
          >
            <img
              src={logo1}
              alt="E-Summit Logo"
              style={{ width: "60px", height: "60px", marginTop: "1rem" }}
            />
          </div>
          <div style={{height: "60%"}}>
            <h1
              style={{
                textAlign: "left",
                color: "white",
                marginBottom: "1.5rem",
                fontFamily: "sans-serif",
                fontSize: "1.5rem",
                fontWeight: "2rem"
              }}
            >
              {head}
            </h1>
            <p
              style={{
                textAlign: "left",
                color: "white",
                
                fontSize: "0.8rem",
                fontWeight: "1rem",
                
              }}
              
            >
                
              {sub}
            </p>
          </div>
          <div style={{display:"flex",flexDirection:"row"}}>
          <a href="https://www.esummit.in/" style={{ color: "white", fontWeight: "1rem",justifySelf:"flex-end",fontSize:"0.8rem",}}>
            Apply Now 
          </a>
          <FaArrowRight style={{color:"white",transform: "rotate(315deg)",marginLeft:"0.5rem"}} />
          </div>
        </div>
        
      </div>
    </>
  );
}