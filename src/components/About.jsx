function About() {
  return (
    <section
      id="about"
      className="relative pt-32 pb-20 px-6 text-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      {/* Background glow */}
      <div className="absolute -top-10 -left-20 w-72 h-72 bg-purple-500 rounded-full blur-[120px] opacity-20 animate-pulse z-0"></div>

      <h2 className="relative z-10 text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
        About Me
      </h2>

      <div className="relative z-10 max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-[0_20px_40px_rgba(255,255,255,0.1)] transform hover:rotate-1 hover:scale-105 transition duration-500">
        <p className="text-lg text-white/90 mb-4">
          I’m <span className="font-semibold text-blue-300">Narayanam Mahanandhan</span>, a passionate Full Stack Developer with a strong foundation in <span className="text-pink-300">React.js</span>, <span className="text-pink-300">Node.js</span>, <span className="text-pink-300">Express.js</span>, and <span className="text-pink-300">MongoDB</span>.
        </p>

        <p className="text-white/80 mb-4">
          I love building intelligent, fast, and scalable applications that solve real-world problems. I'm currently exploring AI/ML, cyber security, and 3D visual interfaces.
        </p>

        <div className="text-white/70 text-left mt-6">
          <h3 className="text-xl font-semibold text-purple-300 mb-2">🚀 Highlight Projects:</h3>
          <ul className="space-y-3 list-disc list-inside">
            <li>
              <span className="font-bold text-pink-400">LearnPeak</span> — An AI-powered e-learning platform offering curated YouTube content and personalized recommendations.  
              <br />
              <a
                href="https://elearning-platform-zksp.vercel.app/"
                className="text-blue-400 underline hover:text-blue-500 text-sm"
                target="_blank"
                rel="noreferrer"
              >
                Visit LearnPeak →
              </a>
            </li>
            <li>
              <span className="font-bold text-pink-400">Satellite Launch Tracker</span> — A web app built with MERN & Three.js to visualize space launches with real-time authentication and 3D Earth orbit tracking.  
              <br />
              <a
                href="https://satellitelaunchtracker.vercel.app/"
                className="text-blue-400 underline hover:text-blue-500 text-sm"
                target="_blank"
                rel="noreferrer"
              >
                View Tracker →
              </a>
            </li>
          </ul>
        </div>

        <p className="text-white/60 mt-6">
          My goal is to build platforms that empower users through innovation and simplicity. I’m always open to collaboration, learning, and sharing my journey with the community.
        </p>
      </div>
    </section>
  );
}

export default About;
