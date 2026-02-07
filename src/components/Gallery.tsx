import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

import galleryDress1 from "@/assets/gallery-dress-1.jpeg";
import galleryDress2 from "@/assets/gallery-dress-2.jpg";
import galleryDress3 from "@/assets/gallery-dress-3.jpg";
import galleryOutfit1 from "@/assets/gallery-outfit-1.jpg";
import galleryShirt1 from "@/assets/gallery-shirt-1.jpg";
import galleryBlazer1 from "@/assets/gallery-blazer-1.jpg";
import galleryCouple from "@/assets/gallery-couple.jpg";
import galleryKids from "@/assets/gallery-kids.jpeg";
import galleryHeadwrap1 from "@/assets/gallery-headwrap-1.jpg";
import galleryFamily1 from "@/assets/gallery-family-1.jpg";
import galleryDress4 from "@/assets/gallery-dress-4.jpg";
import galleryKids2 from "@/assets/gallery-kids-2.jpeg";
import galleryCurstain1 from "@/assets/gallery-curtain-1.jpeg";
import galleryCurtain2 from "@/assets/gallery-curtain-2.jpeg";
import galleryBedding1 from "@/assets/gallery-beddings-1.jpeg";
import galleryBedding2 from "@/assets/gallery-beddings-2.jpeg";
import galleryOutfit from "@/assets/gallery-outfit.jpeg";

const galleryItems = [
  { 
    id: 1, 
    image: galleryDress1, 
    title: "Terracotta Elegance", 
    category: "Dresses",
    description: "A stunning outdoor Vitenge dress in warm terracotta tones, perfect for formal occasions and celebrations."
  },
  { 
    id: 2, 
    image: galleryBedding1, 
    title: "The Artisan Suite", 
    category: "Home Decor",
    description: "Prinstine white cotton bedding with precision-tailored mitered corners, ideal for luxury hospitality and refined interiors."
  },
  { 
    id: 3, 
    image: galleryOutfit, 
    title: "Tailored Elegance", 
    category: "Outfits",
    description: "A masterpiece of structural tailoring, featuring a precision-contoured bodice and a seamless full-circle skirt for a dramatic, elegant drape."
  },
  { 
    id: 4, 
    image: galleryShirt1, 
    title: "Classic Men's Shirt", 
    category: "Men's Wear",
    description: "Sharp, tailored men's shirt featuring bold African prints, perfect for both casual and business settings."
  },
  { 
    id: 5, 
    image: galleryCouple, 
    title: "Matching Couple Set", 
    category: "Couples",
    description: "Coordinated his-and-hers Vitenge outfits, custom-made for couples who want to make a statement together."
  },
  { 
    id: 6, 
    image: galleryKids, 
    title: "Little Angles", 
    category: "Kids",
    description: "cute children's Vitenge dress with playful patterns, designed for comfort and style."
  },
  { 
    id: 7, 
    image: galleryDress3, 
    title: "Teal Peacock Maxi", 
    category: "Dresses",
    description: "Graceful teal maxi dress with peacock-inspired patterns, perfect for evening events and ceremonies."
  },
  { 
    id: 8, 
    image: galleryBlazer1, 
    title: "Executive Ankara Blazer", 
    category: "Men's Wear",
    description: "Sophisticated men's blazer with traditional Ankara print, ideal for making a bold professional statement."
  },
  { 
    id: 9, 
    image: galleryHeadwrap1, 
    title: "Golden Gele Headwrap", 
    category: "Accessories",
    description: "Vibrant headwrap in golden and orange tones, hand-wrapped in traditional African style."
  },
  { 
    id: 10, 
    image: galleryFamily1, 
    title: "Mother-Daughter Set", 
    category: "Family",
    description: "Matching mother and daughter dresses in beautiful pink Vitenge fabric, perfect for family occasions."
  
  },
];

const INITIAL_ITEMS = 4;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedItems = showAll ? galleryItems : galleryItems.slice(0, INITIAL_ITEMS);

  return (
    <section id="gallery" className="py-12 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
          <span className="inline-block font-body text-sm md:text-base font-medium text-primary mb-2 md:mb-4">
            ✦ Our Collection
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 md:mb-4">
            Beautiful <span className="text-gradient-gold">Vitenge</span> Designs
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg">
            Explore our handcrafted collection of authentic African fashion pieces.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden cursor-pointer shadow-soft hover:shadow-elevated transition-all duration-500"
              onClick={() => setSelectedImage(item)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <span className="inline-block font-body text-xs font-medium text-accent mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg md:text-xl font-semibold text-primary-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-primary-foreground/80 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="inline-block bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full font-body text-xs font-medium text-foreground">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {!showAll && galleryItems.length > INITIAL_ITEMS && (
          <div className="text-center mt-10">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
              className="group"
            >
              View More Designs
              <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        )}

        {showAll && (
          <div className="text-center mt-10">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setShowAll(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              Show Less
            </Button>
          </div>
        )}

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-6 rounded-b-xl">
                  <span className="inline-block font-body text-sm font-medium text-accent mb-1">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="font-body text-primary-foreground/80">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
