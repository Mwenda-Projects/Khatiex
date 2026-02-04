import { Scissors, Shirt, Ruler, Users } from "lucide-react";

const services = [
  {
    icon: Shirt,
    title: "Custom Dress Making",
    description: "We design and create beautiful custom-made dresses tailored to your exact measurements and style preferences.",
  },
  {
    icon: Scissors,
    title: "Vitenge Outfit Design",
    description: "Transform authentic African Vitenge fabrics into stunning modern outfits that celebrate your heritage.",
  },
  {
    icon: Ruler,
    title: "Alterations & Tailoring",
    description: "Expert alterations and tailoring services to ensure your garments fit perfectly and look their best.",
  },
  {
    icon: Users,
    title: "Bulk & Event Orders",
    description: "Special pricing for weddings, cultural events, and group orders. Let us dress your entire occasion.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
          <span className="inline-block font-body text-sm md:text-base font-medium text-primary mb-2 md:mb-4">
            ✦ What We Offer
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 md:mb-4">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg">
            From custom creations to perfect alterations, we bring your fashion vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl p-4 md:p-8 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-sm md:text-xl font-semibold text-foreground mb-1 md:mb-3">
                {service.title}
              </h3>
              <p className="font-body text-xs md:text-base text-muted-foreground leading-relaxed hidden md:block">
                {service.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-xl md:rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="font-body text-muted-foreground mb-4">
            Have a special request? We love bringing unique ideas to life!
          </p>
          <a 
            href={"https://wa.me/254708009228?text=" + encodeURIComponent("Hi Khatiex Designs! ✨ I found you online and I'm ready to shine — let's create something divine! 🌸")}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body font-medium text-primary hover:text-terracotta-dark transition-colors"
          >
            Contact us on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
