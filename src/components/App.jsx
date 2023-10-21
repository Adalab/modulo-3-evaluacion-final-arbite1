import React from "react";
import "../styles/App.scss";
import callToApi from "./services/api";
import ls from "./services/localStorage";
import { useEffect, useState } from "react";
import MovieSceneList from "./MovieSceneList";
import Filters from "./Filters";
//import MovieSceneItem from './MovieSceneItem';

function App() {
  const [data, setData] = useState(ls.get("movies", []));
  const [nameFilter, setNameFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  useEffect(() => {
    if (ls.get("movies", null) === null) {
      callToApi().then((cleanData) => {
        setData(cleanData);
        ls.set("movies", cleanData);

      });
    }
  }, []);

  const handleChange = (value) => {
    setNameFilter(value);

  };
  const handleChangeYear = (value) => {
    setYearFilter(value);

  };

  const filteredMovies = data
  .filter(item => {
    console.log(item.movie);
    console.log(item.movie.toLowerCase().includes(nameFilter));
    return item.movie.toLowerCase().includes(nameFilter)})
  .filter(item => 
    // console.log(typeof item.year);
    // console.log(typeof yearFilter);


    yearFilter ? item.year === yearFilter: true// per defecte si está vuit es false
  )




  return (
    <>
      <header>
        <h1>Owens Wilson's "wow"</h1>
      </header>
      <main>
        <Filters nameFilter={nameFilter} yearFilter={yearFilter} handleChange={handleChange}
        handleChangeYear={handleChangeYear} />
        <div>
          <h2>Listado de escenas de Owen Wilson</h2>
          <h2>{nameFilter}</h2>

       
          <MovieSceneList data={filteredMovies}  />
        </div>
      </main>
    </>
  );
}

export default App;
