
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Skills from "@/components/Skill";
import AboutUs from "@/components/About-Us";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Banner />
      <AboutUs />
      {/* <Projects /> */}
      <Skills />
      <Footer />
    </div>
  );
}