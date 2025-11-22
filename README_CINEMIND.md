# Cinemind - Premium Movie Review Platform

A luxurious, cinematic movie review website built with React, TypeScript, and Tailwind CSS. Features a complete frontend-only implementation with hard-coded data, client-side authentication, and a rich review system.

## 🎬 Features

- **24+ Movies**: Curated collection of 12 Tamil and 12 English movies
- **8+ Series**: Premium TV series collection
- **Movie Pages**: Brief preview and detailed movie pages
- **Review System**: Per-movie reviews with star ratings and carousel display
- **Search**: Global search with instant filtering
- **Authentication**: Client-side auth using localStorage (demo mode)
- **Responsive Design**: Mobile-first, beautiful UI with glassmorphism effects
- **Director Info**: Wikipedia links for each director

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will run at `http://localhost:8080`

## 📁 Project Structure

```
src/
├── components/
│   ├── TopNav.tsx              # Navigation bar with auth state
│   ├── Hero.tsx                # Full-screen hero section
│   ├── SearchBar.tsx           # Debounced search component
│   ├── MovieCard.tsx           # Movie grid card
│   ├── MovieGrid.tsx           # Responsive movie grid
│   ├── ReviewCarousel.tsx      # Review slider with navigation
│   └── AddReviewForm.tsx       # Review submission form
├── pages/
│   ├── Home.tsx                # Landing page with hero
│   ├── Movies.tsx              # All movies with filters
│   ├── Series.tsx              # Series collection
│   ├── BriefPage.tsx           # Movie preview (/brief/:id)
│   ├── MovieDetail.tsx         # Full movie details (/movie/:id)
│   ├── Login.tsx               # Login form
│   ├── Signup.tsx              # Registration form
│   └── Profile.tsx             # User profile with reviews
├── data/
│   └── content.js              # Hard-coded movies, series, users
├── utils/
│   ├── auth.js                 # localStorage auth helpers
│   └── storage.js              # Movie data persistence
└── App.tsx                     # Main routing
```

## 🎨 Design System

### Color Palette
- **Deep Charcoal** (#0F1724) - Background
- **Gold Accent** (#D4AF37) - CTAs, highlights
- **Warm Ivory** (#F7F3EA) - Cards, text
- **Muted Slate** (#6B7280) - Secondary text
- **Accent Cyan** (#00A9B7) - Links

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Effects
- Glassmorphism navbar
- Hover scale transforms
- Soft shadows with gold glow
- Smooth 250ms transitions

## 🔐 Authentication

Demo account for testing:
- **Username**: demo
- **Password**: demo123

New users can sign up, and accounts are stored in localStorage.

## 🎯 Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero + featured movies |
| `/movies` | Movies | Full movie grid with filters |
| `/series` | Series | TV series collection |
| `/brief/:id` | Brief | Movie preview with reviews |
| `/movie/:id` | Detail | Full movie info + review form |
| `/login` | Login | User login |
| `/signup` | Signup | User registration |
| `/profile` | Profile | User's reviews |

## 🐛 Bug Fixes Implemented

### 1. Movie Grid Blank
- **Solution**: Initialize data from hard-coded source on mount
- **Implementation**: `loadMovies()` utility ensures movies always render

### 2. Signup/Login Empty Pages
- **Solution**: Created full form components with proper routing
- **Implementation**: Glass-effect cards with validation and localStorage persistence

### 3. Stale Movie Data
- **Solution**: `useParams()` + `useEffect` with id dependency
- **Implementation**: State resets on id change, fresh data fetched per movie
```tsx
useEffect(() => {
  setMovie(null); // Reset state
  const found = movies.find(m => String(m.id) === String(id));
  setMovie(found);
}, [id]); // Re-run when id changes
```

## 🔑 Key Implementation Details

### Unique Keys
All lists use unique IDs:
```tsx
{movies.map(movie => <MovieCard key={movie.id} {...movie} />)}
```

### Review Persistence
Reviews stored in `localStorage.cinemind_movies`:
```javascript
updateMovieReviews(movieId, updatedReviews, allMovies);
```

### Auth Protection
Review form only shown to authenticated users:
```tsx
{currentUser ? <AddReviewForm /> : <LoginPrompt />}
```

## 📝 Data Editing

To add/edit movies, series, or users:
1. Open `src/data/content.js`
2. Edit the exported arrays
3. Follow the existing object structure
4. Save and refresh

Example movie object:
```javascript
{
  id: "movie-1",
  title: "Movie Title",
  poster: "image-url",
  language: "English",
  year: 2024,
  rating: 4.5,
  summary: "Description...",
  director: {
    name: "Director Name",
    photo: "photo-url",
    wiki: "wikipedia-url"
  },
  reviews: []
}
```

## ✅ QA Checklist

- [x] `/movies` renders full grid (never blank)
- [x] `/brief/:id` displays unique movie data per id
- [x] `/movie/:id` shows correct movie + reviews
- [x] Login/Signup pages render forms properly
- [x] Adding review updates only that movie's reviews
- [x] State resets when navigating between movies
- [x] Unique keys used for all lists
- [x] localStorage persists reviews and auth
- [x] Search filters movies instantly
- [x] Responsive on mobile/tablet/desktop

## 🚢 Deployment

Built with Vite and ready to deploy to:
- Vercel
- Netlify
- Lovable Cloud

```bash
npm run build
```

## 📚 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Router** - Navigation
- **shadcn/ui** - Component primitives
- **Lucide React** - Icons

## 🎭 Credits

Built as a premium cinematic experience showcasing React best practices, design system architecture, and frontend-only full-stack patterns.
