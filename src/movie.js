const MOVIE_DATA = [
  {
    _id: 1,
    title: "Inception",
    description:
      "A skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state.",
    full_description:
      "Inception is a science fiction thriller directed by Christopher Nolan, renowned for its complex narrative structure and exploration of the human mind. It follows Dom Cobb, played by Leonardo DiCaprio, who is a skilled thief and an expert in the art of extraction, a process in which secrets are extracted from a target's subconscious while they dream. Cobb is offered a chance to have his criminal history erased as payment for a task considered to be impossible: planting an idea in someone's mind, a process known as inception. Accompanied by a team of specialists, including an architect who constructs the dream landscapes, they enter multiple layers of dreams that bend the rules of time and space. The film not only showcases stunning visuals and groundbreaking special effects but also poses profound questions about reality, dreams, and the nature of consciousness. Cobb's journey becomes deeply personal as he grapples with his past and the haunting memories of his deceased wife, Mal, adding emotional depth to the action-packed narrative. The intricate plot and stunning execution make Inception a cinematic masterpiece that challenges the viewer's perception of reality.",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8jIZ4ghU8MiF_BbvSUquG7zEDzlA_rXiqnA&s",
    trailer_link: "https://www.youtube.com/embed/YoHD9XEInc0", // Converted to embeddable format
    rating: 4.0,
  },
  {
    _id: 2,
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    full_description:
      "The Shawshank Redemption, directed by Frank Darabont and based on Stephen King's novella, is one of the most beloved films in cinematic history. Set in the oppressive environment of Shawshank State Penitentiary, the story revolves around Andy Dufresne, played by Tim Robbins, who is sentenced to life in prison for the murder of his wife and her lover, a crime he insists he did not commit. During his time in Shawshank, Andy befriends fellow inmate Ellis 'Red' Redding, portrayed by Morgan Freeman, who serves as the film's narrator. As the years pass, Andy's intelligence, resilience, and unwavering spirit shine through, as he not only adapts to prison life but also seeks to make a difference behind those walls. He provides hope and inspiration to his fellow inmates through acts of kindness and cleverness, while secretly plotting his escape. The film explores themes of friendship, hope, and the human spirit's indomitable will to seek freedom, even in the darkest circumstances. The Shawshank Redemption is not just a story about prison life; it’s about the power of hope and the transformative impact of friendship amidst despair. It’s a poignant reflection on the nature of justice and redemption that resonates with audiences worldwide.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer_link: "https://www.youtube.com/embed/NmzuHjWmXOc",
    rating: 3.5,
  },
  {
    _id: 3,
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    full_description:
      "The Dark Knight, directed by Christopher Nolan, is a powerful and gritty superhero film that redefined the genre and captured the imagination of audiences worldwide. Following the success of Batman Begins, this sequel delves into the depths of Gotham City’s crime and corruption as Batman, portrayed by Christian Bale, continues his quest to eliminate the criminal underworld. The emergence of a new villain, the Joker, brilliantly portrayed by Heath Ledger, escalates the chaos and challenges Batman both physically and morally. Unlike ordinary criminals, the Joker embodies an anarchic philosophy, posing philosophical questions about justice and order in a world dominated by chaos. The film intricately weaves together a narrative of moral dilemmas, featuring complex characters such as Harvey Dent, who transforms from the city’s shining beacon of hope into the vengeful character of Two-Face. The Dark Knight is not just a thrilling superhero escapade; it is a profound examination of the fine line between good and evil and the impact of fear on society. The stunning cinematography, combined with Hans Zimmer's haunting score, elevates each scene, leaving a lasting impression long after the credits roll. The film's legacy is defined by its exploration of morality, heroism, and the consequences of choices, making it a timeless classic that resonates with audiences.",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ekE6Hhz9gvIbiFSUPxt-FyAh4zXTXX0bjQ&s",
    trailer_link: "https://www.youtube.com/embed/EXeTwQWrcwY", // Converted to embeddable format
    rating: 5.0,
  },
  {
    _id: 4,
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    full_description:
      "Pulp Fiction, directed by Quentin Tarantino, is a groundbreaking film that flipped the narrative rulebook and remains iconic decades after its release. The film weaves together multiple storylines, showcasing the intertwined lives of hitmen Vincent Vega and Jules Winnfield, played by John Travolta and Samuel L. Jackson, respectively. Through a series of both violent and humor-filled vignettes, audiences are introduced to a colorful cast of characters, including a boxer, a gangster's wife, and diner robbers. The film's non-linear storytelling keeps viewers guessing as timelines shift and events unfold unpredictably. Tarantino's sharp dialogue and unique blend of dark humor and violence create a visceral yet captivating experience, drawing viewers deeply into the morally ambiguous world of crime and retribution. Pulp Fiction's cultural impact is undeniable, with memorable quotes and scenes that have permeated pop culture. The film not only challenges traditional storytelling methods but also presents a commentary on choices, luck, and the consequences that follow. Its eclectic soundtrack and stylish cinematography further enhance Tarantino's signature style, making Pulp Fiction a must-see film that continues to inspire filmmakers and entertain audiences with its audacious narrative and unforgettable characters.",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROOQWb7qwGT0Lx3Lhazq-rmUPtugkJ4UEaAA&s",
    trailer_link: "https://www.youtube.com/embed/s7EdQ4FqbhY", // Converted to embeddable format
    rating: 3.5,
  },
  {
    _id: 5,
    title: "Forrest Gump",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
    full_description:
      "Forrest Gump, directed by Robert Zemeckis, is a heartwarming tale that blends history, romance, and drama through the life of its titular character, portrayed by Tom Hanks. The story unfolds as Forrest, a man with a low IQ, recounts his extraordinary life filled with significant moments in American history, from the Vietnam War to the Watergate scandal. Despite facing countless challenges, Forrest's unwavering kindness, charm, and determination lead him to unexpected achievements and encounters with iconic figures. His love for Jenny, played by Robin Wright, serves as the emotional backbone of the narrative, highlighting themes of lost love and longing. The film explores the concept of destiny and the idea that anyone can have a profound impact on the world, regardless of their intellectual capabilities. Through its innovative use of technology to intertwine Forrest into historical footage, it creates a unique storytelling experience that captivates audiences. With an evocative score, memorable quotes, and poignant life lessons, Forrest Gump remains a timeless classic that resonates with viewers, reminding them of the power of love, perseverance, and the distinction between fate and free will. This film is not merely about the journey of one man but a reflection on the journey of life itself.",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaNwbILJZZrhqpXUECVrPf1m8h3mw8dQWwA&s",
    trailer_link: "https://www.youtube.com/embed/bLvqoHBptjg", // Converted to embeddable format
    rating: 4.5,
  },
];

export default MOVIE_DATA;
