import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signup } from "@/utils/auth";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    name: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    const result = signup(formData.username, formData.password, formData.email, formData.name);
    setLoading(false);

    if (result.success) {
      toast({
        title: "Account created!",
        description: "Welcome to Cinemind"
      });
      navigate("/");
    } else {
      toast({
        title: "Signup failed",
        description: result.message,
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <Film className="w-10 h-10 text-gold" />
            <span className="text-3xl font-bold text-gold font-serif">Cinemind</span>
          </Link>
          <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
            Join Cinemind
          </h1>
          <p className="text-muted-foreground">
            Create an account to start reviewing
          </p>
        </div>

        <div className="glass-effect rounded-2xl p-8 shadow-elegant">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name" className="text-foreground">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 bg-background border-border/30 focus:border-gold text-foreground"
                placeholder="John Doe"
              />
            </div>

            <div>
              <Label htmlFor="username" className="text-foreground">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                required
                className="mt-2 bg-background border-border/30 focus:border-gold text-foreground"
                placeholder="johndoe"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 bg-background border-border/30 focus:border-gold text-foreground"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-foreground">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-2 bg-background border-border/30 focus:border-gold text-foreground"
                placeholder="••••••••"
              />
            </div>

            <div>
              <Label htmlFor="confirmPassword" className="text-foreground">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="mt-2 bg-background border-border/30 focus:border-gold text-foreground"
                placeholder="••••••••"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gold text-charcoal hover:bg-gold-glow gold-glow"
            >
              {loading ? "Creating account..." : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-gold hover:text-gold-glow font-semibold transition-smooth">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
