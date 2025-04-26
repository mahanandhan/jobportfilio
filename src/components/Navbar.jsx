function Navbar() {
    return (
      <nav className="flex justify-between items-center p-5 bg-white shadow-md fixed w-full z-50">
        <h1 className="text-2xl font-bold text-blue-600">Mahanandhan</h1>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  