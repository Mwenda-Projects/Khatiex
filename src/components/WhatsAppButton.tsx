import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href={"https://wa.me/254708009228?text=" + encodeURIComponent("Hi Khatiex Designs! ✨ I found you online and I'm ready to shine — let's create something divine! 🌸")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-elevated hover:shadow-card hover:-translate-y-1 transition-all duration-300 group animate-pulse-slow"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-foreground text-primary-foreground px-3 py-2 rounded-lg text-sm font-body font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
        Chat with us!
      </span>
    </a>
  );
};

export default WhatsAppButton;
