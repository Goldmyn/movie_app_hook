import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import MOVIE_DATA from "../movie";
import { Card, Rate } from "antd";
const { Meta } = Card;

function MovieDetails() {
  const id = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  const getMovieInfo = () => {
    const movie = MOVIE_DATA.find((movie) => movie._id === Number(id._id));
    console.log(movie);
    setMovieInfo(movie);
  };

  useEffect(() => {
    getMovieInfo();
  }, []);

  if (movieInfo === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex items-center  mb-6 ">
        <NavLink
          to="/"
          className="flex justify-start text-blue-500 font-bold  text-lg border p-2 w-fit rounded-lg hover:bg-blue-500 hover:text-white shadow-2xl hover:shadow-blue-400"
        >
          {" "}
          Back
        </NavLink>
        <h1 className="text-4xl mx-auto uppercase ">{movieInfo.title}</h1>
      </div>
      <section className="container mx-auto grid h-screen place-items-center ">
        <Card
          cover={
            <iframe
              width="560"
              height="315"
              src={`${movieInfo.trailer_link}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          }
        >
          <Meta
            title={movieInfo.title}
            description={
              <div className="grid gap-6">
                <h3>{movieInfo.full_description}</h3>
                <div className="flex gap-2 items-center justify-center">
                  <span className="font-bold">Rating :</span>
                  <Rate allowHalf value={movieInfo.rating} />
                </div>
              </div>
            }
          />
        </Card>{" "}
      </section>
    </>
  );
}

export default MovieDetails;
