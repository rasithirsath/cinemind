// Hard-coded movie, series, and user data for Cinemind

export const movies = [
  // Tamil Movies
  {
    id: "movie-1",
    title: "Vikram",
    poster:
      "https://image2url.com/images/1763806039639-b64ab51c-a77c-47fa-afc0-0bbf89b7dc2a.jpeg",
    language: "Tamil",
    year: 2022,
    rating: 4.5,
    summary:
      "A black-ops agent and his team embark on a dangerous mission to track down a masked vigilante, uncovering a web of crime and corruption. Intense action sequences blend with emotional storytelling in this cinematic masterpiece.",
    director: {
      name: "Lokesh Kanagaraj",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Lokesh_Kanagaraj_at_The_Zee_Cine_Awards.jpg/960px-Lokesh_Kanagaraj_at_The_Zee_Cine_Awards.jpg",
      wiki: "https://en.wikipedia.org/wiki/Lokesh_Kanagaraj",
    },
    reviews: [
      {
        id: "r1-1",
        user: "demo",
        rating: 5,
        text: "Absolute masterpiece! The action choreography is world-class.",
        date: "2024-01-15",
      },
      {
        id: "r1-2",
        user: "cinephile",
        rating: 4,
        text: "Gripping narrative with stellar performances.",
        date: "2024-01-20",
      },
    ],
  },
  {
    id: "movie-2",
    title: "Jai Bhim  ",
    poster:
      "https://image2url.com/images/1763812361382-ee503b6b-2d4c-4389-8c84-8b8d685ad09c.jpg",
    language: "Tamil",
    year: 2021,
    rating: 4.8,
    summary:
      "A fierce advocate fights for justice for a marginalized tribal woman whose husband disappears from police custody. This powerful drama sheds light on systemic oppression and human rights.",
    director: {
      name: "T. J. Gnanavel",
      photo:
        "https://image2url.com/images/1763812454855-77fd9541-ccbc-480e-bbae-bfa1bf8aff0f.jpeg",
      wiki: "https://en.wikipedia.org/wiki/T._J._Gnanavel",
    },
    reviews: [
      {
        id: "r2-1",
        user: "demo",
        rating: 5,
        text: "Heart-wrenching and necessary storytelling. A must-watch.",
        date: "2024-02-10",
      },
      {
        id: "r2-2",
        user: "activist",
        rating: 5,
        text: "Brings crucial issues to the forefront with sensitivity.",
        date: "2024-02-14",
      },
    ],
  },
  {
    id: "movie-3",
    title: "Soorarai Pottru",
    poster:
      "https://image2url.com/images/1763812587206-51445140-2c5e-462c-a1ec-0aae08a25cc7.jpg",
    language: "Tamil",
    year: 2020,
    rating: 4.7,
    summary:
      "Inspired by true events, this film follows an ambitious man from a small town who dreams of launching a low-cost airline to connect the common people. A story of perseverance, innovation, and triumph over adversity.",
    director: {
      name: "Sudha Kongara",
      photo:
        "https://image2url.com/images/1763812659272-ea69bcb7-c514-4860-9609-875cd6bf7c68.jpg",
      wiki: "https://en.wikipedia.org/wiki/Sudha_Kongara",
    },
    reviews: [
      {
        id: "r3-1",
        user: "demo",
        rating: 5,
        text: "Inspiring and beautifully executed. One of the best biopics.",
        date: "2024-03-01",
      },
      {
        id: "r3-2",
        user: "entrepreneur",
        rating: 4,
        text: "Motivational journey that resonates with dreamers.",
        date: "2024-03-05",
      },
    ],
  },
  {
    id: "movie-4",
    title: "Master",
    poster:
      "https://image2url.com/images/1763812862901-fd3df174-7688-4b84-ba02-90e1dfb98c22.jpg",
    language: "Tamil",
    year: 2021,
    rating: 4.3,
    summary:
      "An alcoholic professor is sent to a juvenile home where he confronts a ruthless gangster. What unfolds is a high-stakes battle of wits, morality, and redemption.",
    director: {
      name: "Lokesh Kanagaraj",
      photo:
        "https://image2url.com/images/1763812886850-eedc1e91-cfd7-4022-90a5-fe07ba8ab832.jpg",
      wiki: "https://en.wikipedia.org/wiki/Lokesh_Kanagaraj",
    },
    reviews: [
      {
        id: "r4-1",
        user: "demo",
        rating: 4,
        text: "Entertaining clash between two powerhouse actors.",
        date: "2024-03-20",
      },
    ],
  },
  {
    id: "movie-5",
    title: "Karnan",
    poster:
      "https://image2url.com/images/1763813114442-d3603727-b20c-483f-8813-309e05ad7643.jpg",
    language: "Tamil",
    year: 2021,
    rating: 4.6,
    summary:
      "A fearless young man stands up against caste-based oppression in his village. This raw and visceral tale celebrates the fight for dignity and equality.",
    director: {
      name: "Mari Selvaraj",
      photo:
        "https://image2url.com/images/1763813161499-ad773909-2f9d-4e8e-bf5c-b078a39e4d56.jpg",
      wiki: "https://en.wikipedia.org/wiki/Mari_Selvaraj",
    },
    reviews: [
      {
        id: "r5-1",
        user: "demo",
        rating: 5,
        text: "Powerful and unflinching. A modern classic.",
        date: "2024-04-05",
      },
      {
        id: "r5-2",
        user: "reviewer",
        rating: 5,
        text: "Raw emotion and brilliant direction.",
        date: "2024-04-08",
      },
    ],
  },
  {
    id: "movie-6",
    title: "Anbe Sivam",
    poster:
      "https://image2url.com/images/1763813277160-49cdd956-85bd-415f-b847-4a532d9991c6.jpg",
    language: "Tamil",
    year: 2003,
    rating: 4.9,
    summary:
      "Two contrasting personalities embark on a journey together, discovering the true meaning of compassion, humanity, and love. A timeless philosophical drama.",
    director: {
      name: "Sundar C",
      photo:
        "https://image2url.com/images/1763813297679-755ea74f-3c5e-4eb0-a053-1e77ab2604b7.jpg",
      wiki: "https://en.wikipedia.org/wiki/Sundar_C",
    },
    reviews: [
      {
        id: "r6-1",
        user: "demo",
        rating: 5,
        text: "Ahead of its time. A philosophical masterpiece.",
        date: "2024-04-15",
      },
    ],
  },
  {
    id: "movie-7",
    title: "Nayakan",
    poster:
      "https://image2url.com/images/1763813361656-ba3c7bd2-a53e-469f-8801-d8bc7ecbd043.jpg",
    language: "Tamil",
    year: 1987,
    rating: 4.8,
    summary:
      "A slum boy grows up to become a feared underworld don, battling rivals and the system while trying to maintain his moral code. An epic crime saga.",
    director: {
      name: "Mani Ratnam",
      photo:
        "https://image2url.com/images/1763813382858-fa4c4426-8a66-4460-9722-a84e6c0bc1b8.jpg",
      wiki: "https://en.wikipedia.org/wiki/Mani_Ratnam",
    },
    reviews: [
      {
        id: "r7-1",
        user: "demo",
        rating: 5,
        text: "Iconic film that defined a generation.",
        date: "2024-05-01",
      },
    ],
  },
  {
    id: "movie-8",
    title: "96",
    poster:
      "https://image2url.com/images/1763813523522-a78cea8c-2ae1-445d-a14c-bb6563ac66c8.jpg",
    language: "Tamil",
    year: 2018,
    rating: 4.5,
    summary:
      "Two high school sweethearts reunite after 22 years at a reunion, rekindling memories and emotions. A tender, bittersweet romance that touches the soul.",
    director: {
      name: "C. Prem Kumar",
      photo:
        "https://image2url.com/images/1763813545174-51281f69-a8e7-4efb-b682-2a7ccfd07e52.jpg",
      wiki: "https://en.wikipedia.org/wiki/C._Prem_Kumar",
    },
    reviews: [
      {
        id: "r8-1",
        user: "demo",
        rating: 5,
        text: "Beautifully nostalgic and emotionally resonant.",
        date: "2024-05-10",
      },
    ],
  },
  {
    id: "movie-9",
    title: "Theeran Adhigaaram Ondru",
    poster:
      "https://image2url.com/images/1763813638642-52a80979-2311-4848-8503-4a229215e3b3.jpg",
    language: "Tamil",
    year: 2017,
    rating: 4.4,
    summary:
      "A dedicated police officer leads a special task force to hunt down a notorious gang of highway robbers. Based on true events, this thriller is intense and gripping.",
    director: {
      name: "H. Vinoth",
      photo:
        "https://image2url.com/images/1763813655963-910cec88-56ec-46f7-91fc-e9232df5fb96.jpeg",
      wiki: "https://en.wikipedia.org/wiki/H._Vinoth",
    },
    reviews: [
      {
        id: "r9-1",
        user: "demo",
        rating: 4,
        text: "Realistic and hard-hitting police procedural.",
        date: "2024-05-20",
      },
    ],
  },
  {
    id: "movie-10",
    title: "Vada Chennai",
    poster:
      "https://image2url.com/images/1763813750180-eb106af3-ee5d-4854-bb77-4be9ef4c4b35.jpg",
    language: "Tamil",
    year: 2018,
    rating: 4.6,
    summary:
      "A carrom player's life takes a dark turn when he gets entangled in the murky world of North Chennai's gang wars. An epic crime saga spanning three decades.",
    director: {
      name: "Vetrimaaran",
      photo:
        "https://image2url.com/images/1763813772228-a2535052-a484-4d6c-ad05-688bc0d2dd1a.jpg",
      wiki: "https://en.wikipedia.org/wiki/Vetrimaaran",
    },
    reviews: [
      {
        id: "r10-1",
        user: "demo",
        rating: 5,
        text: "Gritty, layered storytelling at its finest.",
        date: "2024-06-01",
      },
    ],
  },
  {
    id: "movie-11",
    title: "Asuran",
    poster:
      "https://image2url.com/images/1763813844114-91b6624f-8920-4fad-ae41-b2de3aaa8216.jpg",
    language: "Tamil",
    year: 2019,
    rating: 4.7,
    summary:
      "A peaceful farmer's dark past resurfaces when his family is threatened by powerful landlords. A tale of vengeance, survival, and social injustice.",
    director: {
      name: "Vetrimaaran",
      photo:
        "https://image2url.com/images/1763813772228-a2535052-a484-4d6c-ad05-688bc0d2dd1a.jpg",
      wiki: "https://en.wikipedia.org/wiki/Vetrimaaran",
    },
    reviews: [
      {
        id: "r11-1",
        user: "demo",
        rating: 5,
        text: "Brutal and unforgettable. A masterclass in filmmaking.",
        date: "2024-06-10",
      },
    ],
  },
  {
    id: "movie-12",
    title: "Visaranai",
    poster:
      "https://image2url.com/images/1763813931128-19f0afce-46b1-4a96-8e16-4befc8a89b55.jpg",
    language: "Tamil",
    year: 2015,
    rating: 4.8,
    summary:
      "Four Tamil laborers are tortured by police into confessing to a crime they didn't commit. A harrowing, realistic portrayal of police brutality and systemic corruption.",
    director: {
      name: "Vetrimaaran",
      photo:
        "https://image2url.com/images/1763813772228-a2535052-a484-4d6c-ad05-688bc0d2dd1a.jpg",
      wiki: "https://en.wikipedia.org/wiki/Vetrimaaran",
    },
    reviews: [
      {
        id: "r12-1",
        user: "demo",
        rating: 5,
        text: "Disturbing, powerful, and necessary cinema.",
        date: "2024-06-20",
      },
    ],
  },

  // English Movies
  {
    id: "movie-13",
    title: "The Shawshank Redemption",
    poster:
      "https://image2url.com/images/1763814085982-f214591f-c79c-4eb4-9c51-eec5cf409cc7.jpg",
    language: "English",
    year: 1994,
    rating: 4.9,
    summary:
      "Two imprisoned men bond over years, finding redemption through acts of decency. A timeless story of hope, friendship, and the resilience of the human spirit.",
    director: {
      name: "Frank Darabont",
      photo:
        "https://image2url.com/images/1763814123062-2afe99c7-853b-44ad-a017-fcb39fc67831.jpg",
      wiki: "https://en.wikipedia.org/wiki/Frank_Darabont",
    },
    reviews: [
      {
        id: "r13-1",
        user: "demo",
        rating: 5,
        text: "One of the greatest films ever made. Pure perfection.",
        date: "2024-07-01",
      },
    ],
  },
  {
    id: "movie-14",
    title: "The Dark Knight",
    poster:
      "https://image2url.com/images/1763814213233-b063df66-7f48-4068-a17a-dd45e6629785.jpg",
    language: "English",
    year: 2008,
    rating: 4.8,
    summary:
      "Batman faces his greatest challenge when the Joker wreaks havoc on Gotham City. A dark, complex superhero film that transcends the genre.",
    director: {
      name: "Christopher Nolan",
      photo:
        "https://image2url.com/images/1763814290266-97768d1d-0a5c-4d41-8e20-f0474ea74bc3.jpg",
      wiki: "https://en.wikipedia.org/wiki/Christopher_Nolan",
    },
    reviews: [
      {
        id: "r14-1",
        user: "demo",
        rating: 5,
        text: "Heath Ledger's Joker is legendary. Masterpiece.",
        date: "2024-07-10",
      },
    ],
  },
  {
    id: "movie-15",
    title: "Inception",
    poster:
      "https://image2url.com/images/1763814396144-25ce433f-6a55-4ee7-bd4f-fa4554314826.jpg",
    language: "English",
    year: 2010,
    rating: 4.7,
    summary:
      "A skilled thief enters the dreams of others to steal secrets. But his latest job involves planting an idea deep within a target's subconscious. Mind-bending thriller.",
    director: {
      name: "Christopher Nolan",
      photo:
        "https://image2url.com/images/1763814290266-97768d1d-0a5c-4d41-8e20-f0474ea74bc3.jpg",
      wiki: "https://en.wikipedia.org/wiki/Christopher_Nolan",
    },
    reviews: [
      {
        id: "r15-1",
        user: "demo",
        rating: 5,
        text: "Visually stunning and intellectually challenging.",
        date: "2024-07-20",
      },
    ],
  },
  {
    id: "movie-16",
    title: "Interstellar",
    poster:
      "https://image2url.com/images/1763814486637-94ad25f3-61b7-4e32-bb7f-1586d18c835a.jpg",
    language: "English",
    year: 2014,
    rating: 4.6,
    summary:
      "A team of astronauts travels through a wormhole near Saturn in search of a new home for humanity. Epic sci-fi exploring love, sacrifice, and survival.",
    director: {
      name: "Christopher Nolan",
      photo:
        "https://image2url.com/images/1763814290266-97768d1d-0a5c-4d41-8e20-f0474ea74bc3.jpg",
      wiki: "https://en.wikipedia.org/wiki/Christopher_Nolan",
    },
    reviews: [
      {
        id: "r16-1",
        user: "demo",
        rating: 5,
        text: "Emotional and visually breathtaking space odyssey.",
        date: "2024-08-01",
      },
    ],
  },
  {
    id: "movie-17",
    title: "Pulp Fiction",
    poster:
      "https://image2url.com/images/1763814570031-cd605477-f9e0-4a89-ad1c-b6473e58e0b3.jpg",
    language: "English",
    year: 1994,
    rating: 4.7,
    summary:
      "Interconnected stories of LA mobsters, fringe players, and a mysterious briefcase. Quentin Tarantino's nonlinear masterpiece redefined cinema.",
    director: {
      name: "Quentin Tarantino",
      photo:
        "https://image2url.com/images/1763814590545-a46b7ced-a708-437d-8425-1aab4f5c390d.jpg",
      wiki: "https://en.wikipedia.org/wiki/Quentin_Tarantino",
    },
    reviews: [
      {
        id: "r17-1",
        user: "demo",
        rating: 5,
        text: "Iconic dialogue and unforgettable scenes throughout.",
        date: "2024-08-10",
      },
    ],
  },
  {
    id: "movie-18",
    title: "Forrest Gump",
    poster:
      "https://image2url.com/images/1763815334451-b8c17cb3-5678-4d5f-989f-9d09d4e49768.jpg",
    language: "English",
    year: 1994,
    rating: 4.5,
    summary:
      "A simple man with a low IQ unwittingly influences major historical events while pursuing his childhood sweetheart. Heartwarming and inspirational.",
    director: {
      name: "Robert Zemeckis",
      photo:
        "https://image2url.com/images/1763814790878-e28496ba-a0db-4222-892f-63ec876e703f.jpg",
      wiki: "https://en.wikipedia.org/wiki/Robert_Zemeckis",
    },
    reviews: [
      {
        id: "r18-1",
        user: "demo",
        rating: 5,
        text: "Life is like a box of chocolates... Timeless classic.",
        date: "2024-08-20",
      },
    ],
  },
  {
    id: "movie-19",
    title: "Fight Club",
    poster:
      "https://image2url.com/images/1763815304313-8431cc5a-e95d-4d8f-90cc-5f5035c68ce8.jpg",
    language: "English",
    year: 1999,
    rating: 4.6,
    summary:
      "An insomniac office worker forms an underground fight club with a charismatic soap maker. A dark, satirical look at masculinity and consumerism.",
    director: {
      name: "David Fincher",
      photo:
        "https://image2url.com/images/1763814913767-66307769-3098-4bca-ae9e-ef0731ea9f32.jpg",
      wiki: "https://en.wikipedia.org/wiki/David_Fincher",
    },
    reviews: [
      {
        id: "r19-1",
        user: "demo",
        rating: 5,
        text: "Mind-blowing twist and cultural phenomenon.",
        date: "2024-09-01",
      },
    ],
  },
  {
    id: "movie-20",
    title: "The Matrix",
    poster:
      "https://image2url.com/images/1763815029545-dbc6a785-09f1-4ff3-aea6-19cc995eeeb6.jpg",
    language: "English",
    year: 1999,
    rating: 4.7,
    summary:
      "A hacker discovers that reality is a simulation controlled by machines. Revolutionary sci-fi that changed action cinema forever.",
    director: {
      name: "The Wachowskis",
      photo:
        "https://image2url.com/images/1763815049330-3118d723-a49f-4e59-816f-9c235b7527fe.jpg",
      wiki: "https://en.wikipedia.org/wiki/The_Wachowskis",
    },
    reviews: [
      {
        id: "r20-1",
        user: "demo",
        rating: 5,
        text: "Groundbreaking visuals and philosophy. Iconic.",
        date: "2024-09-10",
      },
    ],
  },
  {
    id: "movie-21",
    title: "Goodfellas",
    poster:
      "https://image2url.com/images/1763815153857-bb337db5-7875-4fb7-9420-381651bc97c6.jpg",
    language: "English",
    year: 1990,
    rating: 4.8,
    summary:
      "The story of Henry Hill and his life in the mob, covering his rise and fall in the criminal underworld. Martin Scorsese's crime epic.",
    director: {
      name: "Martin Scorsese",
      photo:
        "https://image2url.com/images/1763815178393-4a377b34-bd43-4347-b9d6-aa5bf29243ee.jpeg",
      wiki: "https://en.wikipedia.org/wiki/Martin_Scorsese",
    },
    reviews: [
      {
        id: "r21-1",
        user: "demo",
        rating: 5,
        text: "The definitive gangster film. Brilliant from start to finish.",
        date: "2024-09-20",
      },
    ],
  },
  {
    id: "movie-22",
    title: "Parasite",
    poster:
      "https://image2url.com/images/1763815500010-146f925b-ef36-4931-94c7-7db258db625c.jpg",
    language: "English",
    year: 2019,
    rating: 4.8,
    summary:
      "A poor family schemes to infiltrate the household of a wealthy family. A darkly comic thriller about class divide and social inequality.",
    director: {
      name: "Bong Joon-ho",
      photo:
        "https://image2url.com/images/1763815658919-212b8781-491e-4162-8da3-6d32eb9c1fc5.jpg",
      wiki: "https://en.wikipedia.org/wiki/Bong_Joon-ho",
    },
    reviews: [
      {
        id: "r22-1",
        user: "demo",
        rating: 5,
        text: "Oscar-worthy masterpiece. Gripping and thought-provoking.",
        date: "2024-10-01",
      },
    ],
  },
  {
    id: "movie-23",
    title: "The Godfather",
    poster:
      "https://image2url.com/images/1763815775508-3d262343-c1ef-4725-94f6-672c358be311.jpg",
    language: "English",
    year: 1972,
    rating: 4.9,
    summary:
      "The aging patriarch of an organized crime dynasty transfers control to his reluctant son. The quintessential American crime saga.",
    director: {
      name: "Francis Ford Coppola",
      photo:
        "https://image2url.com/images/1763815803902-f12bd742-8d49-4408-b9d6-04a0c506bbc5.jpg",
      wiki: "https://en.wikipedia.org/wiki/Francis_Ford_Coppola",
    },
    reviews: [
      {
        id: "r23-1",
        user: "demo",
        rating: 5,
        text: "The gold standard of cinema. Absolute perfection.",
        date: "2024-10-10",
      },
    ],
  },
  {
    id: "movie-24",
    title: "Schindler's List",
    poster:
      "https://image2url.com/images/1763815953345-5a104929-2d81-4d9b-8a0a-eb02b919ecf4.jpg",
    language: "English",
    year: 1993,
    rating: 4.9,
    summary:
      "A German industrialist saves over a thousand Jewish refugees during the Holocaust. Steven Spielberg's powerful and haunting masterpiece.",
    director: {
      name: "Steven Spielberg",
      photo:
        "https://image2url.com/images/1763815978492-5b2de21b-48a2-4deb-a100-547cae2643ed.jpg",
      wiki: "https://en.wikipedia.org/wiki/Steven_Spielberg",
    },
    reviews: [
      {
        id: "r24-1",
        user: "demo",
        rating: 5,
        text: "Profound and deeply moving. Essential viewing.",
        date: "2024-10-20",
      },
    ],
  },

  {
    id: "movie-25",
    title: "Kal Ho Naa Ho",
    poster:
      "https://image2url.com/images/1763816635707-5efd5e05-c9fc-4964-ab38-18ecfe8ef1b0.jpg",
    language: "Hindi",
    year: 2003,
    rating: 4.5,
    summary:
      "Naina, an introverted, perpetually depressed girl's life changes when she meets Aman. But Aman has a secret of his own which changes their lives forever. Embroiled in all this is Rohit, Naina's best friend who conceals his love for her.",
    director: {
      name: "Nikkhil Advani",
      photo:
        "https://image2url.com/images/1763816657472-35cbc34d-abcd-4a59-a9e3-e7c2ca3a0a8a.jpg",
      wiki: "https://en.wikipedia.org/wiki/Nikkhil_Advani",
    },
    reviews: [
      {
        id: "r25-1",
        user: "demo",
        rating: 5,
        text: "This is one of the best films ever made! I watched it a few days ago and i still have the movie running through my head. ",
        date: "2024-10-21",
      },
    ],
  },
  {
    id: "movie-26",
    title: "Yeh Jawaani Hai Deewani",
    poster:
      "https://image2url.com/images/1763817015095-5bb4e607-9ac2-4cab-a95f-bfd6f1ba2910.jpg",
    language: "Hindi",
    year: 2013,
    rating: 4.8,
    summary:
      "Kabir and Naina bond during a trekking trip. Before Naina can express herself, Kabir leaves India to pursue his career. They meet again years later, but he still cherishes his dreams more than bonds.",
    director: {
      name: "Ayan Mukerji",
      photo:
        "https://image2url.com/images/1763816984440-b758dec5-f04f-49e1-a037-ee1078cb959c.jpg",
      wiki: "https://en.wikipedia.org/wiki/Ayan_Mukerji",
    },
    reviews: [
      {
        id: "r26-1",
        user: "demo",
        rating: 4.9,
        text: "A film that will make you want to fall in love",
        date: "2024-10-15",
      },
    ],
  },
  {
    id: "movie-27",
    title: "Rab Ne Bana Di Jodi",
    poster:
      "https://image2url.com/images/1763817308133-a3ab9a7f-14c0-49a6-9bfc-c0f98bf9f86d.jpg",
    language: "Hindi",
    year: 2008,
    rating: 4.8,
    summary:
      "A breathtaking, goose flesh igniting, awe inspiring love journey of an ordinary man Suri and his 'total opposite' love Taani.",
    director: {
      name: "Aditya Chopra",
      photo:
        "https://image2url.com/images/1763817337315-a2301849-b8a9-4855-8a0a-a9d15bac4630.jpg",
      wiki: "https://en.wikipedia.org/wiki/Aditya_Chopra",
    },
    reviews: [
      {
        id: "r27-1",
        user: "demo",
        rating: 4.5,
        text: "RNBDJ 2008 is very entertaining and different film. We have not seen such a good movie for a long time.",
        date: "2024-12-20",
      },
    ],
  },
  {
    id: "movie-28",
    title: "Dangal",
    poster:
      "https://image2url.com/images/1763817593421-1398ead5-b11d-43e1-9249-c7b83711279d.webp",
    language: "Hindi",
    year: 2016,
    rating: 5,
    summary:
      "Mahavir Singh Phogat, a former wrestler, decides to fulfill his dream of winning a gold medal for his country by training his daughters for the Commonwealth Games despite the existing social stigmas.",
    director: {
      name: "Nitesh Tiwari",
      photo:
        "https://image2url.com/images/1763817616776-acaa1da0-a011-42cd-984d-ba068768f5fc.jpg",
      wiki: "https://en.wikipedia.org/wiki/Nitesh_Tiwari",
    },
    reviews: [
      {
        id: "r28-1",
        user: "demo",
        rating: 5,
        text: "Energetic,emotional,patriotic and a good message",
        date: "2024-1-5",
      },
    ],
  },
];

export const series = [
  {
    id: "series-1",
    title: "Breaking Bad",
    poster:
      "https://image2url.com/images/1763819869144-6c46ba39-d115-4726-8a31-bf59e245b208.jpg",
    language: "English",
    year: 2008,
    rating: 4.9,
    summary:
      "A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family's future.",
    seasons: 5,
    episodes: 62,
  },
  {
    id: "series-2",
    title: "Game of Thrones",
    poster:
      "https://image2url.com/images/1763819815375-80cf5ee3-76de-4e88-99cf-140d3d897b97.jpg",
    language: "English",
    year: 2011,
    rating: 4.7,
    summary:
      "Nine noble families wage war for control of the Iron Throne in the mythical land of Westeros.",
    seasons: 8,
    episodes: 73,
  },
  {
    id: "series-3",
    title: "The Crown",
    poster:
      "https://image2url.com/images/1763819675294-c12832d7-5d65-4a45-9e42-bf6ff3e439f6.jpg",
    language: "English",
    year: 2016,
    rating: 4.6,
    summary:
      "Chronicles the life of Queen Elizabeth II from the 1940s to modern times, exploring personal intrigues and political rivalries.",
    seasons: 6,
    episodes: 60,
  },
  {
    id: "series-4",
    title: "Stranger Things",
    poster:
      "https://image2url.com/images/1763819619592-9a615a7f-8c29-4489-a7dc-7141072c790a.jpg",
    language: "English",
    year: 2016,
    rating: 4.5,
    summary:
      "When a young boy disappears, his friends, family, and the local police uncover a mystery involving secret experiments and terrifying supernatural forces.",
    seasons: 4,
    episodes: 42,
  },
  {
    id: "series-5",
    title: "The Mandalorian",
    poster:
      "https://image2url.com/images/1763819486612-c94def97-c6bb-4234-925c-9b151c8b9d9c.webp",
    language: "English",
    year: 2019,
    rating: 4.7,
    summary:
      "A lone bounty hunter navigates the outer reaches of the galaxy, protecting a mysterious child with powerful abilities.",
    seasons: 3,
    episodes: 24,
  },
  {
    id: "series-6",
    title: "Succession",
    poster:
      "https://image2url.com/images/1763820035086-3c743c91-66f4-4cc5-afe7-bdfccf7a0e34.jpg",
    language: "English",
    year: 2018,
    rating: 4.8,
    summary:
      "The Roy family controls one of the world's largest media conglomerates. As the patriarch's health declines, his children vie for control.",
    seasons: 4,
    episodes: 39,
  },
  {
    id: "series-7",
    title: "The Wire",
    poster:
      "https://image2url.com/images/1763819342375-e43a5557-867a-4779-a92d-775ad734694f.jpg",
    language: "English",
    year: 2002,
    rating: 4.9,
    summary:
      "Baltimore drug scene told through the eyes of drug dealers and law enforcement, exploring the city's institutional failures.",
    seasons: 5,
    episodes: 60,
  },
  {
    id: "series-8",
    title: "The Sopranos",
    poster:
      "https://image2url.com/images/1763819199617-d55e98c9-35a1-4907-bb7f-c891943ad6b4.jpg",
    language: "English",
    year: 1999,
    rating: 4.8,
    summary:
      "New Jersey mob boss Tony Soprano seeks therapy to deal with personal and professional problems while balancing family life and organized crime.",
    seasons: 6,
    episodes: 86,
  },
  {
    id: "series-9",
    title: "Vikings",
    poster:
      "https://image2url.com/images/1763818991596-3624f4d8-535e-46c5-bade-992e0bab7b39.webp",
    language: "English",
    year: 2013,
    rating: 4.7,
    summary:
      "The legendary tale of Ragnar Lothbrok and his rise from farmer to fearless Viking warrior and king, exploring Norse culture and brutal conquests.",
    seasons: 6,
    episodes: 89,
  },
  {
    id: "series-10",
    title: "The Vampire Diaries",
    poster:
      "https://image2url.com/images/1763819031823-a8455423-a38c-4b63-9682-60fad5ab11a9.jpg",
    language: "English",
    year: 2009,
    rating: 4.5,
    summary:
      "A teenage girl's life changes when she falls in love with two vampire brothers and uncovers the dark supernatural secrets of her town.",
    seasons: 8,
    episodes: 171,
  },
  {
    id: "series-11",
    title: "From",
    poster:
      "https://image2url.com/images/1763819063551-6a401534-2ef8-4a4c-bf56-3ef5a9368d18.jpg",
    language: "English",
    year: 2022,
    rating: 4.6,
    summary:
      "Residents of a mysterious town find themselves trapped and unable to leave while terrifying creatures emerge after sunset.",
    seasons: 3,
    episodes: 31,
  },
  {
    id: "series-12",
    title: "Dark",
    poster:
      "https://image2url.com/images/1763819098225-b6362485-71a4-4bf5-9938-667c34ce10f6.jpg",
    language: "German",
    year: 2017,
    rating: 4.8,
    summary:
      "A mind-bending sci-fi thriller exploring time travel, secrets, and interconnected families in the small town of Winden.",
    seasons: 3,
    episodes: 26,
  },
];

export const initialUsers = [
  {
    username: "demo",
    password: "demo123",
    email: "demo@cinemind.com",
    name: "Demo User",
  },
  {
    username: "cinephile",
    password: "movies123",
    email: "cinephile@cinemind.com",
    name: "Cinema Lover",
  },
];
