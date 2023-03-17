import Axios from 'axios';

export const getSpecies = (number: number) => {
  return Axios.get(`https://swapi.dev/api/species/${number}/`);
};
