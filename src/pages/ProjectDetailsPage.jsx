import { ArrowLeft, ExternalLink, GitBranch } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetailsPage() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="max-w-xl rounded-[2rem] border border-white/10 bg-slate-900/70 p-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">404</p>
          <h1 className="mt-4 text-4xl font-black text-white">Project not found</h1>
          <p className="mt-4 text-slate-300">The requested project could not be located.</p>
          <Link to="/projects" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white">
            <ArrowLeft size={16} /> Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10 pb-10">
      <div className="flex justify-start">
        <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/50 hover:text-white">
          <ArrowLeft size={16} /> Back to all projects
        </Link>
      </div>

      <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80">
        <img src={project.image} alt={`${project.title} preview`} className="h-[360px] w-full object-cover md:h-[440px]" />
        <div className="space-y-8 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{project.category}</p>
              <h1 className="mt-3 text-3xl font-black text-white md:text-5xl">{project.title}</h1>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white">
                Live Demo <ExternalLink size={16} />
              </a>
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100">
                  <GitBranch size={16} /> GitHub
                </a>
              ) : null}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white">Overview</h2>
                <p className="mt-3 text-base leading-8 text-slate-300">{project.overview}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">Key features</h2>
                <ul className="mt-3 space-y-3 text-slate-300">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">Learning outcomes</h2>
                <ul className="mt-3 space-y-3 text-slate-300">
                  {project.learningOutcomes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5">
              <h2 className="text-xl font-bold text-white">Technologies</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
