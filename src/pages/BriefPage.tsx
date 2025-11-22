import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TopNav from "@/components/TopNav";
import ReviewCarousel from "@/components/ReviewCarousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, ExternalLink } from "lucide-react";
import { movies as defaultMovies } from "@/data/content";
import { loadMovies } from "@/utils/storage";

const BriefPage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    const found = defaultMovies.find((m: any) => String(m.id) === String(id));
    setMovie(found || null);
  }, [id]);

  if (!movie) {
    return (
      <div className="min-h-screen bg-background">
        <TopNav />
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl font-serif text-foreground">
            Movie not found
          </h1>
          <Link to="/movies">
            <Button className="mt-6 bg-gold text-charcoal hover:bg-gold-glow">
              Back to Movies
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <TopNav />

      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="relative group">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full rounded-2xl shadow-elegant transition-smooth group-hover:scale-[1.02]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <Badge className="bg-gold text-charcoal mb-2">
                {movie.language}
              </Badge>
            </div>

            <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
              {movie.title}
            </h1>

            <div className="flex items-center gap-6 mb-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{movie.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-gold text-gold" />
                <span className="text-xl font-semibold text-foreground">
                  {movie.rating}/5
                </span>
              </div>
            </div>

            <p className="text-lg text-foreground leading-relaxed mb-8 line-clamp-4">
              {movie.summary}
            </p>

            <div className="flex items-center gap-4 mb-8 p-4 bg-card rounded-xl">
              <img
                src={movie.director.photo}
                alt={movie.director.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="text-sm text-muted-foreground">Directed by</p>
                <a
                  href={movie.director.wiki}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gold hover:text-gold-glow flex items-center gap-2 transition-smooth"
                >
                  {movie.director.name}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <Link to={`/movie/${movie.id}`}>
              <Button
                size="lg"
                className="w-full bg-gold text-charcoal hover:bg-gold-glow gold-glow"
              >
                View Full Details
              </Button>
            </Link>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
            Quick Reviews
          </h2>
          <ReviewCarousel reviews={movie.reviews} />
        </div>
      </section>
    </div>
  );
};

export default BriefPage;
