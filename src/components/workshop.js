import WorkshopCard from "../components/workshopCard";

export default function Workshop () {

    const data1 = [
      
        { logo1: "/frame2.webp", head: "IIQF Workshop", sub: "A two day workshop on Stochastic modelling of financial derivatives by IIQF. The most demanded industrial skill in finance for beginners", image: "./emerge.webp" },
        { logo1: "/frame2.webp", head: "Design Workshop", sub: "Unlock creativity at our workshop with Prachi Jain, Google UX Manager. Elevate your design skills with insights and inspiration.", image: "./emerge.webp" },
      ]

    return(
        <>
        
        <div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: "5rem", marginRight: '80rem',width:"95%" }}>
                <h1 style={{ color: "#0ac182", fontSize: "4rem", marginTop: "1rem", marginRight: "2rem",marginLeft:"6rem" }}>Workshops</h1>

                <button
                    style={{
                        backgroundColor: "#ffffff", color: "black", padding: "1rem", borderRadius: "5rem", width: "10rem",justifySelf:"flex-end"
                    }}
                >
                    VIEW ALL
                </button>
            </div>

            <p style={{ color: "white", fontSize: "1rem", marginTop: "1.5rem", marginBottom: "5rem", marginRight: "4rem",marginLeft:"6rem" }}>
            Challenge your limits with events full of uncertainities   </p>
        </div>
        {data1.map((item, index) => (

<WorkshopCard key={index} logo1={item.logo1} head={item.head} sub={item.sub} image={item.image} />
))}
        </>
    )
}