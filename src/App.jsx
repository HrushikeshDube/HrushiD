import './App.css'
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Achievement from './Components/Achievement';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <>
      <div>
        <Navbar />
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="achievements">
          <Achievement />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="Footer">
          <Footer />
        </section>
      </div>

    </>
  )
}

export default App
