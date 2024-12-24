import HeroText from '../components/HeroText';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import CV from '../components/CV';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="home">
      <HeroText />
      <About />
      <Projects />
      <Skills />
      <CV />
      <Contact />
    </div>
  );
};

export default Home;