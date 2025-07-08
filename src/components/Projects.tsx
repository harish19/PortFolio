import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Design System Pro",
      description: "A comprehensive design system built for a fintech startup, featuring 50+ components, dark mode support, and accessibility compliance.",
      technologies: ["React", "TypeScript", "Storybook", "Figma"],
      link: "#",
      github: "#",
      featured: true
    },
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce platform with advanced filtering, real-time inventory, and seamless checkout experience.",
      technologies: ["Next.js", "Tailwind", "Stripe", "Framer Motion"],
      link: "#",
      github: "#",
      featured: true
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive charts, custom visualizations, and responsive design.",
      technologies: ["React", "D3.js", "WebSocket", "Chart.js"],
      link: "#",
      github: "#",
      featured: false
    },
    {
      title: "SaaS Landing Page",
      description: "High-converting landing page with optimized performance, SEO, and lead generation features.",
      technologies: ["Astro", "Tailwind", "Alpine.js", "Netlify"],
      link: "#",
      github: "#",
      featured: false
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A selection of recent projects showcasing my expertise in 
            UI architecture, design systems, and modern web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`card-elegant p-8 ${project.featured ? 'lg:col-span-1' : ''}`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                {project.featured && (
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button variant="default" size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="w-4 h-4" />
                  Source
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;