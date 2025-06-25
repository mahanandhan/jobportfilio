const skills = [
  {
    name: 'ReactJS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'TailwindCSS',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  },
  {
    name: 'NodeJS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'ExpressJS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    name: 'MongoDB',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-20 px-6 text-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden"
    >
      {/* Optional Glow Blur */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-600 rounded-full opacity-30 blur-[100px] z-0 animate-pulse"></div>

      <h2 className="relative z-10 text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
        Skills
      </h2>

      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-center max-w-5xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_20px_40px_rgba(255,255,255,0.1)] transform hover:-translate-y-3 hover:rotate-2 transition duration-500 p-6 flex flex-col items-center"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 mb-3 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            />
            <span className="text-sm font-semibold text-white">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
