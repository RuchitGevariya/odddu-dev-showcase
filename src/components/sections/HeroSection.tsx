import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 hero-gradient relative overflow-hidden">
      {/* Premium background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60h60V0zM36 34v-8h-8v8h8zm-6-6h4v4h-4v-4z' fill='%23217BE6' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-sm font-medium mb-8 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-foreground">Trusted by 100+ Businesses Worldwide</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-8 leading-tight animate-fade-up-delay-1">
              Building Scalable{" "}
              <span className="gradient-text">Digital Solutions</span>{" "}
              for Modern Businesses
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up-delay-2">
              Odddu Developer is a full-service software development company delivering high-quality web and application solutions that drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up-delay-3">
              <Button 
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="premium-button px-8 py-6 text-base rounded-xl gap-2"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#portfolio")}
                className="border-2 border-border hover:bg-muted gap-2 px-8 py-6 text-base rounded-xl transition-all duration-300 hover:border-primary/50"
              >
                View Our Work
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-12 pt-8 border-t border-border/50 animate-fade-up-delay-4">
              <p className="text-sm text-muted-foreground mb-4">Technologies we work with</p>
              <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start">
                {["React", "Next.js", "Node.js", "TypeScript"].map((tech) => (
                  <span key={tech} className="text-sm font-medium text-muted-foreground/70 hover:text-foreground transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Visual - Premium Code Window */}
          <div className="relative animate-fade-up-delay-2 hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto animate-float">
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl blur-2xl" />
              
              {/* Main card */}
              <div className="relative glass-card overflow-hidden shadow-2xl">
                {/* Window header */}
                <div className="h-12 bg-muted/50 border-b border-border flex items-center gap-2 px-5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  <span className="ml-4 text-xs text-muted-foreground font-mono">odddu-project.tsx</span>
                </div>
                
                {/* Code content */}
                <div className="p-8 font-mono text-sm leading-relaxed">
                  <div className="text-muted-foreground">
                    <span className="text-primary">const</span> OddduDeveloper = {"{"}
                  </div>
                  <div className="ml-6 text-muted-foreground mt-2">
                    <span className="text-primary">company</span>: <span className="text-green-600">"Odddu Developer"</span>,
                  </div>
                  <div className="ml-6 text-muted-foreground mt-1">
                    <span className="text-primary">expertise</span>: <span className="text-green-600">"Full Stack"</span>,
                  </div>
                  <div className="ml-6 text-muted-foreground mt-1">
                    <span className="text-primary">projects</span>: <span className="text-orange-500">150</span>+,
                  </div>
                  <div className="ml-6 text-muted-foreground mt-1">
                    <span className="text-primary">satisfaction</span>: <span className="text-green-600">"100%"</span>,
                  </div>
                  <div className="ml-6 text-muted-foreground mt-1">
                    <span className="text-primary">mission</span>: <span className="text-green-600">"Transform Ideas"</span>,
                  </div>
                  <div className="text-muted-foreground mt-2">{"}"}</div>
                  <div className="mt-4 text-muted-foreground">
                    <span className="text-primary">export default</span> OddduDeveloper;
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-2xl blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
