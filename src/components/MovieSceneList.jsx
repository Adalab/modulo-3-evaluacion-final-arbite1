import React from "react";
//import SceneItem from './SceneItem';

const MovieSceneList = ({ data }) => {
  return data.map((scene, i) => {
    return (
      <ul>
        <li className='movieList' key={i}>
          <img src={scene.poster} alt={scene.movie} />
          <p>Película: {scene.movie}</p>
          <p>Frase Completa: {scene.fullLine}</p>
          <p>Año: {scene.year}</p>
        </li>
      </ul>
    );
  });
};

export default MovieSceneList;
