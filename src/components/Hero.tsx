import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Film, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="hero-section relative w-full flex items-center justify-center bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url('https://thecinemaholic.com/wp-content/uploads/2016/08/20-Greatest-Indian-Directors.jpg?resize=300')`,
      }}
    >
      {/* Mobile responsive override ONLY for .hero-section */}
      <style>
        {`
  @media (max-width: 600px) {
    .hero-section {
      background-image: url('https://image2url.com/images/1764762034726-d5ad60cb-968b-4f71-a304-e03175f8dad5.png') !important;
      
      /* FIX: Enough height so content doesn't collapse */
      height: 600px !important;

      background-size: cover !important;
      background-position: center top !important;

      /* Optional slight dark overlay for readability */
      position: relative;
    }

    /* Adjust text block spacing */
    .hero-content {
      padding-top: 140px !important; 
    }
  }
`}
      </style>

      {/* Shadow Box */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[90%] max-w-4xl h-[70%] mx-auto rounded-3xl shadow-[0_0_120px_40px_rgba(0,0,0,0.45)] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 text-center px-6 max-w-4xl">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Film className="w-24 h-24 text-gold animate-pulse" />
            <Sparkles className="w-8 h-8 text-gold-glow absolute -top-2 -right-2 animate-bounce" />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-gold mb-6 font-serif drop-shadow-2xl">
          Cinemind
        </h1>

        <p className="text-xl md:text-2xl text-ivory mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
          Where Every Frame Tells a Story. Discover, Review, and Celebrate
          Cinema's Greatest Moments.
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
    </section>
  );
};

export default Hero;
