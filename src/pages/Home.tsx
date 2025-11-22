import { useState, useEffect } from "react";
import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import MovieGrid from "@/components/MovieGrid";
import { movies as defaultMovies } from "@/data/content";
import { loadMovies } from "@/utils/storage";
import { initializeUsers, initialUsers } from "@/data/content";

const Home = () => {
  const [movies, setMovies] = useState(loadMovies(defaultMovies));
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    initializeUsers(initialUsers);
  }, []);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredMovies(movies);
      return;
    }

    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.language.toLowerCase().includes(query.toLowerCase()) ||
      movie.director.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <Hero />
      
      <section className="container mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4 text-center">
            Discover Cinema
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Search through our curated collection of masterpieces
          </p>
          <SearchBar onSearch={handleSearch} placeholder="Search movies by title, language, or director..." />
        </div>

        <MovieGrid 
          movies={filteredMovies.slice(0, 12)} 
          emptyMessage="No movies found. Try a different search term."
        />
      </section>
    </div>
  );
};

export default Home;
