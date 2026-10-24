import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  return (
    <div className="space-y-12 pb-6">
      <SectionHeading
        eyebrow="Projects"
        title="Front-end work built with real-world thinking"
        description="These projects reflect my interest in modern layouts, product-focused interfaces, and responsive web experiences."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
