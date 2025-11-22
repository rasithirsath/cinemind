import { Link } from "react-router-dom";
import { Star, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface MovieCardProps {
  id: string;
  title: string;
  poster: string;
  language: string;
  year: number;
  rating: number;
}

const MovieCard = ({ id, title, poster, language, year, rating }: MovieCardProps) => {
  return (
    <Link to={`/brief/${id}`} className="group">
      <div className="relative overflow-hidden rounded-2xl bg-card shadow-card transition-smooth hover:shadow-elegant hover:scale-[1.03] cursor-pointer">
        <div className="aspect-[2/3] relative overflow-hidden">
          <img
            src={poster}
            alt={title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
          
          <div className="absolute top-3 right-3 flex gap-2">
            <Badge className="bg-gold/90 text-charcoal border-0 backdrop-blur-sm">
              {language}
            </Badge>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-smooth">
            <ExternalLink className="w-5 h-5 text-gold" />
          </div>
        </div>
        
        <div className="p-4 bg-card">
          <h3 className="font-serif font-semibold text-lg text-card-foreground mb-1 line-clamp-1">
            {title}
          </h3>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{year}</span>
            <div className="flex items-center gap-1 text-gold">
              <Star className="w-4 h-4 fill-gold" />
              <span className="font-semibold">{rating}/5</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
