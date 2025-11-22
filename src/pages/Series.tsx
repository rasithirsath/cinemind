import TopNav from "@/components/TopNav";
import { series } from "@/data/content";
import { Star, Tv } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Series = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Tv className="w-16 h-16 text-gold" />
          </div>
          <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
            Series Collection
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Binge-worthy stories that keep you coming back for more
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {series.map((show) => (
            <div
              key={show.id}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-smooth group"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src={show.poster}
                  alt={show.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gold/90 text-charcoal border-0">
                    {show.language}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-card-foreground mb-2">
                  {show.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span>{show.year}</span>
                  <span>•</span>
                  <span>{show.seasons} Seasons</span>
                  <span>•</span>
                  <span>{show.episodes} Episodes</span>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-gold text-gold" />
                  <span className="text-lg font-semibold text-card-foreground">
                    {show.rating}/5
                  </span>
                </div>

                <p className="text-card-foreground leading-relaxed line-clamp-3">
                  {show.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Series;
