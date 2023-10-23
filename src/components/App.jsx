import React from "react";
import "../styles/App.scss";
import { useEffect, useState } from "react";
import { Routes, Route, Link, matchPath } from "react-router-dom";
import callToApi from "./services/api";
import ls from "./services/localStorage";
import MovieSceneList from "./MovieSceneList";
import Filters from "./Filters";
import MovieSceneDetail from "./MovieSceneDetail";
import { useLocation } from "react-router";

function App() {
  const [data, setData] = useState(ls.get("movies", []));
  const [nameFilter, setNameFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  // Get unique years from the data
  const uniqueYears = data.reduce((acc, item) => {
    if (!acc.includes(item.year)) {
      acc.push(item.year);
    }
    return acc;
  }, []);

  useEffect(() => {
    if (ls.get("movies", null) === null) {
      callToApi().then((cleanData) => {
        setData(cleanData);
        ls.set("movies", cleanData);
        console.log(cleanData.id);
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
      return item.movie.toLowerCase().includes(nameFilter);
    })
    .filter((item) => (yearFilter ? item.year === parseInt(yearFilter) : true));

  const { pathname } = useLocation();
  const routeData = matchPath("/movie/:id", pathname);

  const movieId = routeData !== null ? routeData.params.id : "";
  const movieData = data.find((movie) => movie.id === movieId);

  return (
    <>
      <header>
        <h1>Owens Wilson's "wow"</h1>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  nameFilter={nameFilter}
                  yearFilter={yearFilter}
                  handleChange={handleChange}
                  handleChangeYear={handleChangeYear}
                  years={uniqueYears}
                />
                <div className="container">
                  <h2 className='title'>Listado de escenas de Owen Wilson</h2>
                  <h2>{nameFilter}</h2>

                  <MovieSceneList data={filteredMovies} />
                </div>
              </>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <>
                <MovieSceneDetail data={movieData} />
                <Link to="/">Volver</Link>
              </>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;

