import { Heart, Award, Clock, Sparkles } from "lucide-react";
import aboutImage from "@/assets/about-craftsman.jpg";

const highlights = [
  { icon: Heart, label: "Made with Love" },
  { icon: Award, label: "Quality Guaranteed" },
  { icon: Clock, label: "Timely Delivery" },
  { icon: Sparkles, label: "Unique Designs" },
];

const About = () => {
  return (
    <section id="about" className="py-12 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutImage}
                alt="Khatiex Designs craftsman at work"
                className="w-full h-auto object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />

            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-background rounded-xl p-5 shadow-card">
              <p className="font-display text-3xl font-bold text-primary">4+</p>
              <p className="font-body text-sm text-muted-foreground">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block font-body text-sm md:text-base font-medium text-primary mb-2 md:mb-4">
              ✦ Our Story
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Crafting <span className="text-gradient-gold">African</span> Elegance
            </h2>
            
            <div className="space-y-3 md:space-y-4 font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              <p>
                Welcome to <span className="font-semibold text-foreground">Khatiex Designs</span>, 
                where African heritage meets contemporary fashion. Founded in 2022 with a passion for 
                authentic Vitenge craftsmanship, we've been dressing families in beautiful, custom-made African attire.
              </p>
              <p className="hidden md:block">
                Every stitch we make is a celebration of African culture and artistry. We believe 
                that fashion should tell a story — your story — and we're honored to be part 
                of your journey, from everyday elegance to life's most special moments.
              </p>
              <p className="hidden md:block">
                Our commitment to quality craftsmanship, attention to detail, and customer 
                satisfaction has made us a trusted name in African fashion.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-background shadow-soft"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-body text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
