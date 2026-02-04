import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+254 708 009 228"],
    action: "tel:+254708009228",
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Nanyuki Town", "Nanyuki, Kenya"],
    action: null,
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 8am - 7pm", "Sun: Closed"],
    action: null,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
          <span className="inline-block font-body text-sm md:text-base font-medium text-primary mb-2 md:mb-4">
            ✦ Get In Touch
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 md:mb-4">
            Let's Create Your <span className="text-gradient-gold">Perfect</span> Outfit
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg">
            Ready to start? Reach out via WhatsApp for quick responses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* WhatsApp CTA */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    WhatsApp (Preferred)
                  </h3>
                  <p className="font-body text-muted-foreground mb-4">
                    The fastest way to reach us! Send us your design ideas, 
                    measurements, or any questions.
                  </p>
                  <Button
                    variant="whatsapp"
                    size="lg"
                    onClick={() => window.open("https://wa.me/254708009228?text=" + encodeURIComponent("Hi Khatiex Designs! ✨ I found you online and I'm ready to shine — let's create something divine! 🌸"), "_blank")}
                    className="w-full sm:w-auto"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            {/* Other Contact Info */}
            <div className="grid sm:grid-cols-3 gap-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 shadow-soft hover:shadow-card transition-shadow duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-display text-base font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  {item.details.map((detail, i) => (
                    <p key={i} className="font-body text-sm text-muted-foreground">
                      {item.action && i === 0 ? (
                        <a href={item.action} className="hover:text-primary transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card h-full min-h-[300px] lg:min-h-[400px] bg-muted">
              {/* Placeholder for Google Maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63770.77584745891!2d37.03862844863281!3d0.006808399999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17883f4e0afb5595%3A0x3f3b30e5c3b0f0c5!2sNanyuki%2C%20Kenya!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Khatiex Designs Location"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
