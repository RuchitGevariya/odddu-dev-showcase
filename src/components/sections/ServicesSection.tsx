import { Globe, Layers, Server, Palette, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications tailored to your business needs. From landing pages to complex platforms.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
  },
  {
    icon: Layers,
    title: "React & Next.js Development",
    description: "Modern, scalable frontend applications using the latest React ecosystem and Next.js framework.",
    features: ["Component Libraries", "State Management", "SSR/SSG"],
  },
  {
    icon: Server,
    title: "Backend APIs (Node.js)",
    description: "Robust and secure backend services, RESTful APIs, and database integrations for your applications.",
    features: ["REST APIs", "Authentication", "Database Design"],
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description: "Pixel-perfect implementation of designs with smooth animations and intuitive user experiences.",
    features: ["Figma to Code", "Animations", "Accessibility"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing support, bug fixes, performance optimization, and feature enhancements for existing projects.",
    features: ["Bug Fixes", "Updates", "Optimization"],
  },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, I offer comprehensive development services to help your business succeed online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-elevated p-6 group flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              <Button 
                variant="ghost" 
                className="w-fit p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent gap-1 group/btn"
                onClick={scrollToContact}
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
