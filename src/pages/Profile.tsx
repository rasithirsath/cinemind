import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "@/components/TopNav";
import { getCurrentUser } from "@/utils/auth";
import { movies as defaultMovies } from "@/data/content";
import { loadMovies } from "@/utils/storage";
import { User, Star, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const [userReviews, setUserReviews] = useState<any[]>([]);

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      navigate("/login");
      return;
    }
    setCurrentUser(user);

    const allMovies = loadMovies(defaultMovies);
    const reviews: any[] = [];
    
    allMovies.forEach((movie: any) => {
      movie.reviews.forEach((review: any) => {
        if (review.user === user.username) {
          reviews.push({
            ...review,
            movieId: movie.id,
            movieTitle: movie.title,
            moviePoster: movie.poster
          });
        }
      });
    });

    setUserReviews(reviews);
  }, [navigate]);

  if (!currentUser) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 mb-12">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gold/20 flex items-center justify-center">
                <User className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h1 className="text-4xl font-serif font-bold text-foreground mb-2">
                  {currentUser.name}
                </h1>
                <p className="text-muted-foreground text-lg">@{currentUser.username}</p>
                <p className="text-muted-foreground">{currentUser.email}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6 flex items-center gap-3">
              <Film className="w-8 h-8 text-gold" />
              Your Reviews ({userReviews.length})
            </h2>

            {userReviews.length === 0 ? (
              <div className="text-center py-12 glass-effect rounded-2xl">
                <p className="text-xl text-muted-foreground mb-4">
                  You haven't written any reviews yet
                </p>
                <Button 
                  onClick={() => navigate("/movies")}
                  className="bg-gold text-charcoal hover:bg-gold-glow gold-glow"
                >
                  Browse Movies
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {userReviews.map((review) => (
                  <div key={review.id} className="glass-effect rounded-2xl p-6 hover:shadow-elegant transition-smooth">
                    <div className="flex gap-6">
                      <img
                        src={review.moviePoster}
                        alt={review.movieTitle}
                        className="w-24 h-36 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                          {review.movieTitle}
                        </h3>
                        <div className="flex items-center gap-2 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < review.rating ? "fill-gold text-gold" : "text-muted"
                              }`}
                            />
                          ))}
                          <span className="text-sm text-muted-foreground ml-2">
                            {new Date(review.date).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-foreground leading-relaxed">
                          {review.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
