import { ArrowRight, Briefcase } from "lucide-react";
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
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for freelance projects
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up-delay-1">
              Hi, I'm{" "}
              <span className="gradient-text">Odddu Developer</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up-delay-2">
              Freelance Web & App Development Solutions. I build modern, scalable, and beautiful digital experiences that help businesses grow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up-delay-3">
              <Button 
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 gap-2"
              >
                <Briefcase className="w-5 h-5" />
                Hire Me
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#portfolio")}
                className="border-border hover:bg-muted gap-2"
              >
                View Portfolio
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-fade-up-delay-2 hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Abstract tech design */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20" />
              
              {/* Floating code elements */}
              <div className="absolute top-8 left-8 right-8 bottom-8 rounded-2xl bg-card border border-border shadow-2xl overflow-hidden">
                <div className="h-8 bg-muted/50 border-b border-border flex items-center gap-2 px-4">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="text-muted-foreground">
                    <span className="text-primary">const</span> developer = {"{"}
                  </div>
                  <div className="ml-4 text-muted-foreground">
                    <span className="text-primary">name</span>: <span className="text-green-600">"Odddu"</span>,
                  </div>
                  <div className="ml-4 text-muted-foreground">
                    <span className="text-primary">role</span>: <span className="text-green-600">"Full Stack"</span>,
                  </div>
                  <div className="ml-4 text-muted-foreground">
                    <span className="text-primary">passion</span>: <span className="text-green-600">"Building"</span>,
                  </div>
                  <div className="ml-4 text-muted-foreground">
                    <span className="text-primary">coffee</span>: <span className="text-orange-500">true</span>,
                  </div>
                  <div className="text-muted-foreground">{"}"}</div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-xl blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-xl blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
