import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main>
      {/* <CustomCursor /> */}
      <Navbar />
      <Header />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
