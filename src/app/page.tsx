import Header from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero";
import About from "./Components/About";
import Services from "./Components/Services/services";
import History from "./Components/History/history";
import Footer from "./Components/Footer/footer";

export default function Home() {
  return (
  <div>
    <Header/>
    <Hero/>
    <About/>
    <Services/>
    <History/>
    <Footer/>
    </div>
  );
}
