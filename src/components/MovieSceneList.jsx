import React from "react";
import MovieSceneItem from "./MovieSceneItem";

const MovieSceneList = ({ data }) => {
  if (data.length === 0) {
    return (
      <section>
        <p>No existe ningún título que coincida con.</p>
      </section>
    );
  } else {
    const renderMovies = data.map((scene, i) => {

      return (
        <section key={i} className="movieList">
          <MovieSceneItem scene={scene} />
        </section>
      );
    });
    return (
      <section>
        <ul>{renderMovies}</ul>
      </section>
    );
  }
};

export default MovieSceneList;



