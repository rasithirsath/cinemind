import { Link } from "react-router-dom";
import { Film, User, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCurrentUser, logout } from "@/utils/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const TopNav = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const [menuOpen, setMenuOpen] = useState(false);

  // Sync user state (you already had this)
  useEffect(() => {
    const checkUser = () => setCurrentUser(getCurrentUser());
    window.addEventListener("storage", checkUser);
    const interval = setInterval(checkUser, 500);

    return () => {
      window.removeEventListener("storage", checkUser);
      clearInterval(interval);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-border/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Film className="w-8 h-8 text-gold transition-smooth group-hover:scale-110" />
            <span className="text-2xl font-bold text-gold font-serif">
              Cinemind
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-gold transition-smooth font-medium"
            >
              Home
            </Link>
            <Link
              to="/movies"
              className="text-foreground hover:text-gold transition-smooth font-medium"
            >
              Movies
            </Link>
            <Link
              to="/series"
              className="text-foreground hover:text-gold transition-smooth font-medium"
            >
              Series
            </Link>

            {currentUser ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-foreground hover:text-gold"
                  >
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
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-foreground hover:text-gold"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    size="sm"
                    className="bg-gold text-charcoal hover:bg-gold-glow gold-glow"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gold"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4 border-t border-border/20">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block text-foreground hover:text-gold text-lg"
            >
              Home
            </Link>

            <Link
              to="/movies"
              onClick={() => setMenuOpen(false)}
              className="block text-foreground hover:text-gold text-lg"
            >
              Movies
            </Link>

            <Link
              to="/series"
              onClick={() => setMenuOpen(false)}
              className="block text-foreground hover:text-gold text-lg"
            >
              Series
            </Link>

            {currentUser ? (
              <>
                <Link to="/profile" onClick={() => setMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-left text-foreground hover:text-gold"
                  >
                    <User className="w-4 h-4 mr-2" />
                    {currentUser.name}
                  </Button>
                </Link>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="w-full text-left text-foreground hover:text-gold"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-left text-foreground hover:text-gold"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setMenuOpen(false)}>
                  <Button
                    size="sm"
                    className="w-full bg-gold text-charcoal hover:bg-gold-glow gold-glow"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNav;
