import { motion } from 'framer-motion';
import { Code2, GraduationCap, Sparkles, Target } from 'lucide-react';

const journey = [
  {
    title: 'Frontend fundamentals',
    text: 'I began with HTML, CSS, and JavaScript, focusing on structure, styling, and core interactions to understand how modern web pages work.'
  },
  {
    title: 'React learning',
    text: 'I moved into React.js to build reusable components, manage UI states effectively, and create cleaner, more scalable frontend architecture.'
  },
  {
    title: 'Responsive design',
    text: 'I developed a strong understanding of user experience across mobile, tablet, and desktop layouts, with attention to readability and accessibility.'
  },
  {
    title: 'Project practice',
    text: 'I worked on real-style web projects to apply what I learned in practice, focusing on polished layouts, reusable components, and smooth user flows.'
  }
];

export default function AboutPage() {
  return (
    <div className="space-y-14 pb-12">
      <section className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),transparent_30%),#0b1120] p-8 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">About me</p>
            <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">Junior frontend developer with a passion for thoughtful design</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              I&apos;m Nayem Mostofa, a junior frontend developer based in Maniknagar, Dhaka, Bangladesh. I completed frontend development training at Creative IT Institute and have built a strong foundation in creating modern, responsive interfaces using React, JavaScript, and Tailwind CSS.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              I enjoy turning creative ideas into polished web experiences that are easy to use, visually appealing, and built with reusable component patterns. My goal is to continue learning, improve my technical skills, and contribute meaningfully to real projects.
            </p>
          </motion.div>

          <div className="rounded-[1.5rem] border border-cyan-400/20 bg-slate-900/80 p-6 shadow-[0_20px_60px_rgba(14,116,144,0.18)]">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <GraduationCap className="text-cyan-300" size={28} />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Education</p>
                <p className="mt-2 text-lg font-semibold text-white">Creative IT Institute</p>
                <p className="mt-1 text-sm text-slate-300">Frontend Development</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Target className="text-cyan-300" size={28} />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Goal</p>
                <p className="mt-2 text-lg font-semibold text-white">Junior developer</p>
                <p className="mt-1 text-sm text-slate-300">Build user-friendly apps</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-2">
                <Sparkles className="text-cyan-300" size={28} />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Focus</p>
                <p className="mt-2 text-lg font-semibold text-white">Responsive design and reusable React components</p>
                <p className="mt-1 text-sm text-slate-300">I value clean structure, maintainable code, and meaningful user experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">My journey</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Learning path and growth</h2>
        </div>

        <div className="relative grid gap-6 md:grid-cols-2">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block" />
          {journey.map((item, index) => (
            <div key={item.title} className={`rounded-3xl border border-white/10 bg-slate-900/70 p-6 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8 md:mt-12'}`}>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">0{index + 1}</span>
                <Code2 size={22} className="text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
