function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white text-center overflow-hidden"
    >
      {/* Optional background glow */}
      <div className="absolute -top-10 -right-20 w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-20 z-0 animate-pulse"></div>

      <h2 className="relative z-10 text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
        Contact Me
      </h2>

      <div className="relative z-10 max-w-md mx-auto bg-white/10 border border-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-[0_20px_40px_rgba(255,255,255,0.1)] transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500">
        <p className="text-lg mb-4 text-white/90">
          📞 <span className="text-blue-300 font-semibold">9618880149</span>
        </p>
        <p className="text-lg text-white/90">
          📧 <span className="text-pink-300 font-semibold">mahanandhanmanish@gmail.com</span>
        </p>
      </div>
    </section>
  );
}

export default Contact;
