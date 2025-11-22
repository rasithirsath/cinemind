import { Link } from "react-router-dom";
import { Film, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCurrentUser, logout } from "@/utils/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const TopNav = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(getCurrentUser());

  useEffect(() => {
    const checkUser = () => setCurrentUser(getCurrentUser());
    window.addEventListener('storage', checkUser);
    const interval = setInterval(checkUser, 500);
    return () => {
      window.removeEventListener('storage', checkUser);
      clearInterval(interval);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-border/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <Film className="w-8 h-8 text-gold transition-smooth group-hover:scale-110" />
            <span className="text-2xl font-bold text-gold font-serif">Cinemind</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-gold transition-smooth font-medium">
              Home
            </Link>
            <Link to="/movies" className="text-foreground hover:text-gold transition-smooth font-medium">
              Movies
            </Link>
            <Link to="/series" className="text-foreground hover:text-gold transition-smooth font-medium">
              Series
            </Link>
            
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile">
                  <Button variant="ghost" size="sm" className="text-foreground hover:text-gold">
                    <User className="w-4 h-4 mr-2" />
                    {currentUser.name}
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleLogout}
                  className="text-foreground hover:text-gold"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="text-foreground hover:text-gold">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm" className="bg-gold text-charcoal hover:bg-gold-glow gold-glow">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
