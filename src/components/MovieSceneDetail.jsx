import React from "react";

const MovieSceneDetail = ({ data}) => {
    
  
console.log(data);
  return (
    <>
      <img src={data.poster} alt={data.movie} />
      <h2 className='title__detail'>{data.movie}</h2>
      <p className='title__detail-director'>{data.director}</p>
      <p className='title__detail-year'>{data.year}</p>
      <p className='title__detail-char'>{data.character}</p>
      <p className='title__detail-full'>{data.fullLine}</p>
      <audio controls>
        <source src={data.audio} type="audio/mpeg" />
        Tu navegador no soporta la etiqueta audio.
      </audio>
    </>
  );
};

export default MovieSceneDetail;
