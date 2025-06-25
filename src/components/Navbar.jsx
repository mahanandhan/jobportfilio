function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/10 shadow-[0_5px_15px_rgba(255,255,255,0.1)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 tracking-wide">
          Narayanam Mahanandhan
        </h1>

        {/* Links */}
        <div className="flex gap-6 text-white font-medium">
          <a href="#about" className="hover:text-pink-400 transition duration-200">About</a>
          <a href="#skills" className="hover:text-purple-400 transition duration-200">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition duration-200">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition duration-200">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
