import Axios from 'axios';

export const getCharacters = ({page}: {page: number}) => {
  return Axios.get(`https://swapi.dev/api/people/?page=${page}`);
};
