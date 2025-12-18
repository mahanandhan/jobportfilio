import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative font-sans text-white overflow-x-hidden min-h-screen bg-gradient-to-br from-[#050816] via-[#0b1021] to-[#050816]">
      {/* Floating glow layers */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 opacity-20 blur-[120px] rounded-full animate-pulse z-0"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 opacity-20 blur-[160px] rounded-full animate-pulse z-0"></div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
