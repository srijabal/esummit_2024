import Check from "@/components/check";
import Speaker from "@/components/speaker";
import Header from "@/components/header";
import About from "@/components/about";
import Investors from "@/components/investors";
import Theme from "@/components/theme";
import Footer from "@/components/footer";
import Cover from "@/components/cover";
import Workshop from "@/components/workshop";

export default function Home() {


 
  return (
    <>
      <div style={{display:"flex",flexWrap:"wrap", flexDirection:"row",backgroundImage:"url(./E-Summit.webp)",backgroundRepeat:"no-repeat",backgroundSize:"cover",justifyContent:"center",padding:"5rem", zIndex: 1000000}

      }>
        <Header/>
        <Cover/>
        <About/>
        <Theme/>
         <Check/>
         <Workshop/>
        <Speaker/>
        <Investors/>
      </div>
     <Footer/>
    </>

  );
}



