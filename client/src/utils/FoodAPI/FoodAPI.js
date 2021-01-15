import axios from 'axios'

const FoodAPI = {
  getFood: () => axios.get('/api/food')
}