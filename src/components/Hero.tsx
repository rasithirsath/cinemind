import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Film, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background collage */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 gap-2 opacity-20">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-cover bg-center animate-pulse"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-${
                ['1507003211169', '1506794778202', '1500648767791', '1472099645785', '1519085360753', '1438761681033'][i % 6]
              }-0a1dd7228f2d?w=300&h=300&fit=crop)`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* Glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Film className="w-24 h-24 text-gold animate-pulse" />
            <Sparkles className="w-8 h-8 text-gold-glow absolute -top-2 -right-2 animate-bounce" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-gold mb-6 font-serif drop-shadow-2xl">
          Cinemind
        </h1>
        
        <p className="text-xl md:text-2xl text-ivory mb-8 max-w-2xl mx-auto leading-relaxed">
          Where Every Frame Tells a Story. Discover, Review, and Celebrate Cinema's Greatest Moments.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/movies">
            <Button 
              size="lg" 
              className="bg-gold text-charcoal hover:bg-gold-glow gold-glow text-lg px-8 py-6 transition-smooth"
            >
              Browse Movies
            </Button>
          </Link>
          <Link to="/series">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gold text-gold hover:bg-gold/10 text-lg px-8 py-6 transition-smooth"
            >
              Explore Series
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
