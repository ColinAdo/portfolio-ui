import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link as LinkIcon } from "lucide-react";
import { projects } from "@/data/projects";
import Link from "next/link";

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  return (
    <Card className="glass-morphism bg-gray-950 border-gray-800 overflow-hidden group hover:border-emerald-300/50 transition-all duration-300">
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="font-display text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-300 leading-relaxed text-justify">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-emerald-300/10 text-emerald-300 rounded-full text-sm border border-emerald-300/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <Link
            href={project.demoUrl}
            target="_blank"
            className="border border-emerald-300 text-black text-sm font-semibold bg-emerald-200 rounded-sm py-1 px-2 hover:bg-emerald-300 hover:text-black emerald-glow"
          >
            <div className="flex items-center">
              <LinkIcon className="w-4 h-4 mr-2" />
              Live Demo
            </div>
          </Link>
          <Link
            href={project.apiCodeUrl}
            target="_blank"
            className="border border-emerald-300 text-sm font-semibold bg-white rounded-sm py-1 px-2 text-blue-400 hover:bg-emerald-300 hover:text-black"
          >
            API Code
          </Link>
          <Link
            href={project.uiCodeUrl}
            target="_blank"
            className="border border-emerald-300 text-sm font-semibold bg-white rounded-sm py-1 px-2 text-blue-400 hover:bg-emerald-300 hover:text-black"
          >
            UI Code
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
