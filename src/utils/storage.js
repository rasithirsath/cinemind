// Persist movie data (reviews) to localStorage for demo persistence

const MOVIES_KEY = 'cinemind_movies';

export const saveMovies = (movies) => {
  localStorage.setItem(MOVIES_KEY, JSON.stringify(movies));
};

export const loadMovies = (defaultMovies) => {
  const stored = localStorage.getItem(MOVIES_KEY);
  return stored ? JSON.parse(stored) : defaultMovies;
};

export const updateMovieReviews = (movieId, reviews, allMovies) => {
  const updated = allMovies.map(m => 
    m.id === movieId ? { ...m, reviews } : m
  );
  saveMovies(updated);
  return updated;
};
