import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Electronic Express",
      description: "UI architecture and team management for America's largest independent consumer electronics retailer in Tennessee. Leading frontend development for an established family business since 1983.",
      technologies: ["Next.js", "React.js", "Express.js", "UI Management"],
      link: "#",
      github: "#",
      featured: true,
      period: "Jan 2024 - Present"
    },
    {
      title: "CommercialEVs Marketplace",
      description: "Revolutionary platform for commercial vehicle lifecycle management. Built groundbreaking marketplace for SHAED's sustainable transportation solutions with micro-application architecture.",
      technologies: ["Next.js", "React.js", "Micro Applications", "UI Architecture"],
      link: "#",
      github: "#",
      featured: true,
      period: "Jan 2024 - Present"
    },
    {
      title: "AllenBrothers E-commerce",
      description: "Premium meat distributor's online store serving top chefs and restaurants nationally. Managed UI team for meticulous e-commerce platform with custom portioning and specifications.",
      technologies: ["Next.js", "React.js", "Express.js", "SCSS", "Nginx"],
      link: "#",
      github: "#",
      featured: false,
      period: "Jan 2023 - Dec 2023"
    },
    {
      title: "Retisio DXH Platform",
      description: "Omnichannel retail content management system with AI-powered tools for search, recommendations, and analytics. Micro applications architecture for personalized shopping experiences.",
      technologies: ["React.js", "Express.js", "Nginx", "AI Integration"],
      link: "#",
      github: "#",
      featured: false,
      period: "Dec 2020 - Nov 2022"
    },
    {
      title: "BrandsMart USA",
      description: "Leading appliances and electronics retailer in Atlanta and South Florida. Frontend development for 10 store locations serving millions of customers.",
      technologies: ["React.js", "JavaScript", "CSS3", "HTML5"],
      link: "#",
      github: "#",
      featured: false,
      period: "Jun 2019 - Present"
    },
    {
      title: "Liverpool Department Stores",
      description: "Mexico's largest department store chain with 85 locations. UI development for retail platform serving 23 shopping malls and specialized boutiques.",
      technologies: ["JavaScript", "CSS3", "HTML5", "jQuery"],
      link: "#",
      github: "#",
      featured: false,
      period: "Jan 2019 - Jun 2019"
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