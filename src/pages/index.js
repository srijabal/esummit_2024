
import Check from "../components/check";
import Speaker from "../components/speaker";
import Header from "@/components/header";
import About from "@/components/about";
import Investors from "@/components/investors";
import Theme from "@/components/theme";
import Footer from "@/components/footer";
import Cover from "@/components/cover";

export default function Home() {
  const data = [
    { logo1: "/frame2.webp", head: "Ideastorm", sub: "Premier case building and piching competition at E-summit'24 , now tailored for school students to kickstart their Enterpreneurial ambitions", image: "./ideastorm.webp" },
    { logo1: "/frame2.webp", head: "Investors Vista", sub: "We will shape minds that will give you the ability of investing like sharks through this event.", image: "./vista.webp" },
    { logo1: "/frame2.webp", head: "Emerge Bootcamp", sub: "A two-week program including the online sessions or course material, assignments, & the final project", image: "./emerge.webp" },
    { logo1: "/frame2.webp", head: "Productathon AI", sub: "A hackathon uniting AI enthusiasts to solve real problems and foster innovation.", image: "./Ai.webp" },
    { logo1: "/frame2.webp", head: "IIQF Workshop", sub: "A two day workshop on Stochastic modelling of financial derivatives by IIQF. The most demanded industrial skill in finance for beginners", image: "./emerge.webp" },
    { logo1: "/frame2.webp", head: "Design Workshop", sub: "Unlock creativity at our workshop with Prachi Jain, Google UX Manager. Elevate your design skills with insights and inspiration.", image: "./emerge.webp" },
  ]

  const data2 = [
    {title: "Amit k. Agarwal", subtitle: "Founder and CEO NOBroker.com",para: "Founded India's largest real estate platform and only property-tech Unicorn NoBroker.com in 2014", speakerImage:"./amit2.webp" },
    {title: "Dr. Vinod Kumar", subtitle: "Director INSpace",para: "Paving the path for the development of the Indian space ecosystem as the Director Promotion of IN-SPACE", speakerImage:"./sh.webp" },
    {title: "Shireesh Joshi", subtitle: "Chief Business Officer, ONDC",para: "Contributing greatly on project on e-commerce backed by ministry of industry and commerce and DPIIT as CBO in ONDC", speakerImage:"./vi.webp" },
    {title: "Ganeshprasad S", subtitle: "Co-Founder and COO at Think School",para: "India's No.1 Storyteller", speakerImage:"./ganeshP.webp" },
    
  ]

  return (
    <>
      <div style={{display:"flex",flexWrap:"wrap", flexDirection:"row",backgroundImage:"url(./E-Summit.webp)",backgroundRepeat:"no-repeat",backgroundSize:"cover",justifyContent:"center",padding:"5rem", zIndex: 1000000}

      }>
        <Header/>
        <Cover/>
        <About/>
        <Theme/>
        {data.map((item, index) => (

          <Check key={index} logo1={item.logo1} head={item.head} sub={item.sub} image={item.image} />
        ))}

        {data2.map((item, index) => (
            <Speaker key={index} speakerImage={item.speakerImage} title={item.title} subtitle={item.subtitle} para={item.para} />
        ))}
        <Investors/>
      </div>
     <Footer/>
    </>

  );
}



