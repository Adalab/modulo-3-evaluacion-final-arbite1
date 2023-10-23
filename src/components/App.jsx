import React from "react";
import "../styles/App.scss";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import callToApi from "./services/api";
import ls from "./services/localStorage";

import MovieSceneList from "./MovieSceneList";
import Filters from "./Filters";

function App() {
  const [data, setData] = useState(ls.get("movies", []));
  const [nameFilter, setNameFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  // const [sceneDetailFilter, setSceneDetailFilter] = useState("");

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
    .filter((item) => {
      // console.log(item.movie);
      // console.log(item.movie.toLowerCase().includes(nameFilter));
      return item.movie.toLowerCase().includes(nameFilter);
    })
    .filter(
      (item) =>
        // console.log(typeof item.year);
        // console.log(typeof yearFilter);

        yearFilter ? item.year === yearFilter : true // per defecte si està vuit es false
    );

  return (
    <>
      <header>
        <h1>Owens Wilson's "wow"</h1>
      </header>
      <main>
        <Routes>
          <Route
          path="/"
          element ={
            <>
            <Filters
            nameFilter={nameFilter}
            yearFilter={yearFilter}
            handleChange={handleChange}
            handleChangeYear={handleChangeYear}
          />
          <div className="container">
            <h2>Listado de escenas de Owen Wilson</h2>
            <h2>{nameFilter}</h2>
  
            <MovieSceneList data={filteredMovies} />
          </div>
          </>
          }
          />
        </Routes>
   
      </main>
    </>
  );
}

export default App;
