import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-model.jpg";

const Hero = () => {
  const scrollToGallery = () => {
    const element = document.querySelector("#gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[85vh] md:min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="inline-block font-body text-sm md:text-base font-medium text-primary mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              ✦ Authentic African Fashion
            </span>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Elegant{" "}
              <span className="text-gradient-gold">Vitenge</span>
              <br />
              Fashion & Custom
              <br />
              <span className="text-primary">Tailoring</span>
            </h1>
            
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              Quality craftsmanship meets African heritage. We create stunning custom-made 
              Vitenge outfits that celebrate your unique style with attention to every detail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <Button 
                variant="hero" 
                size="xl"
                onClick={scrollToGallery}
                className="group"
              >
                View Designs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="whatsapp" 
                size="xl"
                onClick={() => window.open("https://wa.me/254708009228?text=" + encodeURIComponent("Hi Khatiex Designs! ✨ I found you online and I'm ready to shine — let's create something divine! 🌸"), "_blank")}
              >
                <MessageCircle className="w-5 h-5" />
                Order via WhatsApp
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 justify-center lg:justify-start mt-10 animate-fade-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <div className="text-center">
                <p className="font-display text-2xl md:text-3xl font-bold text-primary">500+</p>
                <p className="font-body text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-display text-2xl md:text-3xl font-bold text-primary">4+</p>
                <p className="font-body text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-display text-2xl md:text-3xl font-bold text-primary">100%</p>
                <p className="font-body text-sm text-muted-foreground">Custom Made</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src={heroImage} 
                  alt="Elegant Vitenge dress model" 
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 bg-background rounded-xl p-4 shadow-card animate-float">
                <p className="font-display text-lg font-bold text-primary">Premium</p>
                <p className="font-body text-sm text-muted-foreground">Vitenge Fabrics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
