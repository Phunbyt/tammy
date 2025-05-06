import Accolades from "../../components/Accolades/Accolades";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import NavBar from "../../components/NavBar/NavBar";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <NavBar />
      <Hero />
      <Contact />
      <Skills />
      <Projects />
      <Accolades />
      <Footer />
    </main>
  );
};

export default Home;
