import React from "react";

import { FetchComedy } from "../DataFetching";
import MovieCard from "../movieCard/MovieCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Comedy() {
  const comedyMovie = FetchComedy();

  const readComedyMovie = () => {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    const movieCards = comedyMovie.map((movie) => {
      const movieTitle = movie.movieTitle;
      const movieId = movie.movieId;
      const movieOverview = movie.movieOverview;
      const backgroundImg = movie.backgroundImg;
      const posterImg = movie.posterImg;
      const releaseDate = movie.releaseDate;

      return (
        <MovieCard
          movieTitle={movieTitle}
          movieId={movieId}
          movieOverview={movieOverview}
          backgroundImg={backgroundImg}
          posterImg={posterImg}
          releaseDate={releaseDate}
          key={movieId}
        />
      );
    });
    return (
      <Carousel responsive={responsive} infinite={true}>
        {movieCards}
      </Carousel>
    );
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <h1 style={{ marginLeft: "20px" }}>Comedy</h1>
      {readComedyMovie()}
    </div>
  );

  
}

export default Comedy;
