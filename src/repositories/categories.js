import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const response = await respostaDoServidor.json();
      return response;
    }

    throw new Error('Não foi possível pegar os dados!');
  });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(
    async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const response = await respostaDoServidor.json();
        return response;
      }

      throw new Error('Não foi possível pegar os dados!');
    }
  );
}

export default {
  getAll,
  getAllWithVideos,
};
