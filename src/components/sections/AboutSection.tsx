import { Target, Eye, Award, Users, Briefcase, Clock } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "150+", label: "Projects Completed" },
  { icon: Users, value: "80+", label: "Happy Clients" },
  { icon: Clock, value: "8+", label: "Years Experience" },
  { icon: Award, value: "100%", label: "Client Satisfaction" },
];

const highlights = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To deliver exceptional software solutions that empower businesses to achieve their digital transformation goals and drive sustainable growth.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be the most trusted technology partner for innovative companies worldwide, setting new standards in software development excellence.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-3 animate-fade-up">About Odddu Developer</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up-delay-1">
            We Build <span className="gradient-text">Digital Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up-delay-2">
            Odddu Developer is a premier software development company specializing in creating innovative, 
            scalable, and user-centric digital solutions. With a team of expert developers and designers, 
            we transform complex business challenges into elegant technological solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="card-elevated stat-card p-6 md:p-8 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="glass-card p-8 md:p-10 group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Why Companies Choose Us</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Agile Development",
              "24/7 Support",
              "Transparent Pricing",
              "On-Time Delivery",
              "Scalable Solutions",
              "Expert Team",
            ].map((item) => (
              <span
                key={item}
                className="px-5 py-2.5 rounded-full bg-primary/5 text-foreground font-medium text-sm border border-primary/10 hover:bg-primary/10 hover:border-primary/20 transition-all duration-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
