import React from 'react';
import '../styles/App.scss'
import callToApi from './services/api';
import ls from './services/localStorage';
import { useEffect, useState } from 'react';
import MovieSceneList from './MovieSceneList';
//import MovieSceneItem from './MovieSceneItem';

function App() {

  const [data, setData] = useState(ls.get("movies", []));

  useEffect(() => {
    if(ls.get("movies", null) === null){ 
    callToApi().then((cleanData) => {
      setData(cleanData);
      ls.set("movies", cleanData);
    });
  }
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
          
        
        </div>
      </main>
    </>
  )
}


export default App;
