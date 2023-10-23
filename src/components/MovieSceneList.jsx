import React from "react";
import MovieSceneItem from "./MovieSceneItem";
import{Link,} from "react-router-dom";


const MovieSceneList = ({ data }) => {
  if (data.length === 0) {
    return (
      <section>
        <p>No hay coincidencias</p>
      </section>
    );
  } else {
    const renderMovies = data.map((scene, i) => {

      return (
        <Link key={scene.id} to={"/movie/" + scene.id}>
        <section className="movieList">
          <MovieSceneItem scene={scene} />
        </section>
        </Link>
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





