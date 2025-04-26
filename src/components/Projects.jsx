function Projects() {
    const projects = [
      {
        title: 'LearnPeak Website',
        description: 'An e-learning platform offering top YouTube videos and resources.',
        link: 'https://elearning-platform-zksp.vercel.app/'
      },
      {
        title: 'Login/Signup System',
        description: 'A secure authentication system built using MERN stack.',
        link: '#'
      }
    ];
  
    return (
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4 text-pink-700">Projects</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white shadow-md rounded-lg p-6 w-72"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;
  