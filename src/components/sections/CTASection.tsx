import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 cta-gradient" />
      
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        
        {/* Subtle pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60h60V0zM36 34v-8h-8v8h8zm-6-6h4v4h-4v-4z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
      
      <div className="section-container relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4" />
          Ready to Start?
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
          Let's Build Something{" "}
          <span className="text-white/90">Great Together</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Ready to transform your business with cutting-edge technology? 
          Our team is here to turn your vision into reality.
        </p>
        
        <Button
          size="lg"
          onClick={scrollToContact}
          className="bg-white text-primary hover:bg-white/90 px-10 py-7 text-lg font-semibold rounded-xl shadow-xl shadow-black/20 gap-3 transition-all duration-300 hover:scale-105"
        >
          Request a Quote
          <ArrowRight className="w-5 h-5" />
        </Button>
        
        <p className="text-white/60 text-sm mt-6">
          Free consultation • No commitment required
        </p>
      </div>
    </section>
  );
};

export default CTASection;
