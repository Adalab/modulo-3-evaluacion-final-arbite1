import React from 'react';
import '../styles/App.scss'
import callToApi from './services/api';
//import ls from '../services/localStorage';
import { useEffect, useState } from 'react';
import MovieSceneList from './MovieSceneList';
//import SceneItem from './SceneItem';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    callToApi().then((dataApi) => {
      setData(dataApi);
    });
  }, []);

  

  return (
    <>
      <header>
        <h1>Owens Wilson's "wow"</h1>
      </header>
      <main>
  
        <div>
          <h2>Listado de escenas de Owen Wilson</h2>
          <MovieSceneList data={data} />
          {/*<SceneItem/>*/}
        </div>
      </main>
    </>
  )
}


export default App;
