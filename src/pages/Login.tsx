import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/utils/auth";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = login(username, password);
    
    setLoading(false);
    
    if (result.success) {
      toast({
        title: "Welcome back!",
        description: `Logged in as ${result.user?.name}`
      });
      navigate("/");
    } else {
      toast({
        title: "Login failed",
        description: result.message,
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <Film className="w-10 h-10 text-gold" />
            <span className="text-3xl font-bold text-gold font-serif">Cinemind</span>
          </Link>
          <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
            Welcome Back
          </h1>
          <p className="text-muted-foreground">
            Sign in to continue your cinematic journey
          </p>
        </div>

        <div className="glass-effect rounded-2xl p-8 shadow-elegant">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="username" className="text-foreground">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-2 bg-background border-border/30 focus:border-gold text-foreground"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-foreground">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-2 bg-background border-border/30 focus:border-gold text-foreground"
                placeholder="Enter your password"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gold text-charcoal hover:bg-gold-glow gold-glow"
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-gold hover:text-gold-glow font-semibold transition-smooth">
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-6 p-4 bg-secondary/30 rounded-xl">
            <p className="text-sm text-muted-foreground text-center mb-2">Demo Account:</p>
            <p className="text-sm text-foreground text-center">
              <strong>Username:</strong> demo | <strong>Password:</strong> demo123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
