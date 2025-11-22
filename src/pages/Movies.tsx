import { useState, useEffect } from "react";
import TopNav from "@/components/TopNav";
import SearchBar from "@/components/SearchBar";
import MovieGrid from "@/components/MovieGrid";
import { movies as defaultMovies } from "@/data/content";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Movies = () => {
  const [movies, setMovies] = useState(defaultMovies);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [selectedLanguage, setSelectedLanguage] = useState("all");

  useEffect(() => {
    filterMovies("", selectedLanguage);
  }, [selectedLanguage, movies]);

  const filterMovies = (query: string, language: string) => {
    let filtered = movies;

    if (language !== "all") {
      filtered = filtered.filter(
        (movie) => movie.language.toLowerCase() === language.toLowerCase()
      );
    }

    if (query.trim()) {
      filtered = filtered.filter(
        (movie) =>
          movie.title.toLowerCase().includes(query.toLowerCase()) ||
          movie.director.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredMovies(filtered);
  };

  const handleSearch = (query: string) => {
    filterMovies(query, selectedLanguage);
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNav />

      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
            All Movies
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Browse our complete collection of cinematic masterpieces
          </p>

          <div className="mb-8">
            <SearchBar onSearch={handleSearch} placeholder="Search movies..." />
          </div>

          <Tabs
            value={selectedLanguage}
            onValueChange={setSelectedLanguage}
            className="w-fit mx-auto"
          >
            <TabsList className="bg-secondary/50">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-gold data-[state=active]:text-charcoal"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="tamil"
                className="data-[state=active]:bg-gold data-[state=active]:text-charcoal"
              >
                Tamil
              </TabsTrigger>
              <TabsTrigger
                value="english"
                className="data-[state=active]:bg-gold data-[state=active]:text-charcoal"
              >
                English
              </TabsTrigger>
              <TabsTrigger
                value="hindi"
                className="data-[state=active]:bg-gold data-[state=active]:text-charcoal"
              >
                Hindi
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <MovieGrid
          movies={filteredMovies}
          emptyMessage="No movies found in this category."
        />
      </section>
    </div>
  );
};

export default Movies;
