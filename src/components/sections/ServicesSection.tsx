import { Globe, Layers, Server, Palette, Building2, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Custom Web Development",
    description: "Bespoke websites and web applications tailored to your unique business requirements. From corporate sites to complex platforms.",
    features: ["Responsive Design", "SEO Optimized", "High Performance"],
  },
  {
    icon: Layers,
    title: "React & Next.js Applications",
    description: "Modern, scalable frontend applications built with the latest React ecosystem and Next.js framework for optimal user experiences.",
    features: ["Component Architecture", "State Management", "SSR/SSG"],
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description: "Robust and secure backend services, RESTful APIs, and seamless database integrations powering your applications.",
    features: ["RESTful APIs", "GraphQL", "Microservices"],
  },
  {
    icon: Palette,
    title: "UI/UX Design & Implementation",
    description: "Pixel-perfect implementation of designs with smooth animations, intuitive interfaces, and exceptional user experiences.",
    features: ["Design Systems", "Prototyping", "User Testing"],
  },
  {
    icon: Building2,
    title: "Enterprise Software Solutions",
    description: "Comprehensive enterprise-grade solutions including CRM, ERP, and custom business management systems.",
    features: ["Scalable Architecture", "Integration", "Security"],
  },
  {
    icon: Wrench,
    title: "Ongoing Support & Maintenance",
    description: "Continuous support, performance optimization, security updates, and feature enhancements for your existing projects.",
    features: ["24/7 Support", "Updates", "Monitoring"],
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
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-3 animate-fade-up">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up-delay-1">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up-delay-2">
            From concept to deployment and beyond, we offer comprehensive development services 
            to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-elevated p-8 group flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              <Button 
                variant="ghost" 
                className="w-fit p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent gap-2 font-semibold group/btn"
                onClick={scrollToContact}
              >
                Learn More
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
