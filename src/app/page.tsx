
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Skills from "@/components/Skill";
import AboutUs from "@/components/About-Us";
import CarouselComp from "@/components/Banner/Carousal";
import Component from "@/components/Banner/New";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <Navbar />
      {/* <Banner /> */}
      <Component />
      <CarouselComp />
      <AboutUs />
      {/* <Projects /> */}
      <Skills />
      <Footer />
    </div>
  );
}