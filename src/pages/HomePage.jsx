import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, Code2, GitBranch, Globe, Mail, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { featuredProjects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React.js',
  'Tailwind CSS',
  'Redux Toolkit',
  'Responsive Web Design',
  'REST API Integration',
  'Git & GitHub'
];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-12">
      <section className="grid items-center gap-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),transparent_45%),linear-gradient(135deg,#020817,#0b1120_35%,#111827)] px-6 py-10 shadow-[0_30px_80px_rgba(2,6,23,0.7)] md:px-10 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200">
            <Sparkles size={14} />
            Hello, I&apos;m
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Nayem Mostofa
            </h1>
            <div className="text-xl font-semibold text-cyan-300 md:text-2xl">Junior Frontend Developer</div>
            <p className="max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              I&apos;m a passionate frontend developer trained at Creative IT Institute. I enjoy transforming creative ideas into modern, responsive, and user-friendly web experiences using React, JavaScript, and Tailwind CSS.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-200">
              Open to Junior Developer &amp; Internship Opportunities
            </span>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
            >
              Explore My Projects
              <ArrowRight size={18} />
            </Link>
            <a
              href="mailto:mdnayemmostofa9650@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/50 hover:text-white"
            >
              Contact Me
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-slate-300">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm transition hover:border-cyan-400/50 hover:text-white">
              <GitBranch size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm transition hover:border-cyan-400/50 hover:text-white">
              <Globe size={16} /> LinkedIn
            </a>
            <a href="mailto:mdnayemmostofa9650@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm transition hover:border-cyan-400/50 hover:text-white">
              <Mail size={16} /> mdnayemmostofa9650@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-6 -z-10 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-900/80 p-3 shadow-[0_28px_80px_rgba(14,116,144,0.2)]">
            <img
              src="/src/assets/image.png"
              alt="Nayem Mostofa portrait"
              className="h-[540px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </motion.div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Introduction"
          title="Building clean, user-first experiences"
          description="I focus on crafting responsive interfaces that feel intuitive, polished, and easy to use—while learning every day to become a stronger frontend developer."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <Code2 className="mb-4 text-cyan-300" size={28} />
            <h3 className="mb-2 text-xl font-semibold text-white">Frontend Focus</h3>
            <p className="text-sm leading-7 text-slate-300">I build interfaces with React, JavaScript, and modern styling approaches that prioritize usability and clarity.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <BriefcaseBusiness className="mb-4 text-cyan-300" size={28} />
            <h3 className="mb-2 text-xl font-semibold text-white">Career Goal</h3>
            <p className="text-sm leading-7 text-slate-300">To build modern, accessible, responsive, and user-friendly web applications and grow as a professional frontend developer.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <MapPin className="mb-4 text-cyan-300" size={28} />
            <h3 className="mb-2 text-xl font-semibold text-white">Based In</h3>
            <p className="text-sm leading-7 text-slate-300">Maniknagar, Dhaka, Bangladesh — learning, building, and growing through practical frontend work.</p>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work"
          description="A few recent frontend projects that helped me practice responsive design, layout thinking, and modern UI execution."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Skills"
          title="Core technologies I work with"
        />

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 shadow-[0_0_0_1px_rgba(148,163,184,0.08)]">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-8 rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 md:p-10">
        <SectionHeading
          eyebrow="Learning Journey"
          title="Frontend development training at Creative IT Institute"
          description="I am continuing to build a strong foundation in frontend development through practical learning, project building, and responsive design work."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">01</p>
            <h3 className="mt-4 text-xl font-semibold text-white">Foundation</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">I learned the essentials of semantic HTML, CSS structure, and JavaScript fundamentals for building user interfaces.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">02</p>
            <h3 className="mt-4 text-xl font-semibold text-white">React & UI</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">I developed reusable component thinking and practiced building responsive layouts with React and modern frontend tools.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">03</p>
            <h3 className="mt-4 text-xl font-semibold text-white">Real Projects</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">I am applying my learning to live projects, focusing on polished design, responsiveness, and practical developer workflows.</p>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-8 text-center md:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Let&apos;s build</p>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Open to junior roles and internship opportunities</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">I&apos;m excited to contribute to team projects, sharpen my frontend skills, and help create user-focused digital experiences.</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="mailto:mdnayemmostofa9650@gmail.com" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white">Email Me</a>
          <Link to="/projects" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100">View Projects</Link>
        </div>
      </section>
    </div>
  );
}
