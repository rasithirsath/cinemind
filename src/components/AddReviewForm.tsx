import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface AddReviewFormProps {
  onSubmit: (rating: number, text: string) => void;
}

const AddReviewForm = ({ onSubmit }: AddReviewFormProps) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: "Please select a rating",
        variant: "destructive"
      });
      return;
    }

    if (text.trim().length < 10) {
      toast({
        title: "Review too short",
        description: "Please write at least 10 characters",
        variant: "destructive"
      });
      return;
    }

    onSubmit(rating, text);
    setRating(0);
    setText("");
    toast({
      title: "Review added!",
      description: "Thank you for sharing your thoughts"
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 shadow-card">
      <h3 className="text-xl font-serif font-semibold text-card-foreground mb-4">
        Write Your Review
      </h3>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-card-foreground mb-2">
          Your Rating
        </label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="transition-smooth hover:scale-110"
            >
              <Star
                className={`w-8 h-8 ${
                  star <= (hoverRating || rating)
                    ? "fill-gold text-gold"
                    : "text-muted"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-card-foreground mb-2">
          Your Thoughts
        </label>
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Share your experience with this movie..."
          rows={4}
          className="bg-background border-border/30 focus:border-gold text-foreground rounded-xl resize-none"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-gold text-charcoal hover:bg-gold-glow gold-glow"
      >
        Submit Review
      </Button>
    </form>
  );
};

export default AddReviewForm;
