import React from "react";
import MovieCard from "./MovieCard.jsx";

const MovieList = (props) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto p-2 gap-4 justify-center">
        {props.movieStore.map((movie) => {
          return (
            <MovieCard
              key={movie._id}
              id={movie._id}
              title={movie.title}
              description={movie.description}
              posterURL={movie.posterURL}
              rating={movie.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
