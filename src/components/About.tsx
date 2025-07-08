import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Users, Zap } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "Angular", "Node.js", "Express.js", "Hapi.js", 
    "Figma", "Tailwind CSS", "Next.js", "Design Systems", 
    "Prototyping", "User Research", "Accessibility"
  ];

  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Frontend Excellence",
      description: "Building pixel-perfect, performant interfaces with modern frameworks and best practices."
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Design Systems",
      description: "Creating scalable design systems that bridge the gap between design and development."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "User-Centered",
      description: "Focusing on user needs and business goals to create meaningful digital experiences."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Performance",
      description: "Optimizing for speed, accessibility, and seamless user interactions across all devices."
    }
  ];

  return (
    <section className="py-20 px-6 bg-subtle-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate UI architect with 8+ years of experience creating 
            exceptional digital experiences. I specialize in bridging the gap between 
            design and development, ensuring every interface is both beautiful and functional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="card-elegant p-6 text-center">
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Technologies & Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover-glow cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;