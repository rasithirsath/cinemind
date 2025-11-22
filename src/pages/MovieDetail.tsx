import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TopNav from "@/components/TopNav";
import ReviewCarousel from "@/components/ReviewCarousel";
import AddReviewForm from "@/components/AddReviewForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, ExternalLink, ArrowLeft } from "lucide-react";
import { movies as defaultMovies } from "@/data/content";
import { loadMovies, updateMovieReviews, saveMovies } from "@/utils/storage";
import { getCurrentUser } from "@/utils/auth";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<any>(null);
  const [currentUser, setCurrentUser] = useState(getCurrentUser());

  useEffect(() => {
    // Reset state and fetch fresh movie data on id change
    setMovie(null);
    const allMovies = loadMovies(defaultMovies);
    const found = allMovies.find((m: any) => String(m.id) === String(id));
    setMovie(found || null);
    setCurrentUser(getCurrentUser());
  }, [id]);

  const handleAddReview = (rating: number, text: string) => {
    if (!currentUser || !movie) return;

    const newReview = {
      id: `r${Date.now()}`,
      user: currentUser.username,
      rating,
      text,
      date: new Date().toISOString().split('T')[0]
    };

    const updatedReviews = [...movie.reviews, newReview];
    const allMovies = loadMovies(defaultMovies);
    const updatedMovies = updateMovieReviews(movie.id, updatedReviews, allMovies);
    
    const updatedMovie = updatedMovies.find((m: any) => m.id === movie.id);
    setMovie(updatedMovie);
  };

  if (!movie) {
    return (
      <div className="min-h-screen bg-background">
        <TopNav />
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl font-serif text-foreground">Movie not found</h1>
          <Link to="/movies">
            <Button className="mt-6 bg-gold text-charcoal hover:bg-gold-glow">
              Back to Movies
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const avgRating = movie.reviews.length > 0
    ? (movie.reviews.reduce((sum: number, r: any) => sum + r.rating, 0) / movie.reviews.length).toFixed(1)
    : movie.rating;

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      
      <section className="container mx-auto px-6 py-16">
        <Link to="/movies">
          <Button variant="ghost" className="mb-6 text-gold hover:text-gold-glow hover:bg-gold/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Movies
          </Button>
        </Link>

        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full rounded-2xl shadow-elegant sticky top-24"
            />
          </div>

          <div className="md:col-span-3 space-y-8">
            <div>
              <Badge className="bg-gold text-charcoal mb-3">{movie.language}</Badge>
              <h1 className="text-6xl font-serif font-bold text-foreground mb-4">
                {movie.title}
              </h1>

              <div className="flex items-center gap-6 mb-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="text-lg">{movie.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 fill-gold text-gold" />
                  <span className="text-2xl font-semibold text-foreground">{avgRating}/5</span>
                  <span className="text-sm">({movie.reviews.length} reviews)</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">
                Synopsis
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                {movie.summary}
              </p>
            </div>

            <div className="flex items-center gap-4 p-6 bg-card rounded-2xl">
              <img
                src={movie.director.photo}
                alt={movie.director.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <p className="text-sm text-muted-foreground">Directed by</p>
                <a
                  href={movie.director.wiki}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-gold hover:text-gold-glow flex items-center gap-2 transition-smooth"
                >
                  {movie.director.name}
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Reviews ({movie.reviews.length})
            </h2>
            <ReviewCarousel reviews={movie.reviews} />
          </div>

          <div>
            {currentUser ? (
              <AddReviewForm onSubmit={handleAddReview} />
            ) : (
              <div className="bg-card rounded-2xl p-8 text-center shadow-card">
                <p className="text-lg text-card-foreground mb-4">
                  Want to share your thoughts?
                </p>
                <Link to="/login">
                  <Button className="bg-gold text-charcoal hover:bg-gold-glow gold-glow">
                    Login to Write a Review
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetail;
