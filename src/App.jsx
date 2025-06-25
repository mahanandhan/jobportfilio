import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative font-sans text-white overflow-x-hidden min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      
      {/* Floating glow layers (optional but enhances 3D depth) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 opacity-20 blur-[120px] rounded-full animate-pulse z-0"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500 opacity-20 blur-[160px] rounded-full animate-pulse z-0"></div>
      
      {/* Main Content (Above Background) */}
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
