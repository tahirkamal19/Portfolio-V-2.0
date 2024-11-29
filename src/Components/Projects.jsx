/* eslint-disable no-unused-vars */


const Projects = () => {
  const ProjectsList = [
    {
      id: 1,
      Title: "Task Master",
      Desc: `Developed a task management system with user authentication ,
                role-based access control, and task tracking. Features include custom
                deadline units, priority settings, and an admin dashboard. Utilized a
                responsive design for an optimal user experience.`,
                TechnologiesUsed: ["React", "Node.js","Redux Toolkit","Tailwind CSS ", "Express", "MongoDB",
                    "JWT", "CSS"],
    },
    {
      id: 2,
      Title: "Blogging Website",
      Desc: `Developed a dynamic blogging platform with user
                registration, authentication, and profile management.
                Features include rich text editing, comments, and an
                admin panel for user and content management, ensuring
                a smooth and secure user experience.`,
                TechnologiesUsed: ["React", "Node.js", "Express", "MongoDB",
                    "JWT", "CSS"],
    },
    {
      id: 3,
      Title: "File Sharing App",
      Desc: `Developed a file sharing app with secure file upload and download capabilities. 
      Features include drag-and-drop functionality, file size validation, 
      shareable links generation, and automatic file expiration. 
      Implemented user authentication and file encryption for enhanced security.`,
            TechnologiesUsed: ["React", "Node.js", "Express", "MongoDB",
                "JWT", "CSS"],
    },
    {
        id:4,
        Title:"E-Commmerce Marketplace",
        Desc:`Developed a full-stack e-commerce marketplace with user authentication,
        product catalog, shopping cart, and order management.
        Implemented payment integration, user reviews, and admin dashboard for
        efficient product management.`,
        TechnologiesUsed: ["React", "Node.js", "Express","Redux Toolkit", "Tailwind CSS","Cloudinary", "MongoDB",
            "JWT", "CSS"],
    }
  ];

  return (
    <div className="p-5 mt-5">
      <h1 className="md:text-4xl text-2xl text-center italic mb-5 font-bold">
        Projects Build for Learning!
      </h1>
      <div className="flex flex-wrap md:flex-row items-center justify-center gap-8">
        {ProjectsList.map((project) => (
          <div
            key={project.id}
            className="md:w-[520px] w-64 p-5 min-h-[380px] flex-col  border-blue-500 border-y-2 shadow-lg shadow-blue-500/25">
           
              <h1 className="md:text-4xl text-lg text-left font-bold">
                  {project.Title}
              </h1>

              <p className="text-xs md:text-lg p-3 ">{project.Desc}</p>
              <div className="flex gap-2 flex-wrap">
                {project.TechnologiesUsed.map((tech, index)=>(
                    <div key={index} className="bg-cyan-500 rounded-lg mt-5">
                        <span className="text-xs md:text-sm p-1 text-blue-900">{tech}</span>
                    </div>
                ))}
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
