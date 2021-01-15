import axios from 'axios'

const FoodAPI = {
  getFood: () => axios.get('/api/foods'),
}

export default FoodAPI
