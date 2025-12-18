function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#050816]/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Name */}
        <h1 className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 tracking-wide">
          Narayanam Mahanandhan
        </h1>

        {/* Links */}
        <div className="hidden sm:flex gap-6 text-sm sm:text-base text-white/80 font-medium">
          <a href="#about" className="hover:text-sky-400 transition duration-200">About</a>
          <a href="#skills" className="hover:text-purple-400 transition duration-200">Skills</a>
          <a href="#projects" className="hover:text-pink-400 transition duration-200">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition duration-200">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
