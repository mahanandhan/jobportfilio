function Projects() {
  const projects = [
    {
      title: 'LearnPeak Website',
      description: 'An e-learning platform offering top YouTube videos and resources.',
      link: 'https://elearning-platform-zksp.vercel.app/',
    },
    {
      title: 'Satellite Launch Tracker',
      description: 'A secure satellite tracker using MERN + 3D visuals.',
      link: 'https://satellitelaunchtracker.vercel.app/',
    },
    {
      title: 'NextGen Virtual Reality Experience – UI/UX Case Study',
      description: 'A comprehensive UI/UX case study for a VR experience platform.',
      link: 'https://www.figma.com/proto/pJ1YDdtXxGKbTQ2ct4s5hQ/Untitled?node-id=1-2',
    },
    {
      title: 'Shoe Store Ecommerce App – UI/UX Design',
      description: 'A modern e-commerce platform for a shoe store with UI/UX design.',
      link: 'https://www.figma.com/proto/usgKV6xZCU3Z5Bo9MeqsJB/Untitled?node-id=42-110',
    },
    {
      title: 'Web Developer Portfolio Website – UI Design',
      description: 'A modern portfolio website for a web developer with UI design.',
      link: 'https://www.figma.com/design/jEytT1UXVa0mMTzsv8F0cd/Untitled',
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-700 to-blue-500 opacity-20 blur-[120px] z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 mb-10">
          Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/10 text-white p-6 w-80 rounded-3xl shadow-[0_20px_40px_rgba(255,255,255,0.1)] backdrop-blur-lg border border-white/10 transform hover:rotate-2 hover:-translate-y-2 transition duration-500"
            >
              <h3 className="text-2xl font-bold text-purple-300 mb-2">{project.title}</h3>
              <p className="text-gray-200 text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-pink-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
