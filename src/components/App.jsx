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

    const getYears = () => {
      const years = data.map((scene) => scene.year);
      const uniqueYear = new Set(years);
      const uniqueArray = [...uniqueYear];
      return uniqueArray.sort();
    };
  

  const { pathname } = useLocation();
  const routeData = matchPath("/movie/:id", pathname);

  const movieId = routeData !== null ? routeData.params.id : "";
  const movieData = data.find((movie) => movie.id === movieId);

  return (
    <>
      <header>
        <h1 className='h1'>Owens Wilson's "wow"</h1>
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
                  years={getYears()}
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
                <Link to="/" className='title__return'>Volver</Link>
              </>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;

