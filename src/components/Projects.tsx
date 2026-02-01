import type { Project } from "./types";

const projects: Project[] = [
  {
    name: "rōkaru",
    href: "https://rokaru.vercel.app",
  },
  {
    name: "MDShare",
    href: "https://mdshare-aki.vercel.app",
  },
];

const Projects = () => {
  return (
    <main className="w-full">
      <div className="flex flex-col gap-3 items-start">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            className="text-sm underline decoration-slate-700 underline-offset-4 decoration-1 hover:decoration-slate-400 hover:text-slate-100 hover:translate-x-1 transition-all duration-200 inline-block"
          >
            {project.name}
          </a>
        ))}
      </div>
    </main>
  );
};

export default Projects;
