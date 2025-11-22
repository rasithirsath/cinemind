import MovieCard from "./MovieCard";

interface Movie {
  id: string;
  title: string;
  poster: string;
  language: string;
  year: number;
  rating: number;
}

interface MovieGridProps {
  movies: Movie[];
  emptyMessage?: string;
}

const MovieGrid = ({ movies, emptyMessage = "No movies found" }: MovieGridProps) => {
  if (movies.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster={movie.poster}
          language={movie.language}
          year={movie.year}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
