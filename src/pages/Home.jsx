import "../App.css";
import MovieList from "../components/MovieList.jsx";
import MOVIE_DATA from "../movie.js";
import { useState } from "react";
import AddMovie from "../components/AddMovie.jsx";
import Filter from "../components/Filter.jsx";

function Home() {
  const [movieStore, setMovieStore] = useState(MOVIE_DATA);
  const [titleQuery, setTitleQuery] = useState("");
  const [selectedRating, setSelectedRating] = useState(null);

  const filteredMovies = movieStore.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleQuery.toLowerCase()) &&
      (selectedRating ? movie.rating === selectedRating : true)
  );

  return (
    <div className="App">
      <h1 className="uppercase font-extrabold text-3xl text-blue-700">
        Movie App
      </h1>
      <section className="container mx-auto my-4">
        <Filter
          titleQuery={titleQuery}
          setTitleQuery={setTitleQuery}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />
      </section>
      <AddMovie
        handleAddMovie={(newMovie) => setMovieStore([newMovie, ...movieStore])}
      />
      <MovieList movieStore={filteredMovies} />
    </div>
  );
}

export default Home;
