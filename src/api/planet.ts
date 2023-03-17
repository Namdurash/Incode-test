import Axios from 'axios';

export const getPlanet = (number: number) => {
  return Axios.get(`https://swapi.dev/api/planets/${number}/`);
};
