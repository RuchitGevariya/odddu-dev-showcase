import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO",
    company: "TechVentures Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Odddu Developer exceeded all our expectations. Their team delivered a complex enterprise solution on time and within budget. The quality of their work and their professional approach made them an invaluable partner.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "FinanceFlow",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Working with Odddu Developer was a game-changer for our startup. They understood our vision from day one and translated it into a beautiful, scalable platform that our users love. Highly recommended!",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Director",
    company: "MedConnect Health",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The expertise and dedication of the Odddu team is unmatched. They built our healthcare platform with incredible attention to detail, ensuring HIPAA compliance while delivering an exceptional user experience.",
  },
  {
    name: "David Park",
    role: "Founder",
    company: "RetailHub",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Our e-commerce platform needed a complete overhaul, and Odddu Developer delivered beyond our expectations. They're not just developers; they're strategic partners who genuinely care about our success.",
  },
  {
    name: "Jennifer Adams",
    role: "VP of Technology",
    company: "EduSphere Learning",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Odddu Developer transformed our outdated learning system into a modern, engaging platform. Their technical expertise combined with their understanding of EdTech made all the difference.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-3 animate-fade-up">Client Success Stories</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up-delay-1">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up-delay-2">
            Don't just take our word for it. Hear from the businesses we've helped 
            transform through innovative technology solutions.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="glass-card p-8 h-full flex flex-col relative group hover:shadow-xl transition-all duration-300">
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors">
                    <Quote className="w-10 h-10" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Text */}
                  <p className="text-muted-foreground leading-relaxed flex-grow mb-6">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center gap-4 mt-10">
            <CarouselPrevious className="relative inset-auto translate-x-0 translate-y-0 w-12 h-12 border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" />
            <CarouselNext className="relative inset-auto translate-x-0 translate-y-0 w-12 h-12 border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
