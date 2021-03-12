
import axios from 'axios';

const getPlants = () => {
  return axios.get('http://localhost:3333/plants');
}

export default getPlants;