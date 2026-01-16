import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "FinanceFlow - Enterprise Banking Platform",
    description: "A comprehensive digital banking solution serving 50,000+ users with real-time transactions, investment tracking, and financial analytics.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    category: "Fintech",
  },
  {
    title: "MedConnect - Healthcare Management System",
    description: "End-to-end healthcare platform enabling seamless patient management, appointment scheduling, and telemedicine for 200+ clinics.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    tech: ["React", "TypeScript", "MongoDB", "Socket.io"],
    category: "Healthcare",
  },
  {
    title: "RetailHub - E-Commerce Platform",
    description: "Scalable multi-vendor marketplace processing $2M+ monthly transactions with advanced inventory management and analytics.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    category: "E-Commerce",
  },
  {
    title: "PropTech360 - Real Estate Platform",
    description: "Property listing and management platform with virtual tours, AI-powered valuation, and comprehensive CRM for real estate agencies.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    tech: ["React", "Mapbox", "PostgreSQL", "AWS"],
    category: "Real Estate",
  },
  {
    title: "EduSphere - Learning Management System",
    description: "Enterprise LMS supporting 100,000+ learners with live classes, course creation tools, and comprehensive analytics dashboard.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    tech: ["Next.js", "PostgreSQL", "AWS S3", "Stripe"],
    category: "EdTech",
  },
  {
    title: "LogiTrack - Supply Chain Solution",
    description: "Intelligent logistics platform optimizing delivery routes, inventory management, and real-time tracking for enterprise clients.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Docker"],
    category: "Logistics",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-3 animate-fade-up">Our Work</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up-delay-1">
            Featured <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up-delay-2">
            Explore our portfolio of successful projects. Each case study represents 
            our commitment to delivering exceptional digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-elevated overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent gap-2 font-semibold group/btn"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button className="premium-button px-8 py-6 text-base rounded-xl gap-2">
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
