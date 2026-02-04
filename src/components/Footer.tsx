import { MessageCircle, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const whatsappMessage = encodeURIComponent("Hi Khatiex Designs! ✨ I found you online and I'm ready to shine — let's create something divine! 🌸");
  
  const socialLinks = [
    { icon: MessageCircle, href: `https://wa.me/254708009228?text=${whatsappMessage}`, label: "WhatsApp" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#gallery", label: "Gallery" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-2xl font-bold text-primary-foreground">
                Khatiex
              </span>
              <span className="font-display text-2xl font-light text-primary-foreground/80">
                Designs
              </span>
            </div>
            <p className="font-body text-primary-foreground/60 mb-6 max-w-xs">
              Crafting beautiful Vitenge fashion with African heritage and 
              contemporary elegance since 2022.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5 text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 font-body text-primary-foreground/60">
              <p>
                <a href="tel:+254708009228" className="hover:text-primary-foreground transition-colors">
                  +254 708 009 228
                </a>
              </p>
              <p>Nanyuki Town</p>
              <p>Nanyuki, Kenya</p>
              <p className="text-sm">Mon - Sat: 8am - 7pm</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-primary-foreground/50">
              © {currentYear} Khatiex Designs. All rights reserved.
            </p>
            <p className="font-body text-sm text-primary-foreground/40">
              Built with{" "}
              <a 
                href="https://oflix.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-gold-light transition-colors"
              >
                OfliX
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
