import { v4 as uuidv4 } from "uuid";

const callToApi = () => {
  // Llamamos a la API
  return fetch(
    "https://owen-wilson-wow-api.onrender.com/wows/random?results=50"
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((scene) => {
        const newId = uuidv4();
        return {
          poster: scene.poster,
          movie: scene.movie,
          director: scene.director,
          character: scene.character,
          fullLine: scene.full_line,
          year: scene.year,
          audio: scene.audio,
          id: newId,
        };
      });
      console.log(cleanData.id);

      return cleanData;
    });
};

export default callToApi;
