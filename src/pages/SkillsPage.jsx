import { Code2, Palette, Rocket, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const categories = [
  {
    title: 'Core Technologies',
    icon: Code2,
    items: ['HTML5', 'CSS3', 'JavaScript']
  },
  {
    title: 'Frontend Development',
    icon: Rocket,
    items: ['React.js', 'Tailwind CSS', 'Responsive Web Design']
  },
  {
    title: 'Workflow & Tools',
    icon: Palette,
    items: ['Redux Toolkit', 'Git', 'GitHub', 'Vite']
  },
  {
    title: 'Strengths',
    icon: ShieldCheck,
    items: ['Clean UI structure', 'Reusable components', 'REST API integration']
  }
];

export default function SkillsPage() {
  return (
    <div className="space-y-12 pb-6">
      <SectionHeading
        eyebrow="Skills"
        title="Tools and technologies I use to build interfaces"
        description="My focus is on creating responsive, maintainable, and user-friendly frontend experiences using modern tools and a strong design mindset."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {categories.map(({ title, icon: Icon, items }) => (
          <div key={title} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 p-2 text-cyan-300">
                <Icon size={22} />
              </div>
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {items.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
