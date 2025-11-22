// Hard-coded movie, series, and user data for Cinemind

export const movies = [
  // Tamil Movies
  {
    id: "movie-1",
    title: "Vikram",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=900&fit=crop",
    language: "Tamil",
    year: 2022,
    rating: 4.5,
    summary: "A black-ops agent and his team embark on a dangerous mission to track down a masked vigilante, uncovering a web of crime and corruption. Intense action sequences blend with emotional storytelling in this cinematic masterpiece.",
    director: {
      name: "Lokesh Kanagaraj",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/Lokesh_Kanagaraj"
    },
    reviews: [
      { id: "r1-1", user: "demo", rating: 5, text: "Absolute masterpiece! The action choreography is world-class.", date: "2024-01-15" },
      { id: "r1-2", user: "cinephile", rating: 4, text: "Gripping narrative with stellar performances.", date: "2024-01-20" }
    ]
  },
  {
    id: "movie-2",
    title: "Jai Bhim",
    poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=600&h=900&fit=crop",
    language: "Tamil",
    year: 2021,
    rating: 4.8,
    summary: "A fierce advocate fights for justice for a marginalized tribal woman whose husband disappears from police custody. This powerful drama sheds light on systemic oppression and human rights.",
    director: {
      name: "T. J. Gnanavel",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/T._J._Gnanavel"
    },
    reviews: [
      { id: "r2-1", user: "demo", rating: 5, text: "Heart-wrenching and necessary storytelling. A must-watch.", date: "2024-02-10" },
      { id: "r2-2", user: "activist", rating: 5, text: "Brings crucial issues to the forefront with sensitivity.", date: "2024-02-14" }
    ]
  },
  {
    id: "movie-3",
    title: "Soorarai Pottru",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=900&fit=crop",
    language: "Tamil",
    year: 2020,
    rating: 4.7,
    summary: "Inspired by true events, this film follows an ambitious man from a small town who dreams of launching a low-cost airline to connect the common people. A story of perseverance, innovation, and triumph over adversity.",
    director: {
      name: "Sudha Kongara",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/Sudha_Kongara"
    },
    reviews: [
      { id: "r3-1", user: "demo", rating: 5, text: "Inspiring and beautifully executed. One of the best biopics.", date: "2024-03-01" },
      { id: "r3-2", user: "entrepreneur", rating: 4, text: "Motivational journey that resonates with dreamers.", date: "2024-03-05" }
    ]
  },
  {
    id: "movie-4",
    title: "Master",
    poster: "https://images.unsplash.com/photo-1574267432644-f610f76e6178?w=600&h=900&fit=crop",
    language: "Tamil",
    year: 2021,
    rating: 4.3,
    summary: "An alcoholic professor is sent to a juvenile home where he confronts a ruthless gangster. What unfolds is a high-stakes battle of wits, morality, and redemption.",
    director: {
      name: "Lokesh Kanagaraj",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/Lokesh_Kanagaraj"
    },
    reviews: [
      { id: "r4-1", user: "demo", rating: 4, text: "Entertaining clash between two powerhouse actors.", date: "2024-03-20" }
    ]
  },
  {
    id: "movie-5",
    title: "Karnan",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=900&fit=crop",
    language: "Tamil",
    year: 2021,
    rating: 4.6,
    summary: "A fearless young man stands up against caste-based oppression in his village. This raw and visceral tale celebrates the fight for dignity and equality.",
    director: {
      name: "Mari Selvaraj",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/Mari_Selvaraj"
    },
    reviews: [
      { id: "r5-1", user: "demo", rating: 5, text: "Powerful and unflinching. A modern classic.", date: "2024-04-05" },
      { id: "r5-2", user: "reviewer", rating: 5, text: "Raw emotion and brilliant direction.", date: "2024-04-08" }
    ]
  },
  {
    id: "movie-6",
    title: "Anbe Sivam",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=900&fit=crop",
    language: "Tamil",
    year: 2003,
    rating: 4.9,
    summary: "Two contrasting personalities embark on a journey together, discovering the true meaning of compassion, humanity, and love. A timeless philosophical drama.",
    director: {
      name: "Sundar C",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/Sundar_C"
    },
    reviews: [
      { id: "r6-1", user: "demo", rating: 5, text: "Ahead of its time. A philosophical masterpiece.", date: "2024-04-15" }
    ]
  },
  {
    id: "movie-7",
    title: "Nayakan",
    poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&h=900&fit=crop",
    language: "Tamil",
    year: 1987,
    rating: 4.8,
    summary: "A slum boy grows up to become a feared underworld don, battling rivals and the system while trying to maintain his moral code. An epic crime saga.",
    director: {
      name: "Mani Ratnam",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/Mani_Ratnam"
    },
    reviews: [
      { id: "r7-1", user: "demo", rating: 5, text: "Iconic film that defined a generation.", date: "2024-05-01" }
    ]
  },
  {
    id: "movie-8",
    title: "96",
    poster: "https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?w=600&h=900&fit=crop",
    language: "Tamil",
    year: 2018,
    rating: 4.5,
    summary: "Two high school sweethearts reunite after 22 years at a reunion, rekindling memories and emotions. A tender, bittersweet romance that touches the soul.",
    director: {
      name: "C. Prem Kumar",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/C._Prem_Kumar"
    },
    reviews: [
      { id: "r8-1", user: "demo", rating: 5, text: "Beautifully nostalgic and emotionally resonant.", date: "2024-05-10" }
    ]
  },
  {
    id: "movie-9",
    title: "Theeran Adhigaaram Ondru",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&h=900&fit=crop",
    language: "Tamil",
    year: 2017,
    rating: 4.4,
    summary: "A dedicated police officer leads a special task force to hunt down a notorious gang of highway robbers. Based on true events, this thriller is intense and gripping.",
    director: {
      name: "H. Vinoth",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/H._Vinoth"
    },
    reviews: [
      { id: "r9-1", user: "demo", rating: 4, text: "Realistic and hard-hitting police procedural.", date: "2024-05-20" }
    ]
  },
  {
    id: "movie-10",
    title: "Vada Chennai",
    poster: "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?w=600&h=900&fit=crop",
    language: "Tamil",
    year: 2018,
    rating: 4.6,
    summary: "A carrom player's life takes a dark turn when he gets entangled in the murky world of North Chennai's gang wars. An epic crime saga spanning three decades.",
    director: {
      name: "Vetrimaaran",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/Vetrimaaran"
    },
    reviews: [
      { id: "r10-1", user: "demo", rating: 5, text: "Gritty, layered storytelling at its finest.", date: "2024-06-01" }
    ]
  },
  {
    id: "movie-11",
    title: "Asuran",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=900&fit=crop",
    language: "Tamil",
    year: 2019,
    rating: 4.7,
    summary: "A peaceful farmer's dark past resurfaces when his family is threatened by powerful landlords. A tale of vengeance, survival, and social injustice.",
    director: {
      name: "Vetrimaaran",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/Vetrimaaran"
    },
    reviews: [
      { id: "r11-1", user: "demo", rating: 5, text: "Brutal and unforgettable. A masterclass in filmmaking.", date: "2024-06-10" }
    ]
  },
  {
    id: "movie-12",
    title: "Visaranai",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=900&fit=crop",
    language: "Tamil",
    year: 2015,
    rating: 4.8,
    summary: "Four Tamil laborers are tortured by police into confessing to a crime they didn't commit. A harrowing, realistic portrayal of police brutality and systemic corruption.",
    director: {
      name: "Vetrimaaran",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/Vetrimaaran"
    },
    reviews: [
      { id: "r12-1", user: "demo", rating: 5, text: "Disturbing, powerful, and necessary cinema.", date: "2024-06-20" }
    ]
  },

  // English Movies
  {
    id: "movie-13",
    title: "The Shawshank Redemption",
    poster: "https://images.unsplash.com/photo-1574267432644-f610f76e6178?w=600&h=900&fit=crop",
    language: "English",
    year: 1994,
    rating: 4.9,
    summary: "Two imprisoned men bond over years, finding redemption through acts of decency. A timeless story of hope, friendship, and the resilience of the human spirit.",
    director: {
      name: "Frank Darabont",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/Frank_Darabont"
    },
    reviews: [
      { id: "r13-1", user: "demo", rating: 5, text: "One of the greatest films ever made. Pure perfection.", date: "2024-07-01" }
    ]
  },
  {
    id: "movie-14",
    title: "The Dark Knight",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&h=900&fit=crop",
    language: "English",
    year: 2008,
    rating: 4.8,
    summary: "Batman faces his greatest challenge when the Joker wreaks havoc on Gotham City. A dark, complex superhero film that transcends the genre.",
    director: {
      name: "Christopher Nolan",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/Christopher_Nolan"
    },
    reviews: [
      { id: "r14-1", user: "demo", rating: 5, text: "Heath Ledger's Joker is legendary. Masterpiece.", date: "2024-07-10" }
    ]
  },
  {
    id: "movie-15",
    title: "Inception",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=900&fit=crop",
    language: "English",
    year: 2010,
    rating: 4.7,
    summary: "A skilled thief enters the dreams of others to steal secrets. But his latest job involves planting an idea deep within a target's subconscious. Mind-bending thriller.",
    director: {
      name: "Christopher Nolan",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/Christopher_Nolan"
    },
    reviews: [
      { id: "r15-1", user: "demo", rating: 5, text: "Visually stunning and intellectually challenging.", date: "2024-07-20" }
    ]
  },
  {
    id: "movie-16",
    title: "Interstellar",
    poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&h=900&fit=crop",
    language: "English",
    year: 2014,
    rating: 4.6,
    summary: "A team of astronauts travels through a wormhole near Saturn in search of a new home for humanity. Epic sci-fi exploring love, sacrifice, and survival.",
    director: {
      name: "Christopher Nolan",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/Christopher_Nolan"
    },
    reviews: [
      { id: "r16-1", user: "demo", rating: 5, text: "Emotional and visually breathtaking space odyssey.", date: "2024-08-01" }
    ]
  },
  {
    id: "movie-17",
    title: "Pulp Fiction",
    poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=600&h=900&fit=crop",
    language: "English",
    year: 1994,
    rating: 4.7,
    summary: "Interconnected stories of LA mobsters, fringe players, and a mysterious briefcase. Quentin Tarantino's nonlinear masterpiece redefined cinema.",
    director: {
      name: "Quentin Tarantino",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/Quentin_Tarantino"
    },
    reviews: [
      { id: "r17-1", user: "demo", rating: 5, text: "Iconic dialogue and unforgettable scenes throughout.", date: "2024-08-10" }
    ]
  },
  {
    id: "movie-18",
    title: "Forrest Gump",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=900&fit=crop",
    language: "English",
    year: 1994,
    rating: 4.5,
    summary: "A simple man with a low IQ unwittingly influences major historical events while pursuing his childhood sweetheart. Heartwarming and inspirational.",
    director: {
      name: "Robert Zemeckis",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/Robert_Zemeckis"
    },
    reviews: [
      { id: "r18-1", user: "demo", rating: 5, text: "Life is like a box of chocolates... Timeless classic.", date: "2024-08-20" }
    ]
  },
  {
    id: "movie-19",
    title: "Fight Club",
    poster: "https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?w=600&h=900&fit=crop",
    language: "English",
    year: 1999,
    rating: 4.6,
    summary: "An insomniac office worker forms an underground fight club with a charismatic soap maker. A dark, satirical look at masculinity and consumerism.",
    director: {
      name: "David Fincher",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/David_Fincher"
    },
    reviews: [
      { id: "r19-1", user: "demo", rating: 5, text: "Mind-blowing twist and cultural phenomenon.", date: "2024-09-01" }
    ]
  },
  {
    id: "movie-20",
    title: "The Matrix",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&h=900&fit=crop",
    language: "English",
    year: 1999,
    rating: 4.7,
    summary: "A hacker discovers that reality is a simulation controlled by machines. Revolutionary sci-fi that changed action cinema forever.",
    director: {
      name: "The Wachowskis",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/The_Wachowskis"
    },
    reviews: [
      { id: "r20-1", user: "demo", rating: 5, text: "Groundbreaking visuals and philosophy. Iconic.", date: "2024-09-10" }
    ]
  },
  {
    id: "movie-21",
    title: "Goodfellas",
    poster: "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?w=600&h=900&fit=crop",
    language: "English",
    year: 1990,
    rating: 4.8,
    summary: "The story of Henry Hill and his life in the mob, covering his rise and fall in the criminal underworld. Martin Scorsese's crime epic.",
    director: {
      name: "Martin Scorsese",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/Martin_Scorsese"
    },
    reviews: [
      { id: "r21-1", user: "demo", rating: 5, text: "The definitive gangster film. Brilliant from start to finish.", date: "2024-09-20" }
    ]
  },
  {
    id: "movie-22",
    title: "Parasite",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=900&fit=crop",
    language: "English",
    year: 2019,
    rating: 4.8,
    summary: "A poor family schemes to infiltrate the household of a wealthy family. A darkly comic thriller about class divide and social inequality.",
    director: {
      name: "Bong Joon-ho",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/Bong_Joon-ho"
    },
    reviews: [
      { id: "r22-1", user: "demo", rating: 5, text: "Oscar-worthy masterpiece. Gripping and thought-provoking.", date: "2024-10-01" }
    ]
  },
  {
    id: "movie-23",
    title: "The Godfather",
    poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&h=900&fit=crop",
    language: "English",
    year: 1972,
    rating: 4.9,
    summary: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son. The quintessential American crime saga.",
    director: {
      name: "Francis Ford Coppola",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/Francis_Ford_Coppola"
    },
    reviews: [
      { id: "r23-1", user: "demo", rating: 5, text: "The gold standard of cinema. Absolute perfection.", date: "2024-10-10" }
    ]
  },
  {
    id: "movie-24",
    title: "Schindler's List",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=900&fit=crop",
    language: "English",
    year: 1993,
    rating: 4.9,
    summary: "A German industrialist saves over a thousand Jewish refugees during the Holocaust. Steven Spielberg's powerful and haunting masterpiece.",
    director: {
      name: "Steven Spielberg",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
      wiki: "https://en.wikipedia.org/wiki/Steven_Spielberg"
    },
    reviews: [
      { id: "r24-1", user: "demo", rating: 5, text: "Profound and deeply moving. Essential viewing.", date: "2024-10-20" }
    ]
  }
];

export const series = [
  {
    id: "series-1",
    title: "Breaking Bad",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=900&fit=crop",
    language: "English",
    year: 2008,
    rating: 4.9,
    summary: "A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family's future.",
    seasons: 5,
    episodes: 62
  },
  {
    id: "series-2",
    title: "Game of Thrones",
    poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=600&h=900&fit=crop",
    language: "English",
    year: 2011,
    rating: 4.7,
    summary: "Nine noble families wage war for control of the Iron Throne in the mythical land of Westeros.",
    seasons: 8,
    episodes: 73
  },
  {
    id: "series-3",
    title: "The Crown",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=900&fit=crop",
    language: "English",
    year: 2016,
    rating: 4.6,
    summary: "Chronicles the life of Queen Elizabeth II from the 1940s to modern times, exploring personal intrigues and political rivalries.",
    seasons: 6,
    episodes: 60
  },
  {
    id: "series-4",
    title: "Stranger Things",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&h=900&fit=crop",
    language: "English",
    year: 2016,
    rating: 4.5,
    summary: "When a young boy disappears, his friends, family, and the local police uncover a mystery involving secret experiments and terrifying supernatural forces.",
    seasons: 4,
    episodes: 42
  },
  {
    id: "series-5",
    title: "The Mandalorian",
    poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&h=900&fit=crop",
    language: "English",
    year: 2019,
    rating: 4.7,
    summary: "A lone bounty hunter navigates the outer reaches of the galaxy, protecting a mysterious child with powerful abilities.",
    seasons: 3,
    episodes: 24
  },
  {
    id: "series-6",
    title: "Succession",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=900&fit=crop",
    language: "English",
    year: 2018,
    rating: 4.8,
    summary: "The Roy family controls one of the world's largest media conglomerates. As the patriarch's health declines, his children vie for control.",
    seasons: 4,
    episodes: 39
  },
  {
    id: "series-7",
    title: "The Wire",
    poster: "https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?w=600&h=900&fit=crop",
    language: "English",
    year: 2002,
    rating: 4.9,
    summary: "Baltimore drug scene told through the eyes of drug dealers and law enforcement, exploring the city's institutional failures.",
    seasons: 5,
    episodes: 60
  },
  {
    id: "series-8",
    title: "The Sopranos",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&h=900&fit=crop",
    language: "English",
    year: 1999,
    rating: 4.8,
    summary: "New Jersey mob boss Tony Soprano seeks therapy to deal with personal and professional problems while balancing family life and organized crime.",
    seasons: 6,
    episodes: 86
  }
];

export const initialUsers = [
  { username: "demo", password: "demo123", email: "demo@cinemind.com", name: "Demo User" },
  { username: "cinephile", password: "movies123", email: "cinephile@cinemind.com", name: "Cinema Lover" }
];
