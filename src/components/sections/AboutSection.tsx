import { Code, Database, Layout, Sparkles } from "lucide-react";

const skills = [
  {
    icon: Layout,
    title: "Frontend Development",
    description: "Building responsive, accessible, and performant user interfaces with React, Next.js, and modern CSS.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Creating robust APIs and server-side applications with Node.js, Express, and database management.",
  },
  {
    icon: Code,
    title: "Full Stack Solutions",
    description: "End-to-end development from concept to deployment, ensuring seamless integration across the stack.",
  },
  {
    icon: Sparkles,
    title: "Clean Code & Best Practices",
    description: "Writing maintainable, scalable code following industry standards and modern development practices.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate freelance software developer specializing in building modern web applications. 
            With years of experience in both frontend and backend development, I help businesses bring their ideas to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="card-elevated p-6 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {skill.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
