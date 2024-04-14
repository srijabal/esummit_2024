import CheckCard from "../components/checkCard";


export default function Check () {

    const data = [
        { logo1: "/frame2.webp", head: "Ideastorm", sub: "Premier case building and piching competition at E-summit'24 , now tailored for school students to kickstart their Enterpreneurial ambitions", image: "./ideastorm.webp" },
        { logo1: "/frame2.webp", head: "Investors Vista", sub: "We will shape minds that will give you the ability of investing like sharks through this event.", image: "./vista.webp" },
        { logo1: "/frame2.webp", head: "Emerge Bootcamp", sub: "A two-week program including the online sessions or course material, assignments, & the final project", image: "./emerge.webp" },
        { logo1: "/frame2.webp", head: "Productathon AI", sub: "A hackathon uniting AI enthusiasts to solve real problems and foster innovation.", image: "./Ai.webp" },
      ]

    return(
        <>
       
         <div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: "5rem", marginRight: '80rem',width:"100%" }}>
                <h1 style={{ color: "#0ac182", fontSize: "4rem", marginTop: "1rem", marginRight: "2rem",marginLeft:"1rem" }}>Events</h1>

                <button
                    style={{
                        backgroundColor: "#ffffff", color: "black", padding: "1rem", borderRadius: "5rem", width: "10rem",justifySelf:"flex-end"
                    }}
                >
                    VIEW ALL
                </button>
            </div>

            <p style={{ color: "white", fontSize: "1rem", marginTop: "1.5rem", marginBottom: "5rem", marginRight: "4rem",marginLeft:"1rem" }}>
            Challenge your limits with events full of uncertainities   </p>
        </div>
        {data.map((item, index) => (

<CheckCard key={index} logo1={item.logo1} head={item.head} sub={item.sub} image={item.image} />
))}
        </>
    )
}