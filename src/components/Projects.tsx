const projects = [
  { name: "rōkaru", href: "https://rokaru.anlaki.dev" },
  { name: "mdshare", href: "https://mdshare.anlaki.dev/" },
  { name: "carrd", href: "https://unluky.carrd.co" },
];

const Projects = () => {
  return (
    <section>
      <h2 className="section-title">Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <a key={project.name} href={project.href} className="project-link">
            {project.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;