import { ArrowUpRight, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-[0_0_0_1px_rgba(34,211,238,0.08)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(14,116,144,0.2)]">
      <div className="relative overflow-hidden border-b border-white/10">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
      </div>

      <div className="space-y-5 p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-200">
            {project.category}
          </span>
          <span className="text-xs text-slate-400">Preview</span>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{project.shortDescription}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-200">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Live Demo
            <ArrowUpRight size={16} />
          </a>
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:text-white"
          >
            View Details
          </Link>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:text-white"
            >
              <GitBranch size={16} />
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
