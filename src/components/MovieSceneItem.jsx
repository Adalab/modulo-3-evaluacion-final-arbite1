import React from 'react';
//import MovieSceneList from 'MovieSceneList';


const MovieSceneItem = ({ scene }) => {
  return (
    <>
    <li>
      {/* <img src={scene.poster} alt={scene.movie} /> */}
      <p>Película: {scene.movie}</p>
      <p>Frase Completa: {scene.fullLine}</p>
      <p>Año: {scene.year}</p>
    </li>
    
    </>
  );
};

export default MovieSceneItem;
