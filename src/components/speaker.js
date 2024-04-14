import SpeakerCard from "../components/speakerCard";


export default function Speaker() {

    const data2 = [
        {title: "Amit k. Agarwal", subtitle: "Founder and CEO NOBroker.com",para: "Founded India's largest real estate platform and only property-tech Unicorn NoBroker.com in 2014", speakerImage:"./amit2.webp" },
        {title: "Dr. Vinod Kumar", subtitle: "Director INSpace",para: "Paving the path for the development of the Indian space ecosystem as the Director Promotion of IN-SPACE", speakerImage:"./sh.webp" },
        {title: "Shireesh Joshi", subtitle: "Chief Business Officer, ONDC",para: "Contributing greatly on project on e-commerce backed by ministry of industry and commerce and DPIIT as CBO in ONDC", speakerImage:"./vi.webp" },
        {title: "Ganeshprasad S", subtitle: "Co-Founder and COO at Think School",para: "India's No.1 Storyteller", speakerImage:"./ganeshP.webp" },
        
      ]

    return(
        <>
        {/* <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
        <h1 style={{ color:"#0ac182",fontSize:"4rem",marginBottom:"1rem"}}>Speakers</h1>
        <p style={{color:"white",fontSize:"1rem",marginBottom:"3rem"}}>Listen from the experiences of industry experts and Let them leave you speechless</p>
       
        </div> */}
         <div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: "5rem", marginRight: '80rem',width:"97%" }}>
                <h1 style={{ color: "#0ac182", fontSize: "4rem", marginTop: "1rem", marginRight: "2rem",marginLeft:"5rem" }}>Speakers</h1>

                <button
                    style={{
                        backgroundColor: "#ffffff", color: "black", padding: "1rem", borderRadius: "5rem", width: "10rem",justifySelf:"flex-end"
                    }}
                >
                    ALL SPEAKERS
                </button>
            </div>

            <p style={{ color: "white", fontSize: "1rem", marginTop: "1.5rem", marginBottom: "5rem", marginRight: "4rem",marginLeft:"5rem" }}>
            Listen from the experiences of industry experts and Let them leave you speechless   </p>
        </div>
         {data2.map((item, index) => (
            <SpeakerCard key={index} speakerImage={item.speakerImage} title={item.title} subtitle={item.subtitle} para={item.para} />
        ))}
        </>
    )
}