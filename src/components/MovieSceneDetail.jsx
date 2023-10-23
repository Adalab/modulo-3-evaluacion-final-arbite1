import React from "react";

const MovieSceneDetail = ({ data}) => {
    
  
console.log(data);
  return (
    <>
      <img src={data.poster} alt={data.movie} />
      <h2>{data.movie}</h2>
      <p>{data.director}</p>
      <p>{data.year}</p>
      <p>{data.character}</p>
      <p>{data.fullLine}</p>
      <audio controls>
        <source src={data.audio} type="audio/mpeg" />
        Tu navegador no soporta la etiqueta audio.
      </audio>
    </>
  );
};

export default MovieSceneDetail;
