function Skills() {
    const skills = ['ReactJS', 'TailwindCSS', 'NodeJS', 'ExpressJS', 'MongoDB'];
  
    return (
      <section id="skills" className="p-10 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gradient-to-r from-purple-200 to-pink-200 text-gray-800 rounded-lg px-6 py-4 shadow-md"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Skills;
  