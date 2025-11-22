import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Review {
  id: string;
  user: string;
  rating: number;
  text: string;
  date: string;
}

interface ReviewCarouselProps {
  reviews: Review[];
}

const ReviewCarousel = ({ reviews }: ReviewCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!reviews || reviews.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No reviews yet. Be the first to review!
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <div className="relative">
      <div className="bg-card rounded-2xl p-8 shadow-card min-h-[200px] flex flex-col justify-between">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-gold" />
              <span className="font-semibold text-card-foreground">{currentReview.user}</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < currentReview.rating ? "fill-gold text-gold" : "text-muted"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-card-foreground leading-relaxed">{currentReview.text}</p>
        </div>
        <div className="text-sm text-muted-foreground">
          {new Date(currentReview.date).toLocaleDateString()}
        </div>
      </div>

      {reviews.length > 1 && (
        <div className="flex items-center justify-between mt-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            className="text-gold hover:text-gold-glow hover:bg-gold/10"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </Button>
          <span className="text-muted-foreground text-sm">
            {currentIndex + 1} / {reviews.length}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            className="text-gold hover:text-gold-glow hover:bg-gold/10"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ReviewCarousel;
