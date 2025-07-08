import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      <div className="absolute inset-0 bg-background/10" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary-foreground">HARISH</span>{" "}
            <span className="text-gradient">KJ</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            UI Architect & UI Manager with 12+ years of experience crafting 
            exceptional user interfaces and leading development teams
          </p>
        </div>
        
        <div className="animate-fade-in-delay flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="min-w-[160px]">
            <Mail className="w-5 h-5" />
            Get In Touch
          </Button>
          <Button variant="hero-outline" size="lg" className="min-w-[160px]">
            <Github className="w-5 h-5" />
            View Work
          </Button>
        </div>
        
        <div className="animate-fade-in-delay">
          <ArrowDown className="w-6 h-6 text-primary-foreground/70 mx-auto animate-bounce" />
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;