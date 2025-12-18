function About() {
  return (
    <section
      id="about"
      className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-[#050816] via-[#0b1021] to-[#050816] text-white"
    >
      {/* Background glow */}
      <div className="absolute -top-10 -left-20 w-72 h-72 bg-purple-500 rounded-full blur-[120px] opacity-20 animate-pulse z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT: Hero Text */}
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-300">
            Full‑Stack Developer • UI/UX Designer
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I&apos;m{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400">
              Narayanam Mahanandhan
            </span>{' '}
            – Full‑Stack Developer & Product / UI‑UX Designer
          </h2>

          <p className="text-white/80 max-w-xl">
            Building SaaS, UI/UX-Designing with clean interfaces and
            user‑centric experiences. I blend strong engineering with
            UI/UX thinking to design journeys that look great and actually convert.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-sm font-semibold shadow-[0_10px_30px_rgba(56,189,248,0.45)] transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-sm font-semibold transition"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* RIGHT: UI-like tiles / cards (inspired by your image) */}
        <div className="grid grid-cols-2 gap-4">
          {/* Big dev/analytics card */}
          <div className="col-span-2 bg-white/5 rounded-3xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-purple-500 flex items-center justify-center text-2xl">
              🧑‍💻
            </div>
            <div>
              <p className="text-xs text-white/60">Role</p>
              <p className="text-sm font-semibold">Full‑Stack Dev & UI/UX</p>
              <p className="text-xs text-emerald-300 mt-1">End‑to‑end product builder</p>
            </div>
          </div>

          {/* Mini project / UI tiles */}
          <div className="bg-white/5 rounded-3xl p-4 border border-white/10 flex flex-col justify-between">
            <p className="text-xs text-white/60 mb-1">Focus</p>
            <p className="text-sm font-semibold mb-2">UI/UX Design</p>
            <p className="text-[11px] text-white/70">
              Wireframes, high‑fi, prototypes & user flows.
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl p-4 border border-white/10 flex flex-col justify-between">
            <p className="text-xs text-white/60 mb-1">Tech Stack</p>
            <p className="text-[11px] text-white/80">
              React • Next.js • Node.js • MongoDB • Tailwind
            </p>
            <p className="text-[11px] text-sky-300 mt-1">Figma • Framer • UX Research</p>
          </div>

          <div className="col-span-2 bg-white/5 rounded-3xl p-4 border border-white/10 flex items-center justify-between">
            <div>
              <p className="text-xs text-white/60">Journey</p>
              <p className="text-sm font-semibold">10+ side projects shipped</p>
              <p className="text-[11px] text-white/70">
                From UI/UX design to full-stack development.
              </p>
            </div>
            <span className="text-xl">🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
